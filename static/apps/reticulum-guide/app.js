/**
 * Reticulum Field Reference
 * Version 1.0
 * Light Fighter Manifesto L.L.C.
 */

(function() {
  'use strict';

  // ==========================================================================
  // STATE
  // ==========================================================================

  const state = {
    data: {},
    currentSection: null,
    searchIndex: []
  };

  // ==========================================================================
  // DATA LOADING
  // ==========================================================================

  const dataFiles = ['overview', 'interfaces', 'hardware', 'nomadnet', 'lxmf', 'utilities', 'troubleshooting'];

  async function loadData() {
    const promises = dataFiles.map(async (file) => {
      try {
        const response = await fetch(`data/${file}.json`);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const data = await response.json();
        state.data[file] = data;
        buildSearchIndex(file, data);
        return data;
      } catch (error) {
        console.error(`Error loading ${file}:`, error);
        return null;
      }
    });

    await Promise.all(promises);
    buildNavigation();
    showSection('overview', 'why-reticulum');
  }

  function buildSearchIndex(file, data) {
    if (!data.sections) return;
    data.sections.forEach(section => {
      state.searchIndex.push({
        file,
        id: section.id,
        title: section.title,
        text: stripHtml(section.content).toLowerCase()
      });
    });
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  // ==========================================================================
  // NAVIGATION
  // ==========================================================================

  function buildNavigation() {
    const navMappings = {
      overview: 'navOverview',
      interfaces: 'navInterfaces',
      hardware: 'navHardware',
      nomadnet: 'navNomadnet',
      lxmf: 'navLxmf',
      utilities: 'navUtilities',
      troubleshooting: 'navTroubleshooting'
    };

    Object.entries(navMappings).forEach(([dataKey, navId]) => {
      const nav = document.getElementById(navId);
      const data = state.data[dataKey];
      if (!nav || !data) return;

      nav.innerHTML = data.sections.map(section => `
        <li><a href="#" data-file="${dataKey}" data-section="${section.id}">${section.title}</a></li>
      `).join('');
    });

    // Add click handlers
    document.querySelectorAll('.sidebar-nav a[data-section]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const file = link.dataset.file;
        const sectionId = link.dataset.section;
        showSection(file, sectionId);
        closeSidebar();
      });
    });

    // Calculator links
    document.querySelectorAll('.sidebar-nav a[data-calc]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showCalculator(link.dataset.calc);
        closeSidebar();
      });
    });
  }

  function showSection(file, sectionId) {
    const data = state.data[file];
    if (!data) return;

    const section = data.sections.find(s => s.id === sectionId);
    if (!section) return;

    state.currentSection = { file, sectionId };
    updateActiveNav(file, sectionId);

    const content = document.getElementById('content');
    content.innerHTML = `
      <div class="content-header">
        <h1>${section.title}</h1>
      </div>
      <div class="section">
        ${section.content}
      </div>
    `;

    window.scrollTo(0, 0);
  }

  function updateActiveNav(file, sectionId) {
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.file === file && link.dataset.section === sectionId) {
        link.classList.add('active');
      }
    });
  }

  // ==========================================================================
  // CALCULATORS
  // ==========================================================================

  function showCalculator(type) {
    const content = document.getElementById('content');

    switch(type) {
      case 'link-budget':
        content.innerHTML = getLinkBudgetCalculator();
        initLinkBudgetCalc();
        break;
      case 'airtime':
        content.innerHTML = getAirtimeCalculator();
        initAirtimeCalc();
        break;
      case 'config-gen':
        content.innerHTML = getConfigGenerator();
        initConfigGen();
        break;
    }

    document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
    document.querySelector(`[data-calc="${type}"]`)?.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Link Budget Calculator
  function getLinkBudgetCalculator() {
    return `
      <div class="content-header">
        <h1>LoRa Link Budget Calculator</h1>
        <p>Estimate received signal strength and link margin for LoRa communications.</p>
      </div>
      <div class="calculator">
        <h3>Parameters</h3>
        <div class="calc-grid">
          <div class="calc-field">
            <label>TX Power (dBm)</label>
            <input type="number" id="txPower" value="17" min="0" max="30">
          </div>
          <div class="calc-field">
            <label>TX Antenna Gain (dBi)</label>
            <input type="number" id="txGain" value="2" step="0.5">
          </div>
          <div class="calc-field">
            <label>RX Antenna Gain (dBi)</label>
            <input type="number" id="rxGain" value="2" step="0.5">
          </div>
          <div class="calc-field">
            <label>Frequency (MHz)</label>
            <select id="frequency">
              <option value="433">433 MHz</option>
              <option value="868">868 MHz</option>
              <option value="915" selected>915 MHz</option>
              <option value="2400">2.4 GHz</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Distance (km)</label>
            <input type="number" id="distance" value="5" min="0.1" step="0.1">
          </div>
          <div class="calc-field">
            <label>Spreading Factor</label>
            <select id="sf">
              <option value="7">SF7</option>
              <option value="8" selected>SF8</option>
              <option value="9">SF9</option>
              <option value="10">SF10</option>
              <option value="11">SF11</option>
              <option value="12">SF12</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Bandwidth (kHz)</label>
            <select id="bw">
              <option value="7.8">7.8 kHz</option>
              <option value="10.4">10.4 kHz</option>
              <option value="15.6">15.6 kHz</option>
              <option value="20.8">20.8 kHz</option>
              <option value="31.25">31.25 kHz</option>
              <option value="41.7">41.7 kHz</option>
              <option value="62.5">62.5 kHz</option>
              <option value="125" selected>125 kHz</option>
              <option value="250">250 kHz</option>
              <option value="500">500 kHz</option>
            </select>
          </div>
        </div>
        <button class="calc-button" id="calcLinkBudget">Calculate</button>
        <div id="linkBudgetResult"></div>
      </div>
      <div class="section">
        <h4>Notes</h4>
        <ul>
          <li>Free-space path loss assumes line-of-sight</li>
          <li>Real-world conditions add 10-30 dB loss (obstacles, vegetation)</li>
          <li>Higher SF = better sensitivity but slower data rate</li>
          <li>Link margin > 10 dB recommended for reliability</li>
        </ul>
      </div>
    `;
  }

  function initLinkBudgetCalc() {
    document.getElementById('calcLinkBudget').addEventListener('click', () => {
      const txPower = parseFloat(document.getElementById('txPower').value);
      const txGain = parseFloat(document.getElementById('txGain').value);
      const rxGain = parseFloat(document.getElementById('rxGain').value);
      const freq = parseFloat(document.getElementById('frequency').value);
      const distance = parseFloat(document.getElementById('distance').value);
      const sf = parseInt(document.getElementById('sf').value);
      const bw = parseFloat(document.getElementById('bw').value);

      // Free-space path loss: FSPL = 20*log10(d) + 20*log10(f) + 20*log10(4*pi/c)
      // Simplified: FSPL(dB) = 20*log10(d_km) + 20*log10(f_MHz) + 32.44
      const fspl = 20 * Math.log10(distance) + 20 * Math.log10(freq) + 32.44;

      // EIRP
      const eirp = txPower + txGain;

      // Received power
      const rxPower = eirp - fspl + rxGain;

      // Receiver sensitivity (approximate for LoRa)
      // Sensitivity ≈ -174 + 10*log10(BW) + NF + SNR_required
      // NF ≈ 6 dB, SNR varies by SF
      const snrRequired = {7: -7.5, 8: -10, 9: -12.5, 10: -15, 11: -17.5, 12: -20};
      const sensitivity = -174 + 10 * Math.log10(bw * 1000) + 6 + snrRequired[sf];

      // Link margin
      const margin = rxPower - sensitivity;

      const resultDiv = document.getElementById('linkBudgetResult');
      resultDiv.innerHTML = `
        <div class="calc-result">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div>
              <div class="result-label">EIRP</div>
              <div class="result-value">${eirp.toFixed(1)} dBm</div>
            </div>
            <div>
              <div class="result-label">Free-Space Path Loss</div>
              <div class="result-value">${fspl.toFixed(1)} dB</div>
            </div>
            <div>
              <div class="result-label">Received Power</div>
              <div class="result-value">${rxPower.toFixed(1)} dBm</div>
            </div>
            <div>
              <div class="result-label">Receiver Sensitivity</div>
              <div class="result-value">${sensitivity.toFixed(1)} dBm</div>
            </div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <div class="result-label">Link Margin</div>
            <div class="result-value" style="color: ${margin > 10 ? 'var(--accent-green)' : margin > 0 ? 'var(--accent-yellow)' : 'var(--accent)'}">${margin.toFixed(1)} dB</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
              ${margin > 20 ? 'Excellent link - very reliable' : margin > 10 ? 'Good link - reliable' : margin > 0 ? 'Marginal link - may be unreliable' : 'No link possible at this distance'}
            </div>
          </div>
        </div>
      `;
    });
  }

  // Airtime Calculator
  function getAirtimeCalculator() {
    return `
      <div class="content-header">
        <h1>LoRa Airtime Calculator</h1>
        <p>Calculate time-on-air for LoRa packets.</p>
      </div>
      <div class="calculator">
        <h3>Parameters</h3>
        <div class="calc-grid">
          <div class="calc-field">
            <label>Payload Size (bytes)</label>
            <input type="number" id="payloadSize" value="50" min="1" max="255">
          </div>
          <div class="calc-field">
            <label>Spreading Factor</label>
            <select id="airtimeSf">
              <option value="7">SF7</option>
              <option value="8" selected>SF8</option>
              <option value="9">SF9</option>
              <option value="10">SF10</option>
              <option value="11">SF11</option>
              <option value="12">SF12</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Bandwidth (kHz)</label>
            <select id="airtimeBw">
              <option value="125" selected>125 kHz</option>
              <option value="250">250 kHz</option>
              <option value="500">500 kHz</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Coding Rate</label>
            <select id="airtimeCr">
              <option value="5" selected>4/5</option>
              <option value="6">4/6</option>
              <option value="7">4/7</option>
              <option value="8">4/8</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Preamble Symbols</label>
            <input type="number" id="preamble" value="8" min="6" max="65535">
          </div>
          <div class="calc-field">
            <label>Header Mode</label>
            <select id="headerMode">
              <option value="explicit" selected>Explicit (with header)</option>
              <option value="implicit">Implicit (no header)</option>
            </select>
          </div>
        </div>
        <button class="calc-button" id="calcAirtime">Calculate</button>
        <div id="airtimeResult"></div>
      </div>
      <div class="section">
        <h4>Reticulum Packet Sizes</h4>
        <table>
          <thead><tr><th>Type</th><th>Size</th></tr></thead>
          <tbody>
            <tr><td>Minimum packet</td><td>~35 bytes</td></tr>
            <tr><td>Announce</td><td>~150 bytes</td></tr>
            <tr><td>Link establishment (3 packets)</td><td>~297 bytes total</td></tr>
            <tr><td>Maximum single packet</td><td>500 bytes</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function initAirtimeCalc() {
    document.getElementById('calcAirtime').addEventListener('click', () => {
      const payload = parseInt(document.getElementById('payloadSize').value);
      const sf = parseInt(document.getElementById('airtimeSf').value);
      const bw = parseFloat(document.getElementById('airtimeBw').value) * 1000; // Hz
      const cr = parseInt(document.getElementById('airtimeCr').value);
      const preamble = parseInt(document.getElementById('preamble').value);
      const explicitHeader = document.getElementById('headerMode').value === 'explicit';

      // Symbol duration: Tsym = 2^SF / BW
      const symbolTime = Math.pow(2, sf) / bw; // seconds

      // Preamble time
      const preambleTime = (preamble + 4.25) * symbolTime;

      // Payload symbols calculation (from LoRa datasheet)
      const de = sf >= 11 ? 1 : 0; // Low data rate optimize
      const ih = explicitHeader ? 0 : 1; // Implicit header
      const crc = 1; // CRC enabled

      const payloadSymbols = 8 + Math.max(
        Math.ceil((8 * payload - 4 * sf + 28 + 16 * crc - 20 * ih) / (4 * (sf - 2 * de))) * (cr),
        0
      );

      // Total time
      const payloadTime = payloadSymbols * symbolTime;
      const totalTime = preambleTime + payloadTime;

      // Data rate
      const dataRate = (payload * 8) / totalTime;

      const resultDiv = document.getElementById('airtimeResult');
      resultDiv.innerHTML = `
        <div class="calc-result">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div>
              <div class="result-label">Symbol Time</div>
              <div class="result-value">${(symbolTime * 1000).toFixed(3)} ms</div>
            </div>
            <div>
              <div class="result-label">Preamble Time</div>
              <div class="result-value">${(preambleTime * 1000).toFixed(1)} ms</div>
            </div>
            <div>
              <div class="result-label">Payload Symbols</div>
              <div class="result-value">${payloadSymbols}</div>
            </div>
            <div>
              <div class="result-label">Payload Time</div>
              <div class="result-value">${(payloadTime * 1000).toFixed(1)} ms</div>
            </div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div>
              <div class="result-label">Total Airtime</div>
              <div class="result-value">${(totalTime * 1000).toFixed(1)} ms</div>
            </div>
            <div>
              <div class="result-label">Effective Data Rate</div>
              <div class="result-value">${dataRate > 1000 ? (dataRate/1000).toFixed(2) + ' kbps' : dataRate.toFixed(0) + ' bps'}</div>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Config Generator
  function getConfigGenerator() {
    return `
      <div class="content-header">
        <h1>Interface Config Generator</h1>
        <p>Generate Reticulum interface configurations for common scenarios.</p>
      </div>
      <div class="calculator">
        <h3>Interface Type</h3>
        <div class="calc-field" style="max-width: 300px;">
          <select id="interfaceType">
            <option value="tcp-client">TCP Client (connect to server)</option>
            <option value="tcp-server">TCP Server (accept connections)</option>
            <option value="auto">Auto Interface (local discovery)</option>
            <option value="i2p">I2P Interface (anonymous)</option>
            <option value="rnode">RNode LoRa</option>
            <option value="kiss">KISS TNC</option>
          </select>
        </div>
        <div id="configFields" style="margin-top: 1rem;"></div>
        <button class="calc-button" id="generateConfig" style="margin-top: 1rem;">Generate Config</button>
        <div id="configResult"></div>
      </div>
    `;
  }

  function initConfigGen() {
    const typeSelect = document.getElementById('interfaceType');
    const fieldsDiv = document.getElementById('configFields');

    const configTemplates = {
      'tcp-client': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'RNS Testnet Amsterdam' },
          { id: 'host', label: 'Target Host', value: 'amsterdam.connect.reticulum.network' },
          { id: 'port', label: 'Target Port', value: '4965' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = TCPClientInterface
  enabled = yes
  target_host = ${vals.host}
  target_port = ${vals.port}`
      },
      'tcp-server': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'TCP Server' },
          { id: 'ip', label: 'Listen IP', value: '0.0.0.0' },
          { id: 'port', label: 'Listen Port', value: '4242' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = TCPServerInterface
  enabled = yes
  listen_ip = ${vals.ip}
  listen_port = ${vals.port}`
      },
      'auto': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'Default Interface' },
          { id: 'group', label: 'Group ID', value: 'reticulum' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = AutoInterface
  enabled = yes
  group_id = ${vals.group}`
      },
      'i2p': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'I2P Interface' },
          { id: 'peers', label: 'Peer Address (b32)', value: '' },
          { id: 'connectable', label: 'Accept Incoming', type: 'select', options: ['yes', 'no'], value: 'no' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = I2PInterface
  enabled = yes
  connectable = ${vals.connectable}${vals.peers ? `
  peers = ${vals.peers}` : ''}`
      },
      'rnode': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'RNode LoRa' },
          { id: 'port', label: 'Serial Port', value: '/dev/ttyUSB0' },
          { id: 'freq', label: 'Frequency (Hz)', value: '915000000' },
          { id: 'bw', label: 'Bandwidth (Hz)', value: '125000' },
          { id: 'txpower', label: 'TX Power (dBm)', value: '17' },
          { id: 'sf', label: 'Spreading Factor', value: '8' },
          { id: 'cr', label: 'Coding Rate', value: '5' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = RNodeInterface
  enabled = yes
  port = ${vals.port}
  frequency = ${vals.freq}
  bandwidth = ${vals.bw}
  txpower = ${vals.txpower}
  spreadingfactor = ${vals.sf}
  codingrate = ${vals.cr}`
      },
      'kiss': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'Packet Radio' },
          { id: 'port', label: 'Serial Port', value: '/dev/ttyUSB1' },
          { id: 'speed', label: 'Baud Rate', value: '115200' },
          { id: 'preamble', label: 'Preamble (ms)', value: '150' },
          { id: 'txtail', label: 'TX Tail (ms)', value: '10' }
        ],
        generate: (vals) => `[[${vals.name}]]
  type = KISSInterface
  enabled = yes
  port = ${vals.port}
  speed = ${vals.speed}
  preamble = ${vals.preamble}
  txtail = ${vals.txtail}
  persistence = 200
  slottime = 20`
      }
    };

    function renderFields(type) {
      const template = configTemplates[type];
      if (!template) return;

      fieldsDiv.innerHTML = `
        <div class="calc-grid">
          ${template.fields.map(f => `
            <div class="calc-field">
              <label>${f.label}</label>
              ${f.type === 'select'
                ? `<select id="cfg_${f.id}">${f.options.map(o => `<option value="${o}" ${o === f.value ? 'selected' : ''}>${o}</option>`).join('')}</select>`
                : `<input type="text" id="cfg_${f.id}" value="${f.value}">`
              }
            </div>
          `).join('')}
        </div>
      `;
    }

    typeSelect.addEventListener('change', () => {
      renderFields(typeSelect.value);
      document.getElementById('configResult').innerHTML = '';
    });

    renderFields(typeSelect.value);

    document.getElementById('generateConfig').addEventListener('click', () => {
      const type = typeSelect.value;
      const template = configTemplates[type];
      if (!template) return;

      const vals = {};
      template.fields.forEach(f => {
        vals[f.id] = document.getElementById(`cfg_${f.id}`).value;
      });

      const config = template.generate(vals);

      document.getElementById('configResult').innerHTML = `
        <div class="calc-result" style="margin-top: 1rem;">
          <div class="result-label">Add to ~/.reticulum/config under [interfaces]:</div>
          <pre style="margin-top: 0.5rem; background: var(--bg-primary); padding: 1rem; border-radius: 4px; overflow-x: auto;"><code>${config}</code></pre>
        </div>
      `;
    });
  }

  // ==========================================================================
  // SEARCH
  // ==========================================================================

  function initSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');

    input.addEventListener('input', () => {
      const query = input.value.toLowerCase().trim();
      if (query.length < 2) {
        results.classList.remove('active');
        return;
      }

      const matches = state.searchIndex.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.text.includes(query)
      ).slice(0, 10);

      if (matches.length === 0) {
        results.classList.remove('active');
        return;
      }

      results.innerHTML = matches.map(match => `
        <div class="search-result" data-file="${match.file}" data-section="${match.id}">
          <div class="search-result-title">${match.title}</div>
          <div class="search-result-section">${state.data[match.file]?.title || match.file}</div>
        </div>
      `).join('');

      results.classList.add('active');

      results.querySelectorAll('.search-result').forEach(result => {
        result.addEventListener('click', () => {
          showSection(result.dataset.file, result.dataset.section);
          input.value = '';
          results.classList.remove('active');
        });
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) {
        results.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // MOBILE
  // ==========================================================================

  function initMobile() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
  }

  // ==========================================================================
  // SERVICE WORKER
  // ==========================================================================

  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => {
          console.log('Service Worker registered');

          // Listen for updates
          navigator.serviceWorker.addEventListener('message', event => {
            if (event.data.type === 'SW_UPDATED') {
              console.log('App updated, reloading...');
              window.location.reload();
            }
          });
        })
        .catch(err => console.log('SW registration failed:', err));
    }
  }

  // ==========================================================================
  // INIT
  // ==========================================================================

  function init() {
    initServiceWorker();
    initSearch();
    initMobile();
    loadData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
