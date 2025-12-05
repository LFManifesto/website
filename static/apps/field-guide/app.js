/**
 * Light Fighter Guide App
 * Interactive reference guide with search, checklists, and form generators
 */

(function() {
  'use strict';

  // ==========================================================================
  // State
  // ==========================================================================

  const state = {
    sections: [],
    searchIndex: null,
    currentSection: null,
    currentSubsection: null,
    checklistStates: {},
    isOffline: !navigator.onLine
  };

  // ==========================================================================
  // Data Loading
  // ==========================================================================

  const dataFiles = ['drones', 'communications', 'sigint', 'marksmanship', 'mission-planning'];

  async function loadData() {
    try {
      const promises = dataFiles.map(file =>
        fetch(`data/${file}.json`).then(r => r.json())
      );
      state.sections = await Promise.all(promises);
      initializeApp();
    } catch (error) {
      console.error('Failed to load data:', error);
      showError('Failed to load field guide data. Please refresh the page.');
    }
  }

  function showError(message) {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="content-card">
        <h3>Error</h3>
        <p>${message}</p>
        <button class="form-btn" onclick="location.reload()">Reload Page</button>
      </div>
    `;
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function initializeApp() {
    loadChecklistStates();
    buildSidebar();
    initSearch();
    initMobileMenu();
    initKeyboardShortcuts();
    initOfflineIndicator();
    handleInitialRoute();
  }

  function handleInitialRoute() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      navigateToHash(hash);
    } else {
      // Show welcome/overview
      showWelcome();
    }
  }

  // ==========================================================================
  // Sidebar Navigation
  // ==========================================================================

  function buildSidebar() {
    const nav = document.getElementById('sidebarNav');
    const icons = {
      drone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M3 3l4 4m10-4l-4 4m4 10l-4-4M3 21l4-4"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></svg>',
      radio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/><path d="M16 8l4-4M8 8L4 4M8 16l-4 4M16 16l4 4"/></svg>',
      signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>',
      crosshair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>',
      compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>'
    };

    nav.innerHTML = state.sections.map(section => `
      <li class="sidebar-nav-item">
        <a href="#${section.id}" class="sidebar-nav-link" data-section="${section.id}">
          ${icons[section.icon] || icons.signal}
          <span>${section.number}. ${section.title}</span>
        </a>
        <ul class="sidebar-subnav" data-section="${section.id}">
          ${section.subsections.map(sub => `
            <li>
              <a href="#${sub.id}" class="sidebar-subnav-link" data-section="${section.id}" data-subsection="${sub.id}">
                ${sub.number} ${sub.title}
              </a>
            </li>
          `).join('')}
        </ul>
      </li>
    `).join('');

    // Event delegation for nav clicks
    nav.addEventListener('click', handleNavClick);

    // Also handle clicks on the tools section
    const toolsNav = document.getElementById('sidebarTools');
    if (toolsNav) {
      toolsNav.addEventListener('click', handleNavClick);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash) navigateToHash(hash);
    });
  }

  function handleNavClick(e) {
    const link = e.target.closest('.sidebar-nav-link, .sidebar-subnav-link');
    if (!link) return;

    e.preventDefault();

    const sectionId = link.dataset.section;
    const subsectionId = link.dataset.subsection;

    // Update URL hash
    window.location.hash = subsectionId || sectionId;

    // Close mobile menu
    closeMobileMenu();
  }

  function navigateToHash(hash) {
    // Find section and subsection
    for (const section of state.sections) {
      if (section.id === hash) {
        showSection(section);
        updateActiveNav(section.id, null);
        return;
      }
      for (const sub of section.subsections) {
        if (sub.id === hash) {
          showSubsection(section, sub);
          updateActiveNav(section.id, sub.id);
          return;
        }
      }
    }

    // Check for tool IDs
    if (hash === 'payload-request') {
      showPayloadRequestTool();
      updateActiveNav('tools', 'payload-request');
    } else if (hash === 'sniper-reference') {
      showSniperReference();
      updateActiveNav('tools', 'sniper-reference');
    }
  }

  function updateActiveNav(sectionId, subsectionId) {
    // Remove all active states
    document.querySelectorAll('.sidebar-nav-link, .sidebar-subnav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelectorAll('.sidebar-subnav').forEach(subnav => {
      subnav.classList.remove('expanded');
    });

    // Handle tools section specifically
    if (sectionId === 'tools' && subsectionId) {
      const toolLink = document.querySelector(`#sidebarTools .sidebar-nav-link[data-subsection="${subsectionId}"]`);
      if (toolLink) {
        toolLink.classList.add('active');
      }
      return;
    }

    // Set active section
    const sectionLink = document.querySelector(`.sidebar-nav-link[data-section="${sectionId}"]`);
    if (sectionLink) {
      sectionLink.classList.add('active');
      const subnav = document.querySelector(`.sidebar-subnav[data-section="${sectionId}"]`);
      if (subnav) subnav.classList.add('expanded');
    }

    // Set active subsection
    if (subsectionId) {
      const subLink = document.querySelector(`.sidebar-subnav-link[data-subsection="${subsectionId}"]`);
      if (subLink) subLink.classList.add('active');
    }
  }

  // ==========================================================================
  // Content Rendering
  // ==========================================================================

  function showWelcome() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Light Fighter Manifesto</div>
        <h1 class="section-title">Light Fighter Guide</h1>
        <p class="section-description">Interactive quick reference for drones, communications, SIGINT, marksmanship, and mission planning. Select a section from the sidebar or search above.</p>
      </div>

      <div class="content-card">
        <h3>Sections</h3>
        <div style="display: grid; gap: 1rem; margin-top: 1rem;">
          ${state.sections.map(section => `
            <a href="#${section.id}" style="display: flex; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
              <div style="color: var(--accent); font-weight: 700; font-size: 1.5rem; min-width: 2rem;">${section.number}</div>
              <div>
                <div style="color: var(--text-primary); font-weight: 600;">${section.title}</div>
                <div style="color: var(--text-muted); font-size: 0.9rem;">${section.description}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

      <div class="content-card">
        <h3>Interactive Tools</h3>
        <div style="display: grid; gap: 0.75rem; margin-top: 1rem;">
          <a href="#payload-request" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">5L</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Payload Request Generator</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Generate formatted 5-Line payload delivery requests</div>
            </div>
          </a>
          <a href="#sniper-reference" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">SR</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Sniper Reference</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Mil-relation formulas, BCs, conversions, and calculators</div>
            </div>
          </a>
        </div>
      </div>

      <div class="content-card">
        <h3>Features</h3>
        <ul style="margin-left: 1.5rem;">
          <li>Full-text search across all content (Ctrl+K)</li>
          <li>Interactive checklists with progress saving</li>
          <li>Interactive calculation tools</li>
          <li>Works offline after first load</li>
          <li>Mobile responsive design</li>
        </ul>
      </div>
    `;
  }

  function showSection(section) {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Section ${section.number}</div>
        <h1 class="section-title">${section.title}</h1>
        <p class="section-description">${section.description}</p>
      </div>

      <div style="display: grid; gap: 1rem;">
        ${section.subsections.map(sub => `
          <a href="#${sub.id}" class="content-card" style="text-decoration: none; cursor: pointer;">
            <h3 style="display: flex; gap: 0.5rem; align-items: baseline;">
              <span style="color: var(--accent); font-size: 0.9rem;">${sub.number}</span>
              ${sub.title}
            </h3>
            <p style="margin-bottom: 0;">${getSubsectionPreview(sub)}</p>
          </a>
        `).join('')}
      </div>
    `;
  }

  function getSubsectionPreview(subsection) {
    const firstPara = subsection.content.find(c => c.type === 'paragraph');
    if (firstPara) {
      return firstPara.text.slice(0, 150) + (firstPara.text.length > 150 ? '...' : '');
    }
    return '';
  }

  function showSubsection(section, subsection) {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Section ${subsection.number}</div>
        <h1 class="section-title">${subsection.title}</h1>
      </div>

      ${renderContent(subsection.content)}

      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between;">
        ${getPrevLink(section, subsection)}
        ${getNextLink(section, subsection)}
      </div>
    `;

    // Initialize any checklists in the content
    initChecklists();
  }

  function renderContent(contentArray) {
    return contentArray.map(item => {
      switch (item.type) {
        case 'paragraph':
          return `<div class="content-card"><p>${item.text}</p></div>`;

        case 'heading':
          return `<h${item.level} style="margin-top: 2rem; margin-bottom: 1rem;">${item.text}</h${item.level}>`;

        case 'list':
          const tag = item.ordered ? 'ol' : 'ul';
          return `
            <div class="content-card">
              <${tag}>
                ${item.items.map(i => `<li>${i}</li>`).join('')}
              </${tag}>
            </div>
          `;

        case 'table':
          return `
            <div class="content-card" style="overflow-x: auto;">
              <table class="quick-ref-table">
                <thead>
                  <tr>${item.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                </thead>
                <tbody>
                  ${item.rows.map(row => `
                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;

        case 'info':
          return `
            <div class="info-box">
              <div class="info-box-title">${item.title}</div>
              <p>${item.text}</p>
            </div>
          `;

        case 'checklist':
          return renderChecklist(item);

        case 'tool':
          if (item.toolId === 'payload-request') {
            return `
              <div class="content-card" style="text-align: center;">
                <p>Generate a formatted Payload Delivery Request:</p>
                <a href="#payload-request" class="form-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">
                  Open Request Generator
                </a>
              </div>
            `;
          } else if (item.toolId === 'mil-calculator') {
            return `
              <div class="content-card" style="text-align: center;">
                <p>Calculate range using mil-relation formula:</p>
                <a href="#mil-calculator" class="form-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">
                  Open Mil Calculator
                </a>
              </div>
            `;
          } else if (item.toolId === 'link-margin') {
            return `
              <div class="content-card" style="text-align: center;">
                <p>Assess RF link margin for site selection:</p>
                <a href="#link-margin" class="form-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">
                  Open Link Margin Tool
                </a>
              </div>
            `;
          } else if (item.toolId === 'hf-antenna-calculator') {
            return `
              <div class="content-card" style="text-align: center;">
                <p>Calculate HF wire antenna dimensions:</p>
                <a href="#hf-antenna-calculator" class="form-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">
                  Open HF Antenna Calculator
                </a>
              </div>
            `;
          }
          return '';

        default:
          return '';
      }
    }).join('');
  }

  function getPrevLink(section, subsection) {
    const sectionIndex = state.sections.indexOf(section);
    const subIndex = section.subsections.indexOf(subsection);

    if (subIndex > 0) {
      const prev = section.subsections[subIndex - 1];
      return `<a href="#${prev.id}" class="nav-btn">&larr; ${prev.number}</a>`;
    } else if (sectionIndex > 0) {
      const prevSection = state.sections[sectionIndex - 1];
      const prev = prevSection.subsections[prevSection.subsections.length - 1];
      return `<a href="#${prev.id}" class="nav-btn">&larr; ${prev.number}</a>`;
    }
    return '<span></span>';
  }

  function getNextLink(section, subsection) {
    const sectionIndex = state.sections.indexOf(section);
    const subIndex = section.subsections.indexOf(subsection);

    if (subIndex < section.subsections.length - 1) {
      const next = section.subsections[subIndex + 1];
      return `<a href="#${next.id}" class="nav-btn">${next.number} &rarr;</a>`;
    } else if (sectionIndex < state.sections.length - 1) {
      const nextSection = state.sections[sectionIndex + 1];
      const next = nextSection.subsections[0];
      return `<a href="#${next.id}" class="nav-btn">${next.number} &rarr;</a>`;
    }
    return '<span></span>';
  }

  // ==========================================================================
  // Checklists
  // ==========================================================================

  function renderChecklist(item) {
    const checklistId = item.id;
    const savedState = state.checklistStates[checklistId] || {};
    const checkedCount = Object.values(savedState).filter(Boolean).length;
    const totalCount = item.items.length;
    const percent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

    return `
      <div class="content-card" data-checklist-id="${checklistId}">
        <div class="checklist-progress">
          <div class="checklist-progress-bar">
            <div class="checklist-progress-fill" style="width: ${percent}%"></div>
          </div>
          <span class="checklist-progress-text">${checkedCount}/${totalCount}</span>
        </div>
        <ul class="checklist">
          ${item.items.map((text, index) => {
            const isChecked = savedState[index];
            return `
              <li class="checklist-item${isChecked ? ' checked' : ''}" data-index="${index}">
                <div class="checklist-checkbox">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span class="checklist-text">${text}</span>
              </li>
            `;
          }).join('')}
        </ul>
        <button class="checklist-reset" data-checklist-id="${checklistId}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          Reset Checklist
        </button>
      </div>
    `;
  }

  function initChecklists() {
    document.querySelectorAll('.checklist-item').forEach(item => {
      item.addEventListener('click', handleChecklistClick);
    });

    document.querySelectorAll('.checklist-reset').forEach(btn => {
      btn.addEventListener('click', handleChecklistReset);
    });
  }

  function handleChecklistClick(e) {
    const item = e.currentTarget;
    const card = item.closest('[data-checklist-id]');
    const checklistId = card.dataset.checklistId;
    const index = parseInt(item.dataset.index);

    // Toggle checked state
    const isChecked = item.classList.toggle('checked');

    // Save state
    if (!state.checklistStates[checklistId]) {
      state.checklistStates[checklistId] = {};
    }
    state.checklistStates[checklistId][index] = isChecked;
    saveChecklistStates();

    // Update progress bar
    updateChecklistProgress(card);
  }

  function handleChecklistReset(e) {
    const checklistId = e.currentTarget.dataset.checklistId;
    const card = document.querySelector(`[data-checklist-id="${checklistId}"]`);

    // Reset all items
    card.querySelectorAll('.checklist-item').forEach(item => {
      item.classList.remove('checked');
    });

    // Clear saved state
    state.checklistStates[checklistId] = {};
    saveChecklistStates();

    // Update progress
    updateChecklistProgress(card);
  }

  function updateChecklistProgress(card) {
    const items = card.querySelectorAll('.checklist-item');
    const checkedItems = card.querySelectorAll('.checklist-item.checked');
    const percent = items.length > 0 ? Math.round((checkedItems.length / items.length) * 100) : 0;

    const fill = card.querySelector('.checklist-progress-fill');
    const text = card.querySelector('.checklist-progress-text');

    fill.style.width = `${percent}%`;
    text.textContent = `${checkedItems.length}/${items.length}`;
  }

  function loadChecklistStates() {
    try {
      const saved = localStorage.getItem('lfm-field-guide-checklists');
      if (saved) {
        state.checklistStates = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not load checklist states:', e);
    }
  }

  function saveChecklistStates() {
    try {
      localStorage.setItem('lfm-field-guide-checklists', JSON.stringify(state.checklistStates));
    } catch (e) {
      console.warn('Could not save checklist states:', e);
    }
  }

  // ==========================================================================
  // Payload Request Generator
  // ==========================================================================

  function showPayloadRequestTool() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">Payload Delivery Request Generator</h1>
        <p class="section-description">Generate formatted 5-Line payload delivery requests for sUAS operations.</p>
      </div>

      <div class="form-generator">
        <div class="form-group">
          <label class="form-label">Callsign (Requesting Unit)</label>
          <input type="text" class="form-input" id="pdr-callsign" placeholder="e.g., Alpha 11">
        </div>

        <div class="form-group">
          <label class="form-label">UAS Callsign</label>
          <input type="text" class="form-input" id="pdr-uas-callsign" placeholder="e.g., SkyRaider">
        </div>

        <div class="form-group">
          <label class="form-label">Mission Type</label>
          <select class="form-select" id="pdr-mission">
            <option value="attack">Attack</option>
            <option value="smoke">Smoke</option>
            <option value="resupply">Resupply</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Grid Reference</label>
          <input type="text" class="form-input" id="pdr-grid" placeholder="e.g., 11SNT 79652 89123">
        </div>

        <div class="form-group">
          <label class="form-label">Target/Drop Description</label>
          <input type="text" class="form-input" id="pdr-target" placeholder="e.g., Fire team in trench line">
          <span class="form-hint">Attack: describe target. Resupply: describe drop location. Smoke: describe area to obscure.</span>
        </div>

        <div class="form-group">
          <label class="form-label">Nearest Friendlies (Distance & Direction)</label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="number" class="form-input" id="pdr-friendly-dist" placeholder="400" style="flex: 1;">
            <select class="form-select" id="pdr-friendly-dir" style="flex: 1;">
              <option value="North">North</option>
              <option value="Northeast">Northeast</option>
              <option value="East">East</option>
              <option value="Southeast">Southeast</option>
              <option value="South">South</option>
              <option value="Southwest" selected>Southwest</option>
              <option value="West">West</option>
              <option value="Northwest">Northwest</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Remarks (Optional)</label>
          <textarea class="form-textarea" id="pdr-remarks" placeholder="Desired effects, time on target, routing restrictions, wind info, actions on jamming..."></textarea>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="form-btn" id="pdr-generate">Generate Request</button>
          <button class="form-btn form-btn-secondary" id="pdr-copy">Copy to Clipboard</button>
          <button class="form-btn form-btn-secondary" id="pdr-clear">Clear Form</button>
        </div>

        <div class="output-display" id="pdr-output" style="display: none;"></div>
      </div>

      <div class="content-card" style="margin-top: 2rem;">
        <h4>Format Reference</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Line</th><th>Content</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Warning Order (callsigns, mission type)</td></tr>
            <tr><td>2</td><td>Location (Grid reference)</td></tr>
            <tr><td>3</td><td>Target/Drop description</td></tr>
            <tr><td>4</td><td>Nearest friendlies (distance/direction)</td></tr>
            <tr><td>5</td><td>Remarks and restrictions</td></tr>
          </tbody>
        </table>
      </div>
    `;

    // Event listeners
    document.getElementById('pdr-generate').addEventListener('click', generatePayloadRequest);
    document.getElementById('pdr-copy').addEventListener('click', copyPayloadRequest);
    document.getElementById('pdr-clear').addEventListener('click', clearPayloadForm);
  }

  function generatePayloadRequest() {
    const callsign = document.getElementById('pdr-callsign').value || '[CALLSIGN]';
    const uasCallsign = document.getElementById('pdr-uas-callsign').value || '[UAS CALLSIGN]';
    const mission = document.getElementById('pdr-mission').value;
    const grid = document.getElementById('pdr-grid').value || '[GRID]';
    const target = document.getElementById('pdr-target').value || '[TARGET/DROP DESCRIPTION]';
    const friendlyDist = document.getElementById('pdr-friendly-dist').value || '[DISTANCE]';
    const friendlyDir = document.getElementById('pdr-friendly-dir').value;
    const remarks = document.getElementById('pdr-remarks').value;

    const missionText = mission.charAt(0).toUpperCase() + mission.slice(1);

    const output = `
<span class="line-label">LINE 1 - WARNING ORDER:</span>
"${uasCallsign}, this is ${callsign}, sUAS ${mission}, over."
"${callsign}, this is ${uasCallsign}, sUAS ${mission}, out."

<span class="line-label">LINE 2 - LOCATION:</span>
"Grid: ${grid}, over."
"Grid: ${grid}, out."

<span class="line-label">LINE 3 - TARGET/DROP DESCRIPTION:</span>
"${target}, over."
"${target}, out."

<span class="line-label">LINE 4 - NEAREST FRIENDLIES:</span>
"Nearest friendlies: ${friendlyDist} meters ${friendlyDir}, over."
"${friendlyDist} meters ${friendlyDir}, out."

<span class="line-label">LINE 5 - REMARKS:</span>
${remarks ? `"${remarks}, over."\n"${remarks}, out."` : '"No remarks, over."\n"No remarks, out."'}
    `.trim();

    const outputEl = document.getElementById('pdr-output');
    outputEl.innerHTML = output;
    outputEl.style.display = 'block';
  }

  function copyPayloadRequest() {
    const outputEl = document.getElementById('pdr-output');
    if (!outputEl || outputEl.style.display === 'none') {
      generatePayloadRequest();
    }

    const text = outputEl.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('pdr-copy');
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = originalText; }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  function clearPayloadForm() {
    document.getElementById('pdr-callsign').value = '';
    document.getElementById('pdr-uas-callsign').value = '';
    document.getElementById('pdr-mission').value = 'attack';
    document.getElementById('pdr-grid').value = '';
    document.getElementById('pdr-target').value = '';
    document.getElementById('pdr-friendly-dist').value = '';
    document.getElementById('pdr-friendly-dir').value = 'Southwest';
    document.getElementById('pdr-remarks').value = '';
    document.getElementById('pdr-output').style.display = 'none';
  }

  // ==========================================================================
  // Search
  // ==========================================================================

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Build search index with comprehensive content extraction
    const searchItems = [];
    state.sections.forEach(section => {
      section.subsections.forEach(sub => {
        // Extract all text content from all content types
        const textParts = [];
        sub.content.forEach(c => {
          switch (c.type) {
            case 'paragraph':
              textParts.push(c.text);
              break;
            case 'list':
              textParts.push(c.items.join(' '));
              break;
            case 'info':
              textParts.push(c.title || '');
              textParts.push(c.text);
              break;
            case 'heading':
              textParts.push(c.text);
              break;
            case 'table':
              textParts.push(c.headers.join(' '));
              c.rows.forEach(row => textParts.push(row.join(' ')));
              break;
            case 'checklist':
              textParts.push(c.items.join(' '));
              break;
          }
        });

        searchItems.push({
          title: sub.title,
          section: section.title,
          sectionId: section.id,
          subsectionId: sub.id,
          number: sub.number,
          content: textParts.join(' ')
        });
      });
    });

    // Initialize Fuse.js with improved settings
    state.searchIndex = new Fuse(searchItems, {
      keys: [
        { name: 'title', weight: 3 },
        { name: 'content', weight: 1 }
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2,
      ignoreLocation: true
    });

    // Search input handler
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value);
      }, 150);
    });

    // Focus/blur handlers
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.length >= 2) {
        searchResults.classList.add('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
      }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', handleSearchKeyboard);
  }

  function performSearch(query) {
    const searchResults = document.getElementById('searchResults');

    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    const results = state.searchIndex.search(query, { limit: 8 });

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.classList.add('active');
      return;
    }

    searchResults.innerHTML = results.map((result, index) => {
      const item = result.item;

      // Find a relevant preview snippet based on matches
      let preview = '';
      const contentMatch = result.matches?.find(m => m.key === 'content');
      if (contentMatch && contentMatch.indices.length > 0) {
        // Get the first match position and show context around it
        const firstMatch = contentMatch.indices[0];
        const start = Math.max(0, firstMatch[0] - 30);
        const end = Math.min(item.content.length, firstMatch[1] + 100);
        preview = (start > 0 ? '...' : '') +
                  item.content.slice(start, end) +
                  (end < item.content.length ? '...' : '');
      } else {
        preview = item.content.slice(0, 120) + (item.content.length > 120 ? '...' : '');
      }

      return `
        <div class="search-result-item${index === 0 ? ' selected' : ''}" data-hash="${item.subsectionId}">
          <div class="search-result-section">${item.section}</div>
          <div class="search-result-title">${item.number} ${item.title}</div>
          <div class="search-result-preview">${preview}</div>
        </div>
      `;
    }).join('');

    searchResults.classList.add('active');

    // Click handlers for results
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        window.location.hash = item.dataset.hash;
        searchResults.classList.remove('active');
        document.getElementById('searchInput').value = '';
        closeMobileMenu();
      });
    });
  }

  function handleSearchKeyboard(e) {
    const searchResults = document.getElementById('searchResults');
    const items = searchResults.querySelectorAll('.search-result-item');
    const selected = searchResults.querySelector('.search-result-item.selected');

    if (!searchResults.classList.contains('active') || items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const index = Array.from(items).indexOf(selected);
      const next = items[Math.min(index + 1, items.length - 1)];
      selected?.classList.remove('selected');
      next.classList.add('selected');
      next.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const index = Array.from(items).indexOf(selected);
      const prev = items[Math.max(index - 1, 0)];
      selected?.classList.remove('selected');
      prev.classList.add('selected');
      prev.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && selected) {
      e.preventDefault();
      window.location.hash = selected.dataset.hash;
      searchResults.classList.remove('active');
      document.getElementById('searchInput').value = '';
    } else if (e.key === 'Escape') {
      searchResults.classList.remove('active');
    }
  }

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================

  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });

    overlay.addEventListener('click', closeMobileMenu);

    // Mobile search
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    const mobileSearchClose = document.getElementById('mobileSearchClose');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchResults = document.getElementById('mobileSearchResults');

    if (mobileSearchBtn) {
      mobileSearchBtn.addEventListener('click', () => {
        mobileSearchOverlay.classList.add('visible');
        mobileSearchInput.focus();
      });
    }

    if (mobileSearchClose) {
      mobileSearchClose.addEventListener('click', () => {
        mobileSearchOverlay.classList.remove('visible');
        mobileSearchInput.value = '';
        mobileSearchResults.innerHTML = '';
      });
    }

    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
          mobileSearchResults.innerHTML = '';
          return;
        }

        const results = state.searchIndex.search(query).slice(0, 15);
        if (results.length === 0) {
          mobileSearchResults.innerHTML = '<div style="padding: 1rem; color: var(--text-muted);">No results found</div>';
          return;
        }

        mobileSearchResults.innerHTML = results.map(result => `
          <a href="#${result.item.subsectionId}" class="search-result-item" style="display: block; padding: 1rem; border-bottom: 1px solid var(--border-subtle); text-decoration: none;">
            <div style="color: var(--text-primary); font-weight: 500;">${result.item.title}</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">${result.item.sectionTitle}</div>
          </a>
        `).join('');

        // Add click handlers to close mobile search
        mobileSearchResults.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            mobileSearchOverlay.classList.remove('visible');
            mobileSearchInput.value = '';
            mobileSearchResults.innerHTML = '';
          });
        });
      });
    }
  }

  function closeMobileMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('visible');
  }

  // ==========================================================================
  // Keyboard Shortcuts
  // ==========================================================================

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
      }

      // Escape to close search
      if (e.key === 'Escape') {
        document.getElementById('searchResults').classList.remove('active');
        document.getElementById('searchInput').blur();
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // Offline Support
  // ==========================================================================

  function initOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');

    function updateOnlineStatus() {
      state.isOffline = !navigator.onLine;
      indicator.classList.toggle('visible', state.isOffline);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }

  // ==========================================================================
  // Sniper Reference Tool
  // ==========================================================================

  function showSniperReference() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">Sniper Reference</h1>
        <p class="section-description">Quick reference for mil-relation formulas, ballistic coefficients, conversions, and field calculations.</p>
      </div>

      <!-- Mil-Relation Calculator -->
      <div class="form-generator" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Mil-Relation Calculator</h3>

        <div class="info-box" style="margin-bottom: 1rem;">
          <div class="info-box-title">Formulas</div>
          <p style="font-family: var(--font-mono); font-size: 0.9rem;">
            Range = (Target Size" x 25.4) / Mil Size<br>
            Range (m) = (Target Size (m) x 1000) / Mil Size<br>
            Target Size" = (Range x Mil Size) / 25.4<br>
            Mil Size = (Target Size" x 25.4) / Range
          </p>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Target Size (inches)</label>
            <select class="form-select" id="sr-target-type">
              <option value="39.5">Head to Groin (39.5")</option>
              <option value="12">Head to Shoulders (12")</option>
              <option value="20">Shoulder to Shoulder (20")</option>
              <option value="70">Male Height (70")</option>
              <option value="65">Female Height (65")</option>
              <option value="84">Door Height (84")</option>
              <option value="36">Door Width (36")</option>
              <option value="30">Stop Sign (30")</option>
              <option value="custom">Custom Size</option>
            </select>
          </div>
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Observed Mils</label>
            <input type="number" class="form-input" id="sr-mils" placeholder="e.g., 2.0" step="0.1">
          </div>
        </div>

        <div class="form-group" id="sr-custom-group" style="display: none;">
          <label class="form-label">Custom Size (inches)</label>
          <input type="number" class="form-input" id="sr-custom-size" placeholder="e.g., 18" step="0.1">
        </div>

        <button class="form-btn" id="sr-calc-range">Calculate Range</button>
        <div class="output-display" id="sr-range-output" style="display: none;"></div>
      </div>

      <!-- BLIR Calculator -->
      <div class="form-generator" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">BLIR Calculator (Loophole)</h3>

        <div class="info-box" style="margin-bottom: 1rem;">
          <div class="info-box-title">Formula</div>
          <p style="font-family: var(--font-mono); font-size: 0.9rem;">BLIR = (HOB x 70) / Feet From Loophole</p>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Height Over Bore (inches)</label>
            <input type="number" class="form-input" id="sr-hob" placeholder="e.g., 2.5" step="0.1" value="2.5">
          </div>
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Feet From Loophole</label>
            <input type="number" class="form-input" id="sr-loophole-dist" placeholder="e.g., 10" step="1">
          </div>
        </div>

        <button class="form-btn" id="sr-calc-blir">Calculate BLIR</button>
        <div class="output-display" id="sr-blir-output" style="display: none;"></div>

        <div class="content-card" style="margin-top: 1rem; padding: 1rem;">
          <h4 style="margin-bottom: 0.5rem;">BLIR Rules of Thumb</h4>
          <table class="quick-ref-table">
            <tbody>
              <tr><td>5ft or less</td><td>Add 5 mils</td></tr>
              <tr><td>10ft</td><td>Add 4 mils</td></tr>
              <tr><td>15ft</td><td>Add 3 mils</td></tr>
              <tr><td>20ft or more</td><td>Add 2 mils</td></tr>
            </tbody>
          </table>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
            1 mil every 10ft = 0.12 inches | .308 bullet is 0.15" from center wide<br>
            Loopholes > HO: put target on top and shoot
          </p>
        </div>
      </div>

      <!-- Reference Tables -->
      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Ballistic Coefficients (G1)</h3>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Cartridge</th><th>G1 BC</th></tr>
          </thead>
          <tbody>
            <tr><td>MK262 (.223)</td><td>.362</td></tr>
            <tr><td>M118LR (.308)</td><td>.475</td></tr>
            <tr><td>A191 (.300WM)</td><td>.533</td></tr>
            <tr><td>MK211 (.50)</td><td>.701</td></tr>
          </tbody>
        </table>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">G1 to G7 conversion: G1 x 0.512</p>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Average Muzzle Velocities</h3>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Platform</th><th>MV (fps)</th></tr>
          </thead>
          <tbody>
            <tr><td>M24</td><td>2650</td></tr>
            <tr><td>M2010</td><td>2950</td></tr>
            <tr><td>M110</td><td>2550</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">High Angle Shooting</h3>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Angle</th><th>Hold Adjustment</th></tr>
          </thead>
          <tbody>
            <tr><td>30 degrees</td><td>Shoot 85% of actual hold</td></tr>
            <tr><td>45 degrees</td><td>Shoot 66% of actual hold</td></tr>
            <tr><td>60 degrees</td><td>Shoot 50% of actual hold - 0.08 mils</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Wind Analysis</h3>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Speed (mph)</th><th>Indicator</th></tr>
          </thead>
          <tbody>
            <tr><td>0-3</td><td>Hardly felt on face</td></tr>
            <tr><td>3-5</td><td>Felt lightly on face</td></tr>
            <tr><td>5-8</td><td>Tree leaves in constant motion</td></tr>
            <tr><td>8-12</td><td>Raises dust and loose paper</td></tr>
            <tr><td>12-15</td><td>Small trees begin to sway</td></tr>
            <tr><td>15-20</td><td>Large trees begin to sway, wind becomes audible</td></tr>
          </tbody>
        </table>
        <div class="info-box" style="margin-top: 1rem;">
          <div class="info-box-title">MOA Wind Deflection Formula</div>
          <p style="font-family: var(--font-mono);">Deflection (MOA) = Range (100s) x Wind Velocity (mph) / 10</p>
        </div>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Measurements & Conversions</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <h4 style="margin-bottom: 0.5rem;">Mil/MOA</h4>
            <table class="quick-ref-table">
              <tbody>
                <tr><td>1 Mil</td><td>3.438 TMOA</td></tr>
                <tr><td>1 Mil</td><td>3.5 SMOA</td></tr>
                <tr><td>1 Mil</td><td>3.936"</td></tr>
                <tr><td>1 Mil (field)</td><td>4" (deviation: 0.64" @ 1000m)</td></tr>
                <tr><td>1 TMOA</td><td>0.29 mils</td></tr>
                <tr><td>1 SMOA</td><td>0.3 mils</td></tr>
                <tr><td>1 TMOA @ 100m</td><td>1.145"</td></tr>
                <tr><td>1 SMOA @ 100m</td><td>1"</td></tr>
                <tr><td>1 TMOA @ 100yd</td><td>1.047"</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="margin-bottom: 0.5rem;">Distance</h4>
            <table class="quick-ref-table">
              <tbody>
                <tr><td>1 inch</td><td>2.54 cm</td></tr>
                <tr><td>1 cm</td><td>0.3937 in</td></tr>
                <tr><td>1 foot</td><td>0.3048 m</td></tr>
                <tr><td>1 meter</td><td>1.0936 yd</td></tr>
                <tr><td>1 yard</td><td>0.9144 m</td></tr>
                <tr><td>1 meter</td><td>3.2808 ft</td></tr>
                <tr><td>1 mile</td><td>1.6093 km</td></tr>
                <tr><td>1 km</td><td>0.6213 mile</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Truing Process</h3>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Step</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td>1st True</td><td>Speed of sound x 1.2 (Update MV)</td></tr>
            <tr><td>2nd True</td><td>(Mach 1.0 - Mach 1.2) x 0.75 + Mach 1.2 (find range limit before C1 changes)</td></tr>
            <tr><td>3rd True</td><td>Beginning of subsonic + 200m (update using C1)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Miscellaneous Reference</h3>
        <table class="quick-ref-table">
          <tbody>
            <tr><td>Cant Effect</td><td>Every 2.5 deg of cant = 0.05 mil in direction of cant every 100m</td></tr>
            <tr><td>Max Ord</td><td>Range to target x 0.55</td></tr>
            <tr><td>Supersonic</td><td>Faster than speed of sound, ends at Mach 1.0</td></tr>
            <tr><td>Transonic</td><td>Mach 1.2 - 0.8 (transitional stage)</td></tr>
            <tr><td>Subsonic</td><td>Starts at Mach 1.0</td></tr>
            <tr><td>Speed of Sound (Mach 1.0)</td><td>1061 + temp of day (fps)</td></tr>
            <tr><td>FTB</td><td>350 mps</td></tr>
            <tr><td>Altitude Effect</td><td>Every 1000ft gained = 1" inHg</td></tr>
            <tr><td>Sea Level BP</td><td>29.9" inHg</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">RET (Rapid Engagement Technique)</h3>
        <div class="info-box" style="margin-bottom: 1rem;">
          <div class="info-box-title">Finding Your RET Number</div>
          <p style="font-size: 0.9rem;">
            1. After truing weapon system, find actual holds for ranges: 380m, 440m, 510m, 610m<br>
            2. Add actual holds to milsize for given range to find RET number<br>
            3. Average the 4 RET numbers = your RET number
          </p>
        </div>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Range (m)</th><th>Milsize (12")</th></tr>
          </thead>
          <tbody>
            <tr><td>380</td><td>0.8</td></tr>
            <tr><td>440</td><td>0.7</td></tr>
            <tr><td>510</td><td>0.6</td></tr>
            <tr><td>610</td><td>0.5</td></tr>
          </tbody>
        </table>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 1rem;">
          <strong>.308:</strong> Usually a 10 gun at 12" drill<br>
          <strong>.300WM:</strong> Usually a 9 gun at 12" drill<br>
          <strong>12":</strong> Measured from top of head to curvature of shoulders<br>
          <strong>For 20":</strong> Take mil size, cut in half, subtract 9 (for 10 gun) or 8 (for 9 gun)<br>
          <strong>Wind Bracket 1:</strong> RET hold (decimal) + 0.2
        </p>
      </div>

      <div class="content-card">
        <h3 style="margin-bottom: 1rem; color: var(--accent);">Report Formats</h3>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">GOSS (Ground Objective Surveillance)</h4>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: 4px;">
          SO#/TRGTNAME/DTG/GRID/GOSS#OF#<br>
          Breach point | LCC | Routes LU->VDO/Staging area->LCC/LCC->Breach<br>
          Obstacles (ground and air) | SO Location (day and night)<br>
          North seeking arrow | Sector of fire | # buildings starting w/ target moving clockwise
        </p>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">GSS (Ground Structure Surveillance)</h4>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: 4px;">
          SO#/TRGTNAME/DTG/GRID/DIRECTION/DIST/BUILDINGSIDE/GSS#OF#<br>
          North seeking arrow | Building dimensions (ft) | Breach Points<br>
          Opening # System | Obstacles | Roof Identification
        </p>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">ANGUS (Activity Notification)</h4>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: 4px;">
          SO element + OBJ Name | SO location (8 dig MGRS)<br>
          Casualties/Disposition of Team | Location of MSS/PB (8 dig MGRS)<br>
          DTG Surveillance established | Additional Info
        </p>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">BORIS (Biometric/Observation Report)</h4>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: 4px;">
          SO#/TRGTNAME/DTG/BORIS#OF#<br>
          Size | Activity | Location | Unit | Time<br>
          Equipment | Sex | Nationality | Age | Physical Description
        </p>

        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">SNAP (Short Notification of Activity/Persons)</h4>
        <p style="font-family: var(--font-mono); font-size: 0.85rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: 4px;">
          SO#/TRGTNAME/DTG/SNAP#OF#<br>
          Sex | Nationality | Age | Physical Description
        </p>
      </div>
    `;

    // Event listeners for calculators
    document.getElementById('sr-target-type').addEventListener('change', (e) => {
      document.getElementById('sr-custom-group').style.display =
        e.target.value === 'custom' ? 'block' : 'none';
    });

    document.getElementById('sr-calc-range').addEventListener('click', calculateSniperRange);
    document.getElementById('sr-calc-blir').addEventListener('click', calculateBLIR);
  }

  function calculateSniperRange() {
    const targetType = document.getElementById('sr-target-type').value;
    const customSize = parseFloat(document.getElementById('sr-custom-size').value);
    const mils = parseFloat(document.getElementById('sr-mils').value);

    const targetInches = targetType === 'custom' ? customSize : parseFloat(targetType);

    if (!targetInches || !mils || mils <= 0) {
      document.getElementById('sr-range-output').innerHTML =
        '<span style="color: #ef4444;">Enter valid target size and mils.</span>';
      document.getElementById('sr-range-output').style.display = 'block';
      return;
    }

    const rangeMeters = Math.round((targetInches * 25.4) / mils);
    const rangeYards = Math.round(rangeMeters * 1.0936);
    const targetMeters = (targetInches * 0.0254).toFixed(2);

    document.getElementById('sr-range-output').innerHTML = `
<span class="line-label">INPUT:</span>
Target Size: ${targetInches}" (${targetMeters}m)
Observed: ${mils} mils

<span class="line-label">RESULT:</span>
<span style="font-size: 1.3rem; color: var(--accent);">Range: ${rangeMeters}m / ${rangeYards}yd</span>

<span class="line-label">FORMULA:</span>
(${targetInches}" x 25.4) / ${mils} = ${rangeMeters}m
    `.trim();
    document.getElementById('sr-range-output').style.display = 'block';
  }

  function calculateBLIR() {
    const hob = parseFloat(document.getElementById('sr-hob').value);
    const dist = parseFloat(document.getElementById('sr-loophole-dist').value);

    if (!hob || !dist || dist <= 0) {
      document.getElementById('sr-blir-output').innerHTML =
        '<span style="color: #ef4444;">Enter valid HOB and distance.</span>';
      document.getElementById('sr-blir-output').style.display = 'block';
      return;
    }

    const blir = (hob * 70) / dist;

    document.getElementById('sr-blir-output').innerHTML = `
<span class="line-label">INPUT:</span>
Height Over Bore: ${hob}"
Distance from Loophole: ${dist} ft

<span class="line-label">RESULT:</span>
<span style="font-size: 1.3rem; color: var(--accent);">BLIR Hold: ${blir.toFixed(2)} mils</span>

<span class="line-label">FORMULA:</span>
(${hob}" x 70) / ${dist}ft = ${blir.toFixed(2)} mils
    `.trim();
    document.getElementById('sr-blir-output').style.display = 'block';
  }

  // [Legacy tools removed - replaced by Sniper Reference Tool]
  // The following tools have been removed:
  // - Link Margin Assessment
  // - HF Antenna Calculator
  // - Path Loss Calculator
  // - Freq/Wavelength Converter
  // - Wind Drift Calculator
  // - Coordinate Converter
  // - Zulu Time Converter
  //
  // All sniper-related calculations are now in the Sniper Reference Tool

  // ==========================================================================
  // Initialize on Load
  // ==========================================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }

})();
