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
    } else if (hash === 'mil-calculator') {
      showMilCalculator();
      updateActiveNav('tools', 'mil-calculator');
    } else if (hash === 'link-margin') {
      showLinkMarginTool();
      updateActiveNav('tools', 'link-margin');
    } else if (hash === 'hf-antenna-calculator') {
      showHFAntennaCalculator();
      updateActiveNav('tools', 'hf-antenna-calculator');
    } else if (hash === 'path-loss-calculator') {
      showPathLossCalculator();
      updateActiveNav('tools', 'path-loss-calculator');
    } else if (hash === 'freq-wavelength-converter') {
      showFreqWavelengthConverter();
      updateActiveNav('tools', 'freq-wavelength-converter');
    } else if (hash === 'wind-calculator') {
      showWindCalculator();
      updateActiveNav('tools', 'wind-calculator');
    } else if (hash === 'coord-converter') {
      showCoordConverter();
      updateActiveNav('tools', 'coord-converter');
    } else if (hash === 'zulu-time') {
      showZuluTime();
      updateActiveNav('tools', 'zulu-time');
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
          <a href="#mil-calculator" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">MIL</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Mil-Relation Calculator</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Calculate range using mil-relation formula</div>
            </div>
          </a>
          <a href="#link-margin" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">RF</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Link Margin Assessment</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Evaluate RF link margin for site selection</div>
            </div>
          </a>
          <a href="#hf-antenna-calculator" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">HF</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">HF Antenna Calculator</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Calculate wire antenna dimensions for HF bands</div>
            </div>
          </a>
          <a href="#path-loss-calculator" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">dB</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Path Loss Calculator</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Calculate RF signal attenuation over distance</div>
            </div>
          </a>
          <a href="#freq-wavelength-converter" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">λ</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Freq/Wavelength Converter</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Convert between frequency and wavelength</div>
            </div>
          </a>
          <a href="#wind-calculator" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">W</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Wind Drift Calculator</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Calculate wind deflection for precision shooting</div>
            </div>
          </a>
          <a href="#coord-converter" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">⊕</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Coordinate Converter</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Convert DD/DMS coordinate formats</div>
            </div>
          </a>
          <a href="#zulu-time" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            <div style="color: var(--accent); min-width: 2rem;">Z</div>
            <div>
              <div style="color: var(--text-primary); font-weight: 600;">Zulu Time Converter</div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">Convert between local and UTC/Zulu time</div>
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
      return `<a href="#${prev.id}" class="nav-btn">&larr;</a>`;
    } else if (sectionIndex > 0) {
      const prevSection = state.sections[sectionIndex - 1];
      const prev = prevSection.subsections[prevSection.subsections.length - 1];
      return `<a href="#${prev.id}" class="nav-btn">&larr;</a>`;
    }
    return '<span></span>';
  }

  function getNextLink(section, subsection) {
    const sectionIndex = state.sections.indexOf(section);
    const subIndex = section.subsections.indexOf(subsection);

    if (subIndex < section.subsections.length - 1) {
      const next = section.subsections[subIndex + 1];
      return `<a href="#${next.id}" class="nav-btn">&rarr;</a>`;
    } else if (sectionIndex < state.sections.length - 1) {
      const nextSection = state.sections[sectionIndex + 1];
      const next = nextSection.subsections[0];
      return `<a href="#${next.id}" class="nav-btn">&rarr;</a>`;
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
  // Mil-Relation Calculator
  // ==========================================================================

  function showMilCalculator() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">Mil-Relation Calculator</h1>
        <p class="section-description">Calculate range to target using the mil-relation formula when target size is known.</p>
      </div>

      <div class="form-generator">
        <div class="info-box">
          <div class="info-box-title">The Formula</div>
          <p style="font-family: monospace; font-size: 1.1rem; text-align: center;">Range (m) = Target Size (m) x 1000 / Mils Observed</p>
        </div>

        <div class="form-group">
          <label class="form-label">Target Type (or select Custom)</label>
          <select class="form-select" id="mil-target-type">
            <option value="1.8">Standing Person (1.8m)</option>
            <option value="1.3">Kneeling Person (1.3m)</option>
            <option value="0.5">Prone Person (0.5m)</option>
            <option value="0.3">Head and Shoulders (0.3m)</option>
            <option value="2.0">Standard Door (2.0m)</option>
            <option value="1.5">Sedan Vehicle Height (1.5m)</option>
            <option value="4.5">Sedan Vehicle Length (4.5m)</option>
            <option value="custom">Custom Size</option>
          </select>
        </div>

        <div class="form-group" id="mil-custom-size-group" style="display: none;">
          <label class="form-label">Custom Target Size (meters)</label>
          <input type="number" class="form-input" id="mil-custom-size" placeholder="e.g., 1.8" step="0.1">
        </div>

        <div class="form-group">
          <label class="form-label">Observed Size in Mils</label>
          <input type="number" class="form-input" id="mil-observed" placeholder="e.g., 2.4" step="0.1">
          <span class="form-hint">Measure the target height or width against your reticle mil markings</span>
        </div>

        <button class="form-btn" id="mil-calculate">Calculate Range</button>

        <div class="output-display" id="mil-output" style="display: none;"></div>
      </div>

      <div class="content-card" style="margin-top: 2rem;">
        <h4>Common Target Sizes</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Target</th><th>Height (m)</th><th>Width (m)</th></tr>
          </thead>
          <tbody>
            <tr><td>Standing Person</td><td>1.8</td><td>0.5</td></tr>
            <tr><td>Kneeling Person</td><td>1.3</td><td>0.5</td></tr>
            <tr><td>Prone Person</td><td>0.5</td><td>0.5</td></tr>
            <tr><td>Head and Shoulders</td><td>0.3</td><td>0.45</td></tr>
            <tr><td>Standard Door</td><td>2.0</td><td>0.9</td></tr>
            <tr><td>Sedan Vehicle</td><td>1.5</td><td>4.5</td></tr>
            <tr><td>Pickup Truck</td><td>1.8</td><td>5.5</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card">
        <h4>Quick Reference Examples</h4>
        <p>If a standing person (1.8m) measures:</p>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Mils</th><th>Range</th></tr>
          </thead>
          <tbody>
            <tr><td>6.0 mils</td><td>300 meters</td></tr>
            <tr><td>4.5 mils</td><td>400 meters</td></tr>
            <tr><td>3.6 mils</td><td>500 meters</td></tr>
            <tr><td>2.4 mils</td><td>750 meters</td></tr>
            <tr><td>1.8 mils</td><td>1000 meters</td></tr>
          </tbody>
        </table>
      </div>
    `;

    // Event listeners
    document.getElementById('mil-target-type').addEventListener('change', (e) => {
      const customGroup = document.getElementById('mil-custom-size-group');
      customGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
    });

    document.getElementById('mil-calculate').addEventListener('click', calculateMilRange);
  }

  function calculateMilRange() {
    const targetType = document.getElementById('mil-target-type').value;
    const customSize = parseFloat(document.getElementById('mil-custom-size').value);
    const milsObserved = parseFloat(document.getElementById('mil-observed').value);

    const targetSize = targetType === 'custom' ? customSize : parseFloat(targetType);

    if (!targetSize || !milsObserved || milsObserved <= 0) {
      const output = document.getElementById('mil-output');
      output.innerHTML = '<span style="color: var(--error);">Please enter valid values for target size and mils observed.</span>';
      output.style.display = 'block';
      return;
    }

    const range = Math.round((targetSize * 1000) / milsObserved);

    const output = document.getElementById('mil-output');
    output.innerHTML = `
<span class="line-label">CALCULATION:</span>
Target Size: ${targetSize} meters
Mils Observed: ${milsObserved} mils

<span class="line-label">RESULT:</span>
<span style="font-size: 1.5rem; color: var(--accent);">Range: ${range} meters</span>

<span class="line-label">FORMULA:</span>
${targetSize} x 1000 / ${milsObserved} = ${range}m
    `.trim();
    output.style.display = 'block';
  }

  // ==========================================================================
  // Link Margin Assessment Tool
  // ==========================================================================

  function showLinkMarginTool() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">RF Link Margin Assessment</h1>
        <p class="section-description">Evaluate whether your communication or control link has adequate margin for reliable operation.</p>
      </div>

      <div class="form-generator">
        <div class="info-box">
          <div class="info-box-title">Link Margin Rule</div>
          <p>For reliable operation, maintain at least 15-20 dB margin between your signal and the noise floor or interfering signals. Below 10 dB is critical and indicates high risk of link failure.</p>
        </div>

        <div class="form-group">
          <label class="form-label">Expected Signal Strength (dBm)</label>
          <input type="number" class="form-input" id="lm-signal" placeholder="e.g., -65" step="1">
          <span class="form-hint">From your RF planning tool or equipment specifications</span>
        </div>

        <div class="form-group">
          <label class="form-label">Measured Noise Floor (dBm)</label>
          <input type="number" class="form-input" id="lm-noise" placeholder="e.g., -90" step="1">
          <span class="form-hint">Measure with SDR or spectrum analyzer at the site</span>
        </div>

        <div class="form-group">
          <label class="form-label">Strongest Interferer (dBm) - Optional</label>
          <input type="number" class="form-input" id="lm-interferer" placeholder="e.g., -75" step="1">
          <span class="form-hint">Any strong signal in your operational band</span>
        </div>

        <button class="form-btn" id="lm-calculate">Assess Link</button>

        <div class="output-display" id="lm-output" style="display: none;"></div>
      </div>

      <div class="content-card" style="margin-top: 2rem;">
        <h4>Link Margin Interpretation</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Margin</th><th>Status</th><th>Recommendation</th></tr>
          </thead>
          <tbody>
            <tr><td>> 20 dB</td><td style="color: #10b981;">EXCELLENT</td><td>High confidence, proceed with mission</td></tr>
            <tr><td>15-20 dB</td><td style="color: #10b981;">NOMINAL</td><td>Adequate for most operations</td></tr>
            <tr><td>10-15 dB</td><td style="color: #f59e0b;">MARGINAL</td><td>May degrade under stress, use caution</td></tr>
            <tr><td>< 10 dB</td><td style="color: #ef4444;">CRITICAL</td><td>High risk of failure, find alternate site</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card">
        <h4>Go/No-Go Decision Factors</h4>
        <p>Link margin is one factor. Also consider:</p>
        <ul style="margin-left: 1.5rem;">
          <li>Physical obstacles between you and the operational area</li>
          <li>GPS signal quality (degradation may indicate jamming)</li>
          <li>Weather conditions affecting propagation</li>
          <li>Mission criticality and acceptable risk level</li>
          <li>Availability of alternate sites with better conditions</li>
        </ul>
      </div>
    `;

    document.getElementById('lm-calculate').addEventListener('click', calculateLinkMargin);
  }

  function calculateLinkMargin() {
    const signalStr = parseFloat(document.getElementById('lm-signal').value);
    const noiseFloor = parseFloat(document.getElementById('lm-noise').value);
    const interferer = parseFloat(document.getElementById('lm-interferer').value);

    if (isNaN(signalStr) || isNaN(noiseFloor)) {
      const output = document.getElementById('lm-output');
      output.innerHTML = '<span style="color: var(--error);">Please enter valid signal strength and noise floor values.</span>';
      output.style.display = 'block';
      return;
    }

    const snr = signalStr - noiseFloor;
    const interfererMargin = isNaN(interferer) ? null : signalStr - interferer;

    // Determine the limiting factor
    const effectiveMargin = interfererMargin !== null ? Math.min(snr, interfererMargin) : snr;

    let status, statusColor, recommendation;
    if (effectiveMargin > 20) {
      status = 'EXCELLENT';
      statusColor = '#10b981';
      recommendation = 'Link conditions are favorable. Proceed with mission planning.';
    } else if (effectiveMargin >= 15) {
      status = 'NOMINAL';
      statusColor = '#10b981';
      recommendation = 'Adequate margin for most operations. Monitor for degradation.';
    } else if (effectiveMargin >= 10) {
      status = 'MARGINAL';
      statusColor = '#f59e0b';
      recommendation = 'Link may degrade under stress. Consider alternate site or reduced range operations.';
    } else {
      status = 'CRITICAL';
      statusColor = '#ef4444';
      recommendation = 'High risk of link failure. Find alternate site or abort mission.';
    }

    let output = `
<span class="line-label">LINK ANALYSIS:</span>
Signal Strength: ${signalStr} dBm
Noise Floor: ${noiseFloor} dBm
Signal-to-Noise Ratio: ${snr} dB
`;

    if (interfererMargin !== null) {
      output += `Interferer Level: ${interferer} dBm
Signal-to-Interferer Ratio: ${interfererMargin} dB
`;
    }

    output += `
<span class="line-label">ASSESSMENT:</span>
<span style="font-size: 1.3rem; color: ${statusColor};">Link Margin: ${effectiveMargin} dB - ${status}</span>

<span class="line-label">RECOMMENDATION:</span>
${recommendation}
    `.trim();

    const outputEl = document.getElementById('lm-output');
    outputEl.innerHTML = output;
    outputEl.style.display = 'block';
  }

  // ==========================================================================
  // HF Antenna Calculator
  // ==========================================================================

  function showHFAntennaCalculator() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">HF Antenna Calculator</h1>
        <p class="section-description">Calculate antenna dimensions for HF wire antennas. Enter your operating frequency to get precise cutting lengths.</p>
      </div>

      <div class="form-generator">
        <div class="form-group">
          <label class="form-label">Operating Frequency (MHz)</label>
          <input type="number" class="form-input" id="hf-frequency" placeholder="e.g., 7.2" step="0.001" min="1" max="30">
          <span class="form-hint">Enter frequency between 1-30 MHz for HF band</span>
        </div>

        <div class="form-group">
          <label class="form-label">Antenna Type</label>
          <select class="form-select" id="hf-antenna-type">
            <option value="all">All Types (Comparison)</option>
            <option value="dipole">Half-Wave Dipole</option>
            <option value="quarter">Quarter-Wave Vertical</option>
            <option value="inverted-v">Inverted V</option>
            <option value="long-wire">Long Wire Antenna</option>
            <option value="nvis">NVIS Dipole</option>
          </select>
        </div>

        <div class="form-group" id="hf-halfwaves-group" style="display: none;">
          <label class="form-label">Number of Half-Wavelengths (for Long Wire)</label>
          <input type="number" class="form-input" id="hf-halfwaves" value="2" min="1" max="10" step="1">
          <span class="form-hint">Long wire antennas are typically 2-10 half-wavelengths</span>
        </div>

        <div class="form-group">
          <label class="form-label">Units</label>
          <select class="form-select" id="hf-units">
            <option value="feet">Feet and Inches</option>
            <option value="meters">Meters</option>
            <option value="both">Both</option>
          </select>
        </div>

        <button class="form-btn" id="hf-calculate">Calculate Dimensions</button>

        <div class="output-display" id="hf-output" style="display: none;"></div>
      </div>

      <div class="content-card" style="margin-top: 2rem;">
        <h4>Quick Reference - Common Amateur Bands</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Band</th><th>Frequency</th><th>1/2 Wave Dipole</th><th>1/4 Wave Vertical</th></tr>
          </thead>
          <tbody>
            <tr><td>80m</td><td>3.5 MHz</td><td>133 ft 8 in</td><td>66 ft 10 in</td></tr>
            <tr><td>40m</td><td>7.15 MHz</td><td>65 ft 5 in</td><td>32 ft 9 in</td></tr>
            <tr><td>20m</td><td>14.2 MHz</td><td>32 ft 11 in</td><td>16 ft 6 in</td></tr>
            <tr><td>15m</td><td>21.2 MHz</td><td>22 ft 1 in</td><td>11 ft</td></tr>
            <tr><td>10m</td><td>28.5 MHz</td><td>16 ft 5 in</td><td>8 ft 2 in</td></tr>
          </tbody>
        </table>
      </div>

      <div class="content-card">
        <h4>Antenna Formulas</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Antenna Type</th><th>Formula (Feet)</th><th>Formula (Meters)</th></tr>
          </thead>
          <tbody>
            <tr><td>Half-Wave Dipole</td><td><code>468 / f(MHz)</code></td><td><code>142.5 / f(MHz)</code></td></tr>
            <tr><td>Quarter-Wave Vertical</td><td><code>234 / f(MHz)</code></td><td><code>71.25 / f(MHz)</code></td></tr>
            <tr><td>Long Wire (N half-waves)</td><td><code>492 x (N-0.05) / f</code></td><td><code>150 x (N-0.05) / f</code></td></tr>
            <tr><td>NVIS Height</td><td><code>142.5 / f(MHz)</code></td><td><code>43.4 / f(MHz)</code></td></tr>
          </tbody>
        </table>
      </div>

      <div class="info-box">
        <div class="info-box-title">Field Construction Tip</div>
        <p>Always cut wire antennas slightly long (add 2-3%) and trim to tune. It's easier to shorten wire than add to it. For dipoles, the total length is split in half - each leg connects to one side of the feedline (coax center conductor to one leg, shield to the other).</p>
      </div>
    `;

    // Event listeners
    document.getElementById('hf-antenna-type').addEventListener('change', (e) => {
      const halfwavesGroup = document.getElementById('hf-halfwaves-group');
      halfwavesGroup.style.display = e.target.value === 'long-wire' ? 'block' : 'none';
    });

    document.getElementById('hf-calculate').addEventListener('click', calculateHFAntenna);
  }

  function calculateHFAntenna() {
    const frequency = parseFloat(document.getElementById('hf-frequency').value);
    const antennaType = document.getElementById('hf-antenna-type').value;
    const units = document.getElementById('hf-units').value;
    const halfwaves = parseInt(document.getElementById('hf-halfwaves').value) || 2;

    if (!frequency || frequency < 1 || frequency > 30) {
      const output = document.getElementById('hf-output');
      output.innerHTML = '<span style="color: #ef4444;">Please enter a valid frequency between 1-30 MHz.</span>';
      output.style.display = 'block';
      return;
    }

    // Calculate all antenna dimensions
    const calculations = {
      halfWaveFeet: 468 / frequency,
      halfWaveMeters: 142.5 / frequency,
      quarterWaveFeet: 234 / frequency,
      quarterWaveMeters: 71.25 / frequency,
      longWireFeet: (492 * (halfwaves - 0.05)) / frequency,
      longWireMeters: (150 * (halfwaves - 0.05)) / frequency,
      nvisHeightFeet: 142.5 / frequency,
      nvisHeightMeters: 43.4 / frequency,
      wavelengthFeet: 984 / frequency,
      wavelengthMeters: 300 / frequency
    };

    // Helper function to format feet and inches
    function formatFeetInches(totalFeet) {
      const feet = Math.floor(totalFeet);
      const inches = Math.round((totalFeet - feet) * 12);
      if (inches === 12) {
        return `${feet + 1} ft 0 in`;
      }
      return `${feet} ft ${inches} in`;
    }

    // Helper function to format meters
    function formatMeters(meters) {
      return `${meters.toFixed(2)} m`;
    }

    // Helper function to format based on unit preference
    function formatLength(feet, meters) {
      if (units === 'feet') return formatFeetInches(feet);
      if (units === 'meters') return formatMeters(meters);
      return `${formatFeetInches(feet)} (${formatMeters(meters)})`;
    }

    let output = `<span class="line-label">FREQUENCY: ${frequency} MHz</span>
Wavelength: ${formatLength(calculations.wavelengthFeet, calculations.wavelengthMeters)}

`;

    if (antennaType === 'all' || antennaType === 'dipole') {
      output += `<span class="line-label">HALF-WAVE DIPOLE:</span>
Total Length: ${formatLength(calculations.halfWaveFeet, calculations.halfWaveMeters)}
Each Leg: ${formatLength(calculations.halfWaveFeet / 2, calculations.halfWaveMeters / 2)}

`;
    }

    if (antennaType === 'all' || antennaType === 'quarter') {
      output += `<span class="line-label">QUARTER-WAVE VERTICAL:</span>
Radiator Length: ${formatLength(calculations.quarterWaveFeet, calculations.quarterWaveMeters)}
Ground Radials (each): ${formatLength(calculations.quarterWaveFeet, calculations.quarterWaveMeters)}

`;
    }

    if (antennaType === 'all' || antennaType === 'inverted-v') {
      output += `<span class="line-label">INVERTED V DIPOLE:</span>
Total Wire Length: ${formatLength(calculations.halfWaveFeet, calculations.halfWaveMeters)}
Each Leg: ${formatLength(calculations.halfWaveFeet / 2, calculations.halfWaveMeters / 2)}
Recommended Apex Angle: 90-120 degrees
Apex Height: ${formatLength(calculations.halfWaveFeet * 0.35, calculations.halfWaveMeters * 0.35)} minimum

`;
    }

    if (antennaType === 'all' || antennaType === 'long-wire') {
      output += `<span class="line-label">LONG WIRE (${halfwaves} half-waves):</span>
Total Length: ${formatLength(calculations.longWireFeet, calculations.longWireMeters)}
Height Above Ground: ${formatLength(calculations.quarterWaveFeet, calculations.quarterWaveMeters)} minimum

`;
    }

    if (antennaType === 'all' || antennaType === 'nvis') {
      output += `<span class="line-label">NVIS DIPOLE (Near Vertical Incidence Skywave):</span>
Total Length: ${formatLength(calculations.halfWaveFeet, calculations.halfWaveMeters)}
Each Leg: ${formatLength(calculations.halfWaveFeet / 2, calculations.halfWaveMeters / 2)}
Height Above Ground: ${formatLength(calculations.nvisHeightFeet, calculations.nvisHeightMeters)}
(Mount LOW for high-angle radiation - covers 0-300 mile radius)

`;
    }

    // Add cutting instructions
    output += `<span class="line-label">CUTTING INSTRUCTIONS:</span>
Add 2-3% extra length for tuning margin
Strip insulation at center for feedpoint connection
Connect coax: center conductor to one leg, shield to other
`;

    const outputEl = document.getElementById('hf-output');
    outputEl.innerHTML = output.trim();
    outputEl.style.display = 'block';
  }

  // ==========================================================================
  // Free Space Path Loss Calculator
  // ==========================================================================

  function showPathLossCalculator() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <a href="#" class="back-link" onclick="window.location.hash=''; return false;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </a>
        <h1 class="section-title">Free Space Path Loss Calculator</h1>
        <p class="section-description">Calculate RF signal attenuation over distance using the Friis transmission equation.</p>
      </div>

      <div class="form-generator">
        <div class="form-row" style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Frequency</label>
            <input type="number" class="form-input" id="fspl-freq" placeholder="Enter frequency" step="any">
          </div>
          <div class="form-group" style="flex: 0 0 120px;">
            <label class="form-label">Freq Unit</label>
            <select class="form-select" id="fspl-freq-unit">
              <option value="mhz">MHz</option>
              <option value="ghz">GHz</option>
            </select>
          </div>
        </div>

        <div class="form-row" style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Distance</label>
            <input type="number" class="form-input" id="fspl-dist" placeholder="Enter distance" step="any">
          </div>
          <div class="form-group" style="flex: 0 0 120px;">
            <label class="form-label">Dist Unit</label>
            <select class="form-select" id="fspl-dist-unit">
              <option value="km">Kilometers</option>
              <option value="mi">Miles</option>
              <option value="m">Meters</option>
              <option value="ft">Feet</option>
            </select>
          </div>
        </div>

        <button class="form-btn" onclick="calculatePathLoss()">Calculate Path Loss</button>

        <pre class="form-output" id="fspl-output" style="display: none;"></pre>
      </div>

      <div class="content-card">
        <h4>About Free Space Path Loss</h4>
        <p>FSPL represents signal attenuation in ideal conditions with no obstructions. Real-world losses are typically 2-4x higher in urban environments. The formula is:</p>
        <p style="font-family: var(--font-mono); margin: 1rem 0;">FSPL (dB) = 20×log₁₀(d) + 20×log₁₀(f) + 20×log₁₀(4π/c)</p>
        <p>Where d = distance, f = frequency, c = speed of light</p>
      </div>
    `;
  }

  function calculatePathLoss() {
    let freq = parseFloat(document.getElementById('fspl-freq').value);
    let dist = parseFloat(document.getElementById('fspl-dist').value);
    const freqUnit = document.getElementById('fspl-freq-unit').value;
    const distUnit = document.getElementById('fspl-dist-unit').value;

    if (!freq || !dist || freq <= 0 || dist <= 0) {
      document.getElementById('fspl-output').innerHTML = '<span style="color: #ef4444;">Please enter valid positive values.</span>';
      document.getElementById('fspl-output').style.display = 'block';
      return;
    }

    // Convert frequency to MHz
    if (freqUnit === 'ghz') freq = freq * 1000;

    // Convert distance to km
    if (distUnit === 'mi') dist = dist * 1.60934;
    else if (distUnit === 'm') dist = dist / 1000;
    else if (distUnit === 'ft') dist = dist * 0.0003048;

    // FSPL formula: 20*log10(d_km) + 20*log10(f_MHz) + 32.44
    const fspl = 20 * Math.log10(dist) + 20 * Math.log10(freq) + 32.44;

    const output = `<span class="line-label">FREE SPACE PATH LOSS</span>
Frequency: ${freq.toFixed(2)} MHz (${(freq/1000).toFixed(4)} GHz)
Distance: ${dist.toFixed(3)} km (${(dist * 0.621371).toFixed(3)} mi)

<span class="line-label">RESULT</span>
Path Loss: ${fspl.toFixed(1)} dB

<span class="line-label">PRACTICAL ESTIMATES</span>
Urban/Obstructed: ${(fspl * 1.5).toFixed(1)} - ${(fspl * 2).toFixed(1)} dB
Dense Urban: ${(fspl * 2).toFixed(1)} - ${(fspl * 2.5).toFixed(1)} dB
Foliage (add): +10 to +20 dB per 100m`;

    document.getElementById('fspl-output').innerHTML = output;
    document.getElementById('fspl-output').style.display = 'block';
  }

  // ==========================================================================
  // Frequency/Wavelength Converter
  // ==========================================================================

  function showFreqWavelengthConverter() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <a href="#" class="back-link" onclick="window.location.hash=''; return false;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </a>
        <h1 class="section-title">Frequency / Wavelength Converter</h1>
        <p class="section-description">Convert between frequency and wavelength. Enter either value to calculate the other.</p>
      </div>

      <div class="form-generator">
        <div class="form-group">
          <label class="form-label">Frequency (MHz)</label>
          <input type="number" class="form-input" id="conv-freq" placeholder="Enter frequency in MHz" step="any" oninput="convertFromFreq()">
        </div>

        <div style="text-align: center; padding: 0.5rem; color: var(--text-muted);">↕ Auto-converts ↕</div>

        <div class="form-group">
          <label class="form-label">Wavelength (meters)</label>
          <input type="number" class="form-input" id="conv-wave" placeholder="Enter wavelength in meters" step="any" oninput="convertFromWave()">
        </div>

        <pre class="form-output" id="conv-output" style="display: none;"></pre>
      </div>

      <div class="content-card">
        <h4>Quick Reference</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Band</th><th>Frequency</th><th>Wavelength</th></tr>
          </thead>
          <tbody>
            <tr><td>80m Amateur</td><td>3.5-4.0 MHz</td><td>75-85m</td></tr>
            <tr><td>40m Amateur</td><td>7.0-7.3 MHz</td><td>41-43m</td></tr>
            <tr><td>20m Amateur</td><td>14.0-14.35 MHz</td><td>21m</td></tr>
            <tr><td>2m Amateur</td><td>144-148 MHz</td><td>2m</td></tr>
            <tr><td>70cm Amateur</td><td>420-450 MHz</td><td>70cm</td></tr>
            <tr><td>WiFi 2.4GHz</td><td>2400 MHz</td><td>12.5cm</td></tr>
            <tr><td>WiFi 5GHz</td><td>5800 MHz</td><td>5.2cm</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function convertFromFreq() {
    const freq = parseFloat(document.getElementById('conv-freq').value);
    if (!freq || freq <= 0) {
      document.getElementById('conv-output').style.display = 'none';
      return;
    }

    const wavelengthM = 299.792458 / freq;
    document.getElementById('conv-wave').value = wavelengthM.toFixed(4);

    const output = `<span class="line-label">CONVERSION RESULTS</span>
Frequency: ${freq} MHz = ${(freq/1000).toFixed(6)} GHz = ${(freq*1000000).toExponential(3)} Hz
Wavelength: ${wavelengthM.toFixed(4)} m = ${(wavelengthM*100).toFixed(2)} cm = ${(wavelengthM*3.28084).toFixed(2)} ft

<span class="line-label">ANTENNA LENGTHS</span>
Half-wave dipole: ${(468/freq).toFixed(2)} ft / ${(142.5/freq).toFixed(2)} m
Quarter-wave vertical: ${(234/freq).toFixed(2)} ft / ${(71.25/freq).toFixed(2)} m`;

    document.getElementById('conv-output').innerHTML = output;
    document.getElementById('conv-output').style.display = 'block';
  }

  function convertFromWave() {
    const wave = parseFloat(document.getElementById('conv-wave').value);
    if (!wave || wave <= 0) {
      document.getElementById('conv-output').style.display = 'none';
      return;
    }

    const freqMHz = 299.792458 / wave;
    document.getElementById('conv-freq').value = freqMHz.toFixed(4);

    const output = `<span class="line-label">CONVERSION RESULTS</span>
Wavelength: ${wave} m = ${(wave*100).toFixed(2)} cm = ${(wave*3.28084).toFixed(2)} ft
Frequency: ${freqMHz.toFixed(4)} MHz = ${(freqMHz/1000).toFixed(6)} GHz

<span class="line-label">ANTENNA LENGTHS</span>
Half-wave dipole: ${(468/freqMHz).toFixed(2)} ft / ${(142.5/freqMHz).toFixed(2)} m
Quarter-wave vertical: ${(234/freqMHz).toFixed(2)} ft / ${(71.25/freqMHz).toFixed(2)} m`;

    document.getElementById('conv-output').innerHTML = output;
    document.getElementById('conv-output').style.display = 'block';
  }

  // ==========================================================================
  // Wind Drift Calculator (Marksmanship)
  // ==========================================================================

  function showWindCalculator() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <a href="#" class="back-link" onclick="window.location.hash=''; return false;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </a>
        <h1 class="section-title">Wind Drift Calculator</h1>
        <p class="section-description">Calculate wind deflection and holdoff for precision shooting.</p>
      </div>

      <div class="form-generator">
        <div class="form-row" style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Range (yards)</label>
            <input type="number" class="form-input" id="wind-range" placeholder="e.g., 500" step="any">
          </div>
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Wind Speed (mph)</label>
            <input type="number" class="form-input" id="wind-speed" placeholder="e.g., 10" step="any">
          </div>
        </div>

        <div class="form-row" style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Wind Direction (clock)</label>
            <select class="form-select" id="wind-dir">
              <option value="1.0">3 or 9 o'clock (Full Value)</option>
              <option value="0.87">2 or 10 o'clock</option>
              <option value="0.87">4 or 8 o'clock</option>
              <option value="0.5">1 or 11 o'clock (Half Value)</option>
              <option value="0.5">5 or 7 o'clock (Half Value)</option>
              <option value="0">12 or 6 o'clock (No Value)</option>
            </select>
          </div>
          <div class="form-group" style="flex: 1; min-width: 150px;">
            <label class="form-label">Bullet BC (G1)</label>
            <input type="number" class="form-input" id="wind-bc" placeholder="e.g., 0.500" step="0.001" value="0.500">
          </div>
        </div>

        <button class="form-btn" onclick="calculateWind()">Calculate Wind Drift</button>

        <pre class="form-output" id="wind-output" style="display: none;"></pre>
      </div>

      <div class="content-card">
        <h4>Wind Value by Clock Position</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Position</th><th>Value</th><th>Effect</th></tr>
          </thead>
          <tbody>
            <tr><td>12, 6</td><td>No Value</td><td>Headwind/tailwind - minimal drift</td></tr>
            <tr><td>1, 5, 7, 11</td><td>Half Value</td><td>~50% of full crosswind effect</td></tr>
            <tr><td>2, 4, 8, 10</td><td>~87% Value</td><td>Nearly full crosswind effect</td></tr>
            <tr><td>3, 9</td><td>Full Value</td><td>Maximum crosswind drift</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function calculateWind() {
    const range = parseFloat(document.getElementById('wind-range').value);
    const speed = parseFloat(document.getElementById('wind-speed').value);
    const dirValue = parseFloat(document.getElementById('wind-dir').value);
    const bc = parseFloat(document.getElementById('wind-bc').value) || 0.5;

    if (!range || !speed || range <= 0 || speed < 0) {
      document.getElementById('wind-output').innerHTML = '<span style="color: #ef4444;">Please enter valid values.</span>';
      document.getElementById('wind-output').style.display = 'block';
      return;
    }

    // Simplified wind drift formula based on BC and range
    // This is an approximation: drift (inches) ≈ (range/100)² × wind × windValue / (BC × 10)
    const effectiveWind = speed * dirValue;
    const driftInches = Math.pow(range / 100, 1.8) * effectiveWind * 0.1 / bc;
    const driftMOA = (driftInches / range) * 100 / 1.047;
    const driftMils = driftMOA * 0.2909;

    // Direction for holdoff
    const holdDir = effectiveWind > 0 ? 'into the wind' : 'with the wind';

    const output = `<span class="line-label">WIND ANALYSIS</span>
Range: ${range} yards
Wind Speed: ${speed} mph
Wind Value: ${(dirValue * 100).toFixed(0)}% (effective: ${effectiveWind.toFixed(1)} mph)
Bullet BC: ${bc}

<span class="line-label">DRIFT ESTIMATE</span>
Drift: ${Math.abs(driftInches).toFixed(1)} inches
Correction: ${Math.abs(driftMOA).toFixed(1)} MOA / ${Math.abs(driftMils).toFixed(1)} mils

<span class="line-label">HOLDOFF</span>
Aim ${Math.abs(driftMOA).toFixed(1)} MOA ${holdDir}
Or dial ${Math.abs(driftMOA).toFixed(1)} MOA ${holdDir}

<span style="color: var(--text-muted); font-size: 0.85rem;">Note: This is an estimate. Actual drift varies with velocity, bullet design, and atmospheric conditions. Confirm with ballistic software or range data.</span>`;

    document.getElementById('wind-output').innerHTML = output;
    document.getElementById('wind-output').style.display = 'block';
  }

  // ==========================================================================
  // Coordinate Converter (MGRS/UTM/Lat-Long)
  // ==========================================================================

  function showCoordConverter() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <a href="#" class="back-link" onclick="window.location.hash=''; return false;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </a>
        <h1 class="section-title">Coordinate Converter</h1>
        <p class="section-description">Convert between decimal degrees and degrees-minutes-seconds formats.</p>
      </div>

      <div class="form-generator">
        <div class="form-group">
          <label class="form-label">Decimal Degrees (DD)</label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="number" class="form-input" id="dd-lat" placeholder="Latitude (e.g., 33.7490)" step="any" style="flex:1;">
            <input type="number" class="form-input" id="dd-lon" placeholder="Longitude (e.g., -84.3880)" step="any" style="flex:1;">
          </div>
        </div>

        <button class="form-btn" onclick="convertFromDD()" style="margin-bottom: 1rem;">Convert from DD →</button>

        <div class="form-group">
          <label class="form-label">Degrees Minutes Seconds (DMS)</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <input type="number" class="form-input" id="dms-lat-d" placeholder="D" style="width: 60px;">
            <input type="number" class="form-input" id="dms-lat-m" placeholder="M" style="width: 60px;">
            <input type="number" class="form-input" id="dms-lat-s" placeholder="S" step="any" style="width: 80px;">
            <select class="form-select" id="dms-lat-dir" style="width: 60px;">
              <option value="N">N</option>
              <option value="S">S</option>
            </select>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <input type="number" class="form-input" id="dms-lon-d" placeholder="D" style="width: 60px;">
            <input type="number" class="form-input" id="dms-lon-m" placeholder="M" style="width: 60px;">
            <input type="number" class="form-input" id="dms-lon-s" placeholder="S" step="any" style="width: 80px;">
            <select class="form-select" id="dms-lon-dir" style="width: 60px;">
              <option value="W">W</option>
              <option value="E">E</option>
            </select>
          </div>
        </div>

        <button class="form-btn" onclick="convertFromDMS()">← Convert from DMS</button>

        <pre class="form-output" id="coord-output" style="display: none;"></pre>
      </div>

      <div class="content-card">
        <h4>Format Examples</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Format</th><th>Example (Atlanta, GA)</th></tr>
          </thead>
          <tbody>
            <tr><td>Decimal Degrees</td><td>33.7490, -84.3880</td></tr>
            <tr><td>DMS</td><td>33° 44' 56.4" N, 84° 23' 16.8" W</td></tr>
            <tr><td>Degrees Decimal Minutes</td><td>33° 44.940' N, 84° 23.280' W</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function convertFromDD() {
    const lat = parseFloat(document.getElementById('dd-lat').value);
    const lon = parseFloat(document.getElementById('dd-lon').value);

    if (isNaN(lat) || isNaN(lon)) {
      document.getElementById('coord-output').innerHTML = '<span style="color: #ef4444;">Please enter valid coordinates.</span>';
      document.getElementById('coord-output').style.display = 'block';
      return;
    }

    // Convert to DMS
    const latDir = lat >= 0 ? 'N' : 'S';
    const lonDir = lon >= 0 ? 'E' : 'W';
    const absLat = Math.abs(lat);
    const absLon = Math.abs(lon);

    const latD = Math.floor(absLat);
    const latM = Math.floor((absLat - latD) * 60);
    const latS = ((absLat - latD) * 60 - latM) * 60;

    const lonD = Math.floor(absLon);
    const lonM = Math.floor((absLon - lonD) * 60);
    const lonS = ((absLon - lonD) * 60 - lonM) * 60;

    // Fill DMS fields
    document.getElementById('dms-lat-d').value = latD;
    document.getElementById('dms-lat-m').value = latM;
    document.getElementById('dms-lat-s').value = latS.toFixed(2);
    document.getElementById('dms-lat-dir').value = latDir;

    document.getElementById('dms-lon-d').value = lonD;
    document.getElementById('dms-lon-m').value = lonM;
    document.getElementById('dms-lon-s').value = lonS.toFixed(2);
    document.getElementById('dms-lon-dir').value = lonDir;

    const output = `<span class="line-label">COORDINATE CONVERSION</span>

Decimal Degrees: ${lat.toFixed(6)}, ${lon.toFixed(6)}
DMS: ${latD}° ${latM}' ${latS.toFixed(2)}" ${latDir}, ${lonD}° ${lonM}' ${lonS.toFixed(2)}" ${lonDir}
DDM: ${latD}° ${((absLat - latD) * 60).toFixed(4)}' ${latDir}, ${lonD}° ${((absLon - lonD) * 60).toFixed(4)}' ${lonDir}`;

    document.getElementById('coord-output').innerHTML = output;
    document.getElementById('coord-output').style.display = 'block';
  }

  function convertFromDMS() {
    const latD = parseFloat(document.getElementById('dms-lat-d').value) || 0;
    const latM = parseFloat(document.getElementById('dms-lat-m').value) || 0;
    const latS = parseFloat(document.getElementById('dms-lat-s').value) || 0;
    const latDir = document.getElementById('dms-lat-dir').value;

    const lonD = parseFloat(document.getElementById('dms-lon-d').value) || 0;
    const lonM = parseFloat(document.getElementById('dms-lon-m').value) || 0;
    const lonS = parseFloat(document.getElementById('dms-lon-s').value) || 0;
    const lonDir = document.getElementById('dms-lon-dir').value;

    let lat = latD + latM/60 + latS/3600;
    let lon = lonD + lonM/60 + lonS/3600;

    if (latDir === 'S') lat = -lat;
    if (lonDir === 'W') lon = -lon;

    // Fill DD fields
    document.getElementById('dd-lat').value = lat.toFixed(6);
    document.getElementById('dd-lon').value = lon.toFixed(6);

    const output = `<span class="line-label">COORDINATE CONVERSION</span>

DMS: ${latD}° ${latM}' ${latS.toFixed(2)}" ${latDir}, ${lonD}° ${lonM}' ${lonS.toFixed(2)}" ${lonDir}
Decimal Degrees: ${lat.toFixed(6)}, ${lon.toFixed(6)}
DDM: ${latD}° ${(latM + latS/60).toFixed(4)}' ${latDir}, ${lonD}° ${(lonM + lonS/60).toFixed(4)}' ${lonDir}`;

    document.getElementById('coord-output').innerHTML = output;
    document.getElementById('coord-output').style.display = 'block';
  }

  // ==========================================================================
  // Zulu Time Converter
  // ==========================================================================

  function showZuluTime() {
    const content = document.getElementById('contentArea');

    // Get current times
    const now = new Date();
    const zuluTime = now.toISOString().slice(11, 19) + 'Z';
    const zuluDate = now.toISOString().slice(0, 10);
    const localTime = now.toLocaleTimeString('en-US', { hour12: false });
    const localOffset = -now.getTimezoneOffset() / 60;
    const offsetStr = localOffset >= 0 ? `+${localOffset}` : `${localOffset}`;

    content.innerHTML = `
      <div class="section-header">
        <a href="#" class="back-link" onclick="window.location.hash=''; return false;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </a>
        <h1 class="section-title">Zulu Time Converter</h1>
        <p class="section-description">Convert between local time and UTC/Zulu time for coordination.</p>
      </div>

      <div class="form-generator">
        <div class="content-card" style="text-align: center; margin-bottom: 1rem;">
          <div style="font-size: 0.9rem; color: var(--text-muted);">CURRENT ZULU TIME</div>
          <div id="live-zulu" style="font-size: 2rem; font-weight: 700; font-family: var(--font-mono); color: var(--accent);">${zuluTime}</div>
          <div style="font-size: 0.9rem; color: var(--text-muted);">Date: ${zuluDate}</div>
        </div>

        <div class="content-card" style="text-align: center; margin-bottom: 1rem;">
          <div style="font-size: 0.9rem; color: var(--text-muted);">LOCAL TIME (UTC${offsetStr})</div>
          <div id="live-local" style="font-size: 1.5rem; font-weight: 600; font-family: var(--font-mono);">${localTime}</div>
        </div>

        <div class="form-group">
          <label class="form-label">Convert Local Time to Zulu</label>
          <input type="time" class="form-input" id="local-input" step="1">
        </div>
        <button class="form-btn" onclick="localToZulu()">Convert to Zulu →</button>

        <div class="form-group" style="margin-top: 1rem;">
          <label class="form-label">Convert Zulu to Local</label>
          <input type="time" class="form-input" id="zulu-input" step="1">
        </div>
        <button class="form-btn" onclick="zuluToLocal()">← Convert to Local</button>

        <pre class="form-output" id="time-output" style="display: none;"></pre>
      </div>

      <div class="content-card">
        <h4>Common Time Zone Offsets</h4>
        <table class="quick-ref-table">
          <thead>
            <tr><th>Zone</th><th>Name</th><th>Offset</th></tr>
          </thead>
          <tbody>
            <tr><td>Z</td><td>Zulu (UTC)</td><td>+0</td></tr>
            <tr><td>A</td><td>Alpha</td><td>+1</td></tr>
            <tr><td>B</td><td>Bravo</td><td>+2</td></tr>
            <tr><td>R</td><td>Romeo (EST)</td><td>-5</td></tr>
            <tr><td>S</td><td>Sierra (CST)</td><td>-6</td></tr>
            <tr><td>T</td><td>Tango (MST)</td><td>-7</td></tr>
            <tr><td>U</td><td>Uniform (PST)</td><td>-8</td></tr>
          </tbody>
        </table>
      </div>
    `;

    // Start live clock update
    setInterval(updateLiveClock, 1000);
  }

  function updateLiveClock() {
    const zuluEl = document.getElementById('live-zulu');
    const localEl = document.getElementById('live-local');
    if (zuluEl && localEl) {
      const now = new Date();
      zuluEl.textContent = now.toISOString().slice(11, 19) + 'Z';
      localEl.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    }
  }

  function localToZulu() {
    const localInput = document.getElementById('local-input').value;
    if (!localInput) {
      document.getElementById('time-output').innerHTML = '<span style="color: #ef4444;">Please enter a time.</span>';
      document.getElementById('time-output').style.display = 'block';
      return;
    }

    const [hours, minutes, seconds = 0] = localInput.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, seconds);

    const zuluHours = now.getUTCHours().toString().padStart(2, '0');
    const zuluMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const zuluSeconds = now.getUTCSeconds().toString().padStart(2, '0');

    const output = `<span class="line-label">TIME CONVERSION</span>
Local: ${localInput}
Zulu:  ${zuluHours}:${zuluMinutes}:${zuluSeconds}Z

Military Format: ${zuluHours}${zuluMinutes}Z`;

    document.getElementById('time-output').innerHTML = output;
    document.getElementById('time-output').style.display = 'block';
  }

  function zuluToLocal() {
    const zuluInput = document.getElementById('zulu-input').value;
    if (!zuluInput) {
      document.getElementById('time-output').innerHTML = '<span style="color: #ef4444;">Please enter a time.</span>';
      document.getElementById('time-output').style.display = 'block';
      return;
    }

    const [hours, minutes, seconds = 0] = zuluInput.split(':').map(Number);
    const now = new Date();
    now.setUTCHours(hours, minutes, seconds);

    const localTime = now.toLocaleTimeString('en-US', { hour12: false });

    const output = `<span class="line-label">TIME CONVERSION</span>
Zulu:  ${zuluInput}Z
Local: ${localTime}

Military Format: ${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}Z`;

    document.getElementById('time-output').innerHTML = output;
    document.getElementById('time-output').style.display = 'block';
  }

  // ==========================================================================
  // Initialize on Load
  // ==========================================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }

})();
