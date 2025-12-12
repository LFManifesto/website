/**
 * Reticulum Field Reference
 * Version 2.0 - Complete Rewrite
 * Light Fighter Manifesto L.L.C.
 *
 * Beginner-friendly guide with accurate technical information
 * sourced from official Reticulum documentation.
 */

(function() {
  'use strict';

  // ==========================================================================
  // CONTENT DATA - All guide sections with accurate information
  // ==========================================================================

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 1</div>
          <h1 class="section-title">Getting Started</h1>
          <p class="section-description">What Reticulum is, why you need it, and your first steps.</p>
        </div>

        <div class="content-card">
          <h3>What is Reticulum?</h3>
          <p>Reticulum is a cryptography-based networking stack that enables secure, private communications over any medium. It works over WiFi, LoRa radio, packet radio, serial connections, and the internet - all at the same time.</p>

          <h4>Key Features</h4>
          <ul>
            <li><strong>Zero Configuration</strong> - Works out of the box with automatic peer discovery</li>
            <li><strong>End-to-End Encryption</strong> - All communications are encrypted by default</li>
            <li><strong>Works Anywhere</strong> - Runs on Raspberry Pi, laptops, phones, even microcontrollers</li>
            <li><strong>Low Bandwidth</strong> - Operates on links as slow as 5 bits per second</li>
            <li><strong>No Internet Required</strong> - Build mesh networks that work offline</li>
          </ul>
        </div>

        <div class="content-card">
          <h3>The Reticulum Ecosystem</h3>
          <p>Reticulum is the foundation. Several applications build on top of it:</p>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Application</th><th>Purpose</th><th>Interface</th></tr>
              </thead>
              <tbody>
                <tr><td><code>rnsd</code></td><td>Network daemon - keeps Reticulum running</td><td>Background service</td></tr>
                <tr><td><strong>NomadNet</strong></td><td>Messaging, pages, file sharing</td><td>Terminal (text UI)</td></tr>
                <tr><td><strong>Sideband</strong></td><td>Messaging, voice, maps, telemetry</td><td>Graphical (Android/Desktop)</td></tr>
                <tr><td><code>lxmd</code></td><td>Message propagation node</td><td>Background service</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>Quick Start (5 Minutes)</h3>
          <p>Get Reticulum running on your system:</p>

          <h4>Step 1: Install</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install rns</div>

          <div class="info-box warning">
            <div class="info-box-title">Note</div>
            <p>On newer Debian/Ubuntu systems, use <code>pipx install rns</code> instead. See the Installation section for details.</p>
          </div>

          <h4>Step 2: Start the Daemon</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>rnsd</div>
          <p>First run creates a default config at <code>~/.reticulum/config</code></p>

          <h4>Step 3: Check Status</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>rnstatus</div>
          <p>Shows your active interfaces and connected peers.</p>

          <h4>Step 4: Install an Application</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install nomadnet
nomadnet</div>
          <p>NomadNet gives you encrypted messaging and network browsing in your terminal.</p>
        </div>
      `
    },
    {
      id: 'installation',
      title: 'Installation',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 2</div>
          <h1 class="section-title">Installation</h1>
          <p class="section-description">Platform-specific installation instructions.</p>
        </div>

        <div class="content-card">
          <h3>Requirements</h3>
          <ul>
            <li>Python 3.7 or newer</li>
            <li>pip (Python package manager)</li>
            <li>No root access required - runs entirely in userspace</li>
          </ul>
        </div>

        <div class="content-card">
          <h3>Raspberry Pi (Recommended)</h3>
          <p>Use Raspberry Pi OS 64-bit for best performance.</p>

          <h4>Install Dependencies</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>sudo apt update
sudo apt install python3 python3-pip python3-dev build-essential</div>

          <h4>Install Reticulum</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install rns --break-system-packages</div>

          <h4>Install Applications</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install nomadnet --break-system-packages
pip install lxmf --break-system-packages</div>

          <div class="info-box">
            <div class="info-box-title">Why --break-system-packages?</div>
            <p>Debian 12+ restricts pip to prevent conflicts with system packages. This flag is safe for user-installed Python packages.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>Debian / Ubuntu (Modern)</h3>
          <p>For Debian 12 (Bookworm), Ubuntu 23.04+, and similar systems that use PEP 668.</p>

          <h4>Option A: Use pipx (Recommended)</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>sudo apt install pipx
pipx ensurepath
pipx install rns
pipx install nomadnet
pipx install lxmf</div>
          <p>Log out and back in for PATH changes to take effect.</p>

          <h4>Option B: Allow pip System-Wide</h4>
          <p>Edit <code>~/.config/pip/pip.conf</code>:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[global]
break-system-packages = true</div>
          <p>Then install normally with <code>pip install rns</code></p>
        </div>

        <div class="content-card">
          <h3>macOS</h3>
          <p>Requires Python 3.7+ (install from python.org or via Homebrew).</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip3 install rns</div>

          <p>If you get permission errors:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip3 install rns --break-system-packages</div>

          <p>Add to your PATH if commands not found:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>export PATH=$PATH:~/Library/Python/3.9/bin</div>
        </div>

        <div class="content-card">
          <h3>Windows</h3>

          <h4>Step 1: Install Python</h4>
          <p>Download Python 3.12+ from <strong>python.org</strong></p>
          <p><strong>Important:</strong> Check "Add Python to PATH" during installation!</p>

          <h4>Step 2: Open Command Prompt</h4>
          <p>Press Win+R, type <code>cmd</code>, press Enter</p>

          <h4>Step 3: Install Reticulum</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install rns</div>
        </div>

        <div class="content-card">
          <h3>Android (Termux)</h3>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pkg update && pkg upgrade
pkg install python python-cryptography
pip install rns nomadnet</div>

          <div class="info-box">
            <div class="info-box-title">Alternative</div>
            <p>For a graphical interface on Android, install <strong>Sideband</strong> from the releases page - no Termux required.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>Verify Installation</h3>
          <p>After installing, test that everything works:</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Start the daemon
rnsd

# In another terminal, check status
rnstatus</div>

          <p>You should see output showing your active interfaces. If <code>rnsd</code> is not found, reboot or add pip's bin directory to your PATH.</p>
        </div>
      `
    },
    {
      id: 'configuration',
      title: 'Configuration',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 3</div>
          <h1 class="section-title">Configuration</h1>
          <p class="section-description">Understanding config files and basic setup.</p>
        </div>

        <div class="content-card">
          <h3>Configuration Locations</h3>
          <p>Reticulum searches for config files in this order:</p>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Priority</th><th>Location</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><code>/etc/reticulum/</code></td><td>System-wide config</td></tr>
                <tr><td>2</td><td><code>~/.config/reticulum/</code></td><td>XDG standard location</td></tr>
                <tr><td>3</td><td><code>~/.reticulum/</code></td><td>Default (created automatically)</td></tr>
              </tbody>
            </table>
          </div>

          <p>First run creates <code>~/.reticulum/config</code> with sensible defaults and one active local interface.</p>
        </div>

        <div class="content-card">
          <h3>Config File Structure</h3>
          <p>The config file has two main sections:</p>

          <h4>[reticulum] - General Settings</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[reticulum]
  # Enable shared transport (allows routing through this node)
  enable_transport = no

  # Share your identity (for remote management)
  share_instance = yes

  # Shared instance port
  shared_instance_port = 37428

  # Interface mode (for all interfaces by default)
  # Options: full, gateway, boundary, access_point, roaming
  interface_mode = full</div>

          <h4>[interfaces] - Network Connections</h4>
          <p>Each interface connects Reticulum to a network. You can have many interfaces active at once.</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[interfaces]

# Local auto-discovery (finds other Reticulum nodes on LAN)
[[Default Interface]]
  type = AutoInterface
  enabled = yes

# Connect to a public transport node
[[RNS Testnet Amsterdam]]
  type = TCPClientInterface
  enabled = yes
  target_host = amsterdam.connect.reticulum.network
  target_port = 4965</div>
        </div>

        <div class="content-card">
          <h3>View Example Config</h3>
          <p>See a complete example configuration with all options documented:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>rnsd --exampleconfig</div>
        </div>

        <div class="content-card">
          <h3>Application Config Locations</h3>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Application</th><th>Config Directory</th></tr>
              </thead>
              <tbody>
                <tr><td>Reticulum</td><td><code>~/.reticulum/</code></td></tr>
                <tr><td>NomadNet</td><td><code>~/.nomadnetwork/</code></td></tr>
                <tr><td>Sideband</td><td><code>~/.sideband/</code></td></tr>
                <tr><td>LXMF (lxmd)</td><td><code>~/.lxmd/</code></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>Enable Transport</h3>
          <p>To allow your node to route traffic for other nodes (recommended for always-on servers):</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[reticulum]
  enable_transport = yes</div>

          <div class="info-box">
            <div class="info-box-title">When to Enable Transport</div>
            <p>Enable this on Raspberry Pi or server nodes that are always running. Leave disabled on mobile devices to save battery.</p>
          </div>
        </div>
      `
    },
    {
      id: 'interfaces',
      title: 'Interfaces',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 4</div>
          <h1 class="section-title">Interfaces</h1>
          <p class="section-description">Connect Reticulum to different networks and radios.</p>
        </div>

        <div class="content-card">
          <h3>Interface Types</h3>
          <p>Reticulum supports many interface types. Here are the most common:</p>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Interface</th><th>Use Case</th><th>Requirements</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>AutoInterface</strong></td><td>Local network discovery</td><td>LAN/WiFi</td></tr>
                <tr><td><strong>TCPClientInterface</strong></td><td>Connect to remote nodes</td><td>Internet</td></tr>
                <tr><td><strong>TCPServerInterface</strong></td><td>Accept incoming connections</td><td>Public IP or tunnel</td></tr>
                <tr><td><strong>UDPInterface</strong></td><td>Local broadcast</td><td>LAN</td></tr>
                <tr><td><strong>I2PInterface</strong></td><td>Anonymous connections</td><td>I2P router</td></tr>
                <tr><td><strong>RNodeInterface</strong></td><td>LoRa radio</td><td>RNode hardware</td></tr>
                <tr><td><strong>KISSInterface</strong></td><td>Packet radio TNC</td><td>TNC hardware</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>AutoInterface (LAN Discovery)</h3>
          <p>Automatically discovers other Reticulum nodes on your local network. Enabled by default.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[Default Interface]]
  type = AutoInterface
  enabled = yes</div>

          <h4>Advanced Options</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[Default Interface]]
  type = AutoInterface
  enabled = yes
  group_id = reticulum
  discovery_scope = link
  discovery_port = 29716
  data_port = 42671</div>

          <div class="info-box">
            <div class="info-box-title">Group ID</div>
            <p>Nodes with the same <code>group_id</code> will discover each other. Change this to create isolated networks.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>TCPClientInterface (Connect to Server)</h3>
          <p>Connect to a remote Reticulum node over the internet.</p>

          <h4>Connect to Public Testnet</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[RNS Testnet Amsterdam]]
  type = TCPClientInterface
  enabled = yes
  target_host = amsterdam.connect.reticulum.network
  target_port = 4965</div>

          <h4>Connect to a Specific Server</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[My Server]]
  type = TCPClientInterface
  enabled = yes
  target_host = 192.168.1.100
  target_port = 4242</div>
        </div>

        <div class="content-card">
          <h3>TCPServerInterface (Accept Connections)</h3>
          <p>Allow other nodes to connect to your server.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[TCP Server]]
  type = TCPServerInterface
  enabled = yes
  listen_ip = 0.0.0.0
  listen_port = 4242</div>

          <div class="info-box warning">
            <div class="info-box-title">Firewall</div>
            <p>Open port 4242 TCP in your firewall and router for external connections.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>I2PInterface (Anonymous)</h3>
          <p>Connect through the I2P anonymous network. Requires an I2P router (i2pd or Java I2P).</p>

          <h4>Basic Setup</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[I2P]]
  type = I2PInterface
  enabled = yes
  connectable = no</div>

          <h4>Accept Incoming (Run a Node)</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[I2P]]
  type = I2PInterface
  enabled = yes
  connectable = yes</div>

          <h4>Connect to Known Peers</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[I2P]]
  type = I2PInterface
  enabled = yes
  peers = 5urvjicpzi7q3ybztsef4i5ow2aq4soktfj7zedz53s47r54jnqq.b32.i2p</div>
        </div>

        <div class="content-card">
          <h3>RNodeInterface (LoRa Radio)</h3>
          <p>Connect via LoRa radio using RNode hardware. This enables long-range, off-grid communications.</p>

          <h4>Basic RNode Configuration</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[RNode LoRa]]
  type = RNodeInterface
  enabled = yes
  port = /dev/ttyUSB0
  frequency = 915000000
  bandwidth = 125000
  txpower = 17
  spreadingfactor = 8
  codingrate = 5</div>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Parameter</th><th>Description</th><th>Common Values</th></tr>
              </thead>
              <tbody>
                <tr><td><code>frequency</code></td><td>Center frequency (Hz)</td><td>915000000 (US), 868000000 (EU)</td></tr>
                <tr><td><code>bandwidth</code></td><td>Channel bandwidth (Hz)</td><td>125000, 250000, 500000</td></tr>
                <tr><td><code>txpower</code></td><td>Transmit power (dBm)</td><td>2-17 (check local regulations)</td></tr>
                <tr><td><code>spreadingfactor</code></td><td>LoRa SF (7-12)</td><td>8 balanced, 12 max range</td></tr>
                <tr><td><code>codingrate</code></td><td>Error correction (5-8)</td><td>5 fast, 8 robust</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>KISSInterface (Packet Radio)</h3>
          <p>Connect via any KISS-compatible TNC (Terminal Node Controller) for packet radio.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[Packet Radio]]
  type = KISSInterface
  enabled = yes
  port = /dev/ttyUSB1
  speed = 115200
  preamble = 150
  txtail = 10
  persistence = 200
  slottime = 20</div>
        </div>

        <div class="content-card">
          <h3>UDPInterface (LAN Broadcast)</h3>
          <p>Simple broadcast over local network. Useful for testing.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[[UDP Interface]]
  type = UDPInterface
  enabled = yes
  listen_ip = 0.0.0.0
  listen_port = 4242
  forward_ip = 255.255.255.255
  forward_port = 4242</div>
        </div>
      `
    },
    {
      id: 'nomadnet',
      title: 'NomadNet',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 5</div>
          <h1 class="section-title">NomadNet</h1>
          <p class="section-description">Terminal-based messaging and network browser.</p>
        </div>

        <div class="content-card">
          <h3>What is NomadNet?</h3>
          <p>NomadNet is a terminal application that provides encrypted messaging, node browsing, and file sharing over Reticulum. It works on any bandwidth - even 300 bps radio links.</p>

          <h4>Features</h4>
          <ul>
            <li>End-to-end encrypted messaging</li>
            <li>Distributed message store (messages wait for offline users)</li>
            <li>Browse pages hosted on other nodes</li>
            <li>Share files securely</li>
            <li>Works entirely offline with LoRa/packet radio</li>
          </ul>
        </div>

        <div class="content-card">
          <h3>Installation</h3>

          <h4>Standard Install</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install nomadnet</div>

          <h4>With pipx (Recommended)</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pipx install nomadnet</div>
        </div>

        <div class="content-card">
          <h3>Running NomadNet</h3>

          <h4>Interactive Mode</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>nomadnet</div>
          <p>Opens the full text interface with messaging, network browser, and settings.</p>

          <h4>Daemon Mode</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>nomadnet --daemon</div>
          <p>Runs in background without UI. Your node stays online and stores messages.</p>

          <h4>View Help</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>nomadnet --help</div>
        </div>

        <div class="content-card">
          <h3>First Run</h3>
          <p>On first launch, NomadNet creates <code>~/.nomadnetwork/</code> and generates your identity.</p>

          <h4>Navigation</h4>
          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Key</th><th>Action</th></tr>
              </thead>
              <tbody>
                <tr><td><code>Tab</code></td><td>Switch between sections</td></tr>
                <tr><td><code>Ctrl+U</code></td><td>Discover nodes (in Network section)</td></tr>
                <tr><td><code>Ctrl+G</code></td><td>Go to address</td></tr>
                <tr><td><code>Ctrl+C</code></td><td>Exit</td></tr>
                <tr><td><code>?</code></td><td>Help</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <h3>Test Nodes</h3>
          <p>After connecting to the testnet, try visiting these nodes:</p>

          <div class="table-wrapper">
            <table class="quick-ref-table">
              <thead>
                <tr><th>Node</th><th>Address Hash</th></tr>
              </thead>
              <tbody>
                <tr><td>Dublin Hub</td><td><code>abb3ebcd03cb2388a838e70c001291f9</code></td></tr>
                <tr><td>Frankfurt Hub</td><td><code>ea6a715f814bdc37e56f80c34da6ad51</code></td></tr>
              </tbody>
            </table>
          </div>
          <p>Use <code>Ctrl+G</code> and paste an address to visit.</p>
        </div>

        <div class="content-card">
          <h3>Configuration</h3>
          <p>Config file: <code>~/.nomadnetwork/config</code></p>

          <h4>Key Settings</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[node]
# Enable your node to host pages
enable_node = yes

# Node name shown to visitors
node_name = My Node

# Announce your node on the network
announce_at_start = yes</div>
        </div>

        <div class="content-card">
          <h3>Hosting Pages</h3>
          <p>NomadNet can host pages written in a simple markup language. Pages go in:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>~/.nomadnetwork/storage/pages/</div>

          <h4>Example Page (index.mu)</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>&gt;Welcome to My Node

This is a simple page hosted on Reticulum.

&gt;\`!Links:\`!
&gt;&gt;Dublin Hub|abb3ebcd03cb2388a838e70c001291f9</div>
        </div>
      `
    },
    {
      id: 'sideband',
      title: 'Sideband',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 6</div>
          <h1 class="section-title">Sideband</h1>
          <p class="section-description">Graphical messaging client for Android and desktop.</p>
        </div>

        <div class="content-card">
          <h3>What is Sideband?</h3>
          <p>Sideband is a graphical LXMF messaging client that runs on Android, Linux, macOS, and Windows. It provides encrypted messaging, voice calls, file sharing, and telemetry.</p>

          <h4>Features</h4>
          <ul>
            <li>End-to-end encrypted messaging</li>
            <li>Voice calls over LoRa</li>
            <li>Image and file transfers</li>
            <li>Location sharing with offline maps</li>
            <li>Telemetry and sensor data</li>
            <li>Works without Google services (Android)</li>
          </ul>
        </div>

        <div class="content-card">
          <h3>Installation</h3>

          <h4>Android</h4>
          <p>Download the APK from the Sideband releases page. No Google Play required.</p>
          <ul>
            <li>Download the <code>.apk</code> file</li>
            <li>Enable "Install from unknown sources" in Android settings</li>
            <li>Install the APK</li>
          </ul>

          <h4>Linux</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install sbapp</div>
          <p>Then run <code>sideband</code> from terminal.</p>

          <h4>macOS</h4>
          <p>Download the disk image from releases, or install via pip:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip3 install sbapp</div>

          <h4>Windows</h4>
          <p>Download the pre-built ZIP from releases, or use pip with Python 3.12:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install sbapp</div>
        </div>

        <div class="content-card">
          <h3>Configuration</h3>
          <p>Sideband stores its config in <code>~/.sideband/</code></p>
          <p>Reticulum interfaces are configured in <code>~/.reticulum/config</code> as usual.</p>

          <div class="info-box">
            <div class="info-box-title">Tip</div>
            <p>Sideband can run its own Reticulum instance or connect to an existing rnsd daemon.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>Connecting</h3>
          <p>By default, Sideband tries to connect to a local rnsd instance. To connect directly:</p>

          <ol>
            <li>Open Sideband settings</li>
            <li>Go to Connectivity</li>
            <li>Configure interfaces (TCP, LoRa, etc.)</li>
          </ol>

          <p>Or run rnsd separately and Sideband will automatically use it.</p>
        </div>
      `
    },
    {
      id: 'utilities',
      title: 'Utilities',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 7</div>
          <h1 class="section-title">Utilities</h1>
          <p class="section-description">Command-line tools included with Reticulum.</p>
        </div>

        <div class="content-card">
          <h3>rnsd - Network Daemon</h3>
          <p>Runs Reticulum as a persistent service. Required for other programs to use the network.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Start daemon
rnsd

# Start as service (logs to file)
rnsd -s

# Show example config
rnsd --exampleconfig</div>
        </div>

        <div class="content-card">
          <h3>rnstatus - View Status</h3>
          <p>Shows the status of all configured interfaces (like <code>ifconfig</code>).</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Show all interfaces
rnstatus

# Filter by interface name
rnstatus rnode

# JSON output (for scripts)
rnstatus -j</div>
        </div>

        <div class="content-card">
          <h3>rnpath - Path Discovery</h3>
          <p>Look up and display paths to destinations on the network.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Find path to a destination
rnpath &lt;destination_hash&gt;

# Show all known paths
rnpath -t</div>
        </div>

        <div class="content-card">
          <h3>rnprobe - Connectivity Test</h3>
          <p>Test connectivity to a destination (like <code>ping</code>). The destination must support probe replies.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Probe a destination
rnprobe &lt;destination_name&gt; &lt;destination_hash&gt;

# Probe with larger packet
rnprobe &lt;destination_hash&gt; -s 256</div>
        </div>

        <div class="content-card">
          <h3>rncp - File Transfer</h3>
          <p>Transfer files securely between Reticulum nodes.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Receive files (run on receiving machine)
rncp --listen

# Send a file
rncp file.tar.gz &lt;destination_hash&gt;

# Fetch a file from remote
rncp --fetch remote_file.txt &lt;destination_hash&gt;</div>
        </div>

        <div class="content-card">
          <h3>rnx - Remote Command</h3>
          <p>Execute commands on remote systems.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Listen for commands (on remote machine)
rnx --listen

# Execute a command
rnx &lt;destination_hash&gt; "ls -la"

# Interactive shell
rnx &lt;destination_hash&gt; -x</div>

          <div class="info-box warning">
            <div class="info-box-title">Security</div>
            <p>Only allow remote command execution from trusted identities. Configure allowed identities in rnx settings.</p>
          </div>
        </div>

        <div class="content-card">
          <h3>rnid - Identity Management</h3>
          <p>Generate and manage Reticulum identities, encrypt/decrypt files.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Generate new identity
rnid -g ./my_identity

# Show identity info
rnid -i ./my_identity -p

# Encrypt a file for a destination
rnid -i &lt;destination_hash&gt; -e file.txt

# Decrypt a file
rnid -i ./my_identity -d file.txt.rfe</div>
        </div>

        <div class="content-card">
          <h3>rnodeconf - RNode Configuration</h3>
          <p>Inspect and configure RNode LoRa hardware.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Show device info
rnodeconf -i

# Automatic setup
rnodeconf -a

# Update firmware
rnodeconf -u</div>
        </div>

        <div class="content-card">
          <h3>lxmd - LXMF Daemon</h3>
          <p>Run an LXMF message propagation node.</p>

          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Run as propagation node
lxmd --propagation-node

# Show example config
lxmd --exampleconfig

# Run with inbound message handler
lxmd --on-inbound /path/to/handler.sh</div>
        </div>
      `
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
      content: `
        <div class="section-header">
          <div class="section-number">Section 8</div>
          <h1 class="section-title">Troubleshooting</h1>
          <p class="section-description">Common issues and solutions.</p>
        </div>

        <div class="content-card">
          <h3>"Command not found" after pip install</h3>
          <p><strong>Cause:</strong> pip installs commands to a directory not in your PATH.</p>

          <h4>Solution 1: Reboot</h4>
          <p>Log out and back in, or reboot. Many systems update PATH on login.</p>

          <h4>Solution 2: Add to PATH</h4>
          <p>Add pip's bin directory to your PATH:</p>

          <p><strong>Linux/macOS:</strong></p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>export PATH=$PATH:~/.local/bin</div>
          <p>Add to <code>~/.bashrc</code> or <code>~/.zshrc</code> to make permanent.</p>
        </div>

        <div class="content-card">
          <h3>"externally-managed-environment" Error</h3>
          <p><strong>Cause:</strong> Newer Debian/Ubuntu systems block pip to protect system packages (PEP 668).</p>

          <h4>Solution 1: Use pipx</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>sudo apt install pipx
pipx ensurepath
pipx install rns</div>

          <h4>Solution 2: Use break-system-packages flag</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>pip install rns --break-system-packages</div>

          <h4>Solution 3: Configure pip globally</h4>
          <p>Create/edit <code>~/.config/pip/pip.conf</code>:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>[global]
break-system-packages = true</div>
        </div>

        <div class="content-card">
          <h3>No Interfaces Showing</h3>
          <p><strong>Cause:</strong> No interfaces enabled in config, or rnsd not running.</p>

          <h4>Check rnsd is running</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>ps aux | grep rnsd</div>

          <h4>Check config file</h4>
          <p>Ensure at least one interface has <code>enabled = yes</code> in <code>~/.reticulum/config</code></p>

          <h4>Reset config</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>mv ~/.reticulum/config ~/.reticulum/config.bak
rnsd</div>
          <p>This creates a fresh default config.</p>
        </div>

        <div class="content-card">
          <h3>Cannot Connect to Remote Nodes</h3>
          <p><strong>Cause:</strong> Firewall, wrong port, or network issues.</p>

          <h4>Check connectivity</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Test basic connection
nc -zv amsterdam.connect.reticulum.network 4965</div>

          <h4>Check firewall</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Allow outbound TCP on common ports
sudo ufw allow out 4965/tcp</div>
        </div>

        <div class="content-card">
          <h3>RNode Not Detected</h3>
          <p><strong>Cause:</strong> Wrong serial port, permissions, or device not in bootloader.</p>

          <h4>Find the correct port</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># List serial devices
ls /dev/tty*

# On Linux, usually /dev/ttyUSB0 or /dev/ttyACM0</div>

          <h4>Fix permissions</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button># Add user to dialout group
sudo usermod -a -G dialout $USER

# Log out and back in for changes to take effect</div>
        </div>

        <div class="content-card">
          <h3>Messages Not Delivered</h3>
          <p><strong>Cause:</strong> Recipient offline with no propagation node, or no route.</p>

          <h4>Check path exists</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>rnpath &lt;destination_hash&gt;</div>

          <h4>Enable propagation</h4>
          <p>Messages to offline users need a propagation node. Run lxmd on an always-on server:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>lxmd --propagation-node</div>
        </div>

        <div class="content-card">
          <h3>High Latency / Slow Performance</h3>
          <p><strong>Cause:</strong> Multi-hop routing, slow interfaces, or high network load.</p>

          <h4>Check interface speeds</h4>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>rnstatus</div>
          <p>Look at the bitrate of each interface.</p>

          <h4>Reduce LoRa spreading factor</h4>
          <p>Lower SF = faster but shorter range. In config:</p>
          <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>spreadingfactor = 7</div>
        </div>

        <div class="content-card">
          <h3>Getting Help</h3>
          <ul>
            <li><strong>Reticulum Manual:</strong> markqvist.github.io/Reticulum/manual/</li>
            <li><strong>GitHub Issues:</strong> github.com/markqvist/Reticulum/issues</li>
            <li><strong>Matrix:</strong> #reticulum:matrix.org</li>
          </ul>
        </div>
      `
    }
  ];

  // Tools/Calculators
  const tools = [
    {
      id: 'link-budget',
      title: 'Link Budget Calculator',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    {
      id: 'airtime',
      title: 'Airtime Calculator',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    },
    {
      id: 'config-gen',
      title: 'Config Generator',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    }
  ];

  // ==========================================================================
  // STATE
  // ==========================================================================

  const state = {
    currentSection: 'getting-started',
    fuse: null
  };

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  function init() {
    try {
      buildNavigation();
      initSearch();
      initMobile();
      initOfflineIndicator();
      showSection('getting-started');

      // Handle keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        }
      });
    } catch (error) {
      console.error('[App] Init error:', error);
      // Still try to show content even if search fails
      try {
        showSection('getting-started');
      } catch (e) {
        document.getElementById('contentArea').innerHTML = '<div style="padding: 2rem; color: red;">Error loading app: ' + error.message + '</div>';
      }
    }
  }

  // ==========================================================================
  // NAVIGATION
  // ==========================================================================

  function buildNavigation() {
    const sidebarNav = document.getElementById('sidebarNav');
    const sidebarTools = document.getElementById('sidebarTools');

    // Build section navigation
    sidebarNav.innerHTML = sections.map(section => `
      <li class="sidebar-nav-item">
        <a href="#${section.id}" class="sidebar-nav-link" data-section="${section.id}">
          ${section.icon}
          ${section.title}
        </a>
      </li>
    `).join('');

    // Build tools navigation
    sidebarTools.innerHTML = tools.map(tool => `
      <li class="sidebar-nav-item">
        <a href="#${tool.id}" class="sidebar-nav-link" data-tool="${tool.id}">
          ${tool.icon}
          ${tool.title}
        </a>
      </li>
    `).join('');

    // Add click handlers
    document.querySelectorAll('[data-section]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(link.dataset.section);
        closeSidebar();
      });
    });

    document.querySelectorAll('[data-tool]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showTool(link.dataset.tool);
        closeSidebar();
      });
    });
  }

  function showSection(sectionId) {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    state.currentSection = sectionId;
    updateActiveNav(sectionId);

    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = section.content;

    window.scrollTo(0, 0);
  }

  function updateActiveNav(activeId) {
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === activeId || link.dataset.tool === activeId) {
        link.classList.add('active');
      }
    });
  }

  // ==========================================================================
  // TOOLS / CALCULATORS
  // ==========================================================================

  function showTool(toolId) {
    updateActiveNav(toolId);
    const contentArea = document.getElementById('contentArea');

    switch (toolId) {
      case 'link-budget':
        contentArea.innerHTML = getLinkBudgetContent();
        initLinkBudgetCalc();
        break;
      case 'airtime':
        contentArea.innerHTML = getAirtimeContent();
        initAirtimeCalc();
        break;
      case 'config-gen':
        contentArea.innerHTML = getConfigGenContent();
        initConfigGen();
        break;
    }

    window.scrollTo(0, 0);
  }

  function getLinkBudgetContent() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">LoRa Link Budget Calculator</h1>
        <p class="section-description">Estimate signal strength and link margin for LoRa communications.</p>
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
              <option value="868">868 MHz (EU)</option>
              <option value="915" selected>915 MHz (US)</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Distance (km)</label>
            <input type="number" id="distance" value="5" min="0.1" step="0.1">
          </div>
          <div class="calc-field">
            <label>Spreading Factor</label>
            <select id="sf">
              <option value="7">SF7 (fastest)</option>
              <option value="8" selected>SF8</option>
              <option value="9">SF9</option>
              <option value="10">SF10</option>
              <option value="11">SF11</option>
              <option value="12">SF12 (longest range)</option>
            </select>
          </div>
          <div class="calc-field">
            <label>Bandwidth (kHz)</label>
            <select id="bw">
              <option value="125" selected>125 kHz</option>
              <option value="250">250 kHz</option>
              <option value="500">500 kHz</option>
            </select>
          </div>
        </div>
        <button class="calc-button" id="calcLinkBudget">Calculate</button>
        <div id="linkBudgetResult"></div>
      </div>

      <div class="content-card">
        <h3>Understanding Results</h3>
        <ul>
          <li><strong>EIRP:</strong> Effective radiated power (TX power + antenna gain)</li>
          <li><strong>Path Loss:</strong> Signal loss over distance (free-space, add 10-30 dB for obstacles)</li>
          <li><strong>Link Margin:</strong> Safety buffer above receiver sensitivity. >10 dB is reliable.</li>
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

      // Free-space path loss
      const fspl = 20 * Math.log10(distance) + 20 * Math.log10(freq) + 32.44;
      const eirp = txPower + txGain;
      const rxPower = eirp - fspl + rxGain;

      // Receiver sensitivity approximation
      const snrRequired = { 7: -7.5, 8: -10, 9: -12.5, 10: -15, 11: -17.5, 12: -20 };
      const sensitivity = -174 + 10 * Math.log10(bw * 1000) + 6 + snrRequired[sf];
      const margin = rxPower - sensitivity;

      let marginClass = margin > 20 ? 'var(--accent-green)' : margin > 10 ? 'var(--accent-yellow)' : 'var(--accent)';
      let marginText = margin > 20 ? 'Excellent - very reliable' : margin > 10 ? 'Good - reliable' : margin > 0 ? 'Marginal - may be unreliable' : 'No link possible';

      document.getElementById('linkBudgetResult').innerHTML = `
        <div class="calc-result">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
            <div>
              <div class="result-label">EIRP</div>
              <div class="result-value">${eirp.toFixed(1)} dBm</div>
            </div>
            <div>
              <div class="result-label">Path Loss</div>
              <div class="result-value">${fspl.toFixed(1)} dB</div>
            </div>
            <div>
              <div class="result-label">RX Power</div>
              <div class="result-value">${rxPower.toFixed(1)} dBm</div>
            </div>
            <div>
              <div class="result-label">Sensitivity</div>
              <div class="result-value">${sensitivity.toFixed(1)} dBm</div>
            </div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <div class="result-label">Link Margin</div>
            <div class="result-value" style="color: ${marginClass}">${margin.toFixed(1)} dB</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">${marginText}</div>
          </div>
        </div>
      `;
    });
  }

  function getAirtimeContent() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">LoRa Airtime Calculator</h1>
        <p class="section-description">Calculate time-on-air for LoRa packets.</p>
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
        </div>
        <button class="calc-button" id="calcAirtime">Calculate</button>
        <div id="airtimeResult"></div>
      </div>

      <div class="content-card">
        <h3>Reticulum Packet Sizes</h3>
        <div class="table-wrapper">
          <table class="quick-ref-table">
            <thead><tr><th>Packet Type</th><th>Typical Size</th></tr></thead>
            <tbody>
              <tr><td>Minimum packet</td><td>~35 bytes</td></tr>
              <tr><td>Announce</td><td>~150 bytes</td></tr>
              <tr><td>Link establishment</td><td>~297 bytes (3 packets)</td></tr>
              <tr><td>Maximum single packet</td><td>500 bytes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function initAirtimeCalc() {
    document.getElementById('calcAirtime').addEventListener('click', () => {
      const payload = parseInt(document.getElementById('payloadSize').value);
      const sf = parseInt(document.getElementById('airtimeSf').value);
      const bw = parseFloat(document.getElementById('airtimeBw').value) * 1000;
      const cr = parseInt(document.getElementById('airtimeCr').value);

      const symbolTime = Math.pow(2, sf) / bw;
      const preambleTime = 12.25 * symbolTime;
      const de = sf >= 11 ? 1 : 0;
      const payloadSymbols = 8 + Math.max(Math.ceil((8 * payload - 4 * sf + 28 + 16) / (4 * (sf - 2 * de))) * cr, 0);
      const payloadTime = payloadSymbols * symbolTime;
      const totalTime = preambleTime + payloadTime;
      const dataRate = (payload * 8) / totalTime;

      document.getElementById('airtimeResult').innerHTML = `
        <div class="calc-result">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
            <div>
              <div class="result-label">Symbol Time</div>
              <div class="result-value">${(symbolTime * 1000).toFixed(2)} ms</div>
            </div>
            <div>
              <div class="result-label">Payload Symbols</div>
              <div class="result-value">${payloadSymbols}</div>
            </div>
            <div>
              <div class="result-label">Total Airtime</div>
              <div class="result-value">${(totalTime * 1000).toFixed(1)} ms</div>
            </div>
            <div>
              <div class="result-label">Data Rate</div>
              <div class="result-value">${dataRate > 1000 ? (dataRate / 1000).toFixed(2) + ' kbps' : dataRate.toFixed(0) + ' bps'}</div>
            </div>
          </div>
        </div>
      `;
    });
  }

  function getConfigGenContent() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">Config Generator</h1>
        <p class="section-description">Generate interface configurations for common scenarios.</p>
      </div>

      <div class="calculator">
        <h3>Interface Type</h3>
        <div class="calc-field" style="max-width: 300px;">
          <select id="interfaceType">
            <option value="tcp-client">TCP Client (connect to server)</option>
            <option value="tcp-server">TCP Server (accept connections)</option>
            <option value="auto">Auto Interface (LAN discovery)</option>
            <option value="i2p">I2P Interface (anonymous)</option>
            <option value="rnode">RNode LoRa</option>
          </select>
        </div>
        <div id="configFields" style="margin-top: 1rem;"></div>
        <button class="calc-button" id="generateConfig" style="margin-top: 1rem;">Generate</button>
        <div id="configResult"></div>
      </div>
    `;
  }

  function initConfigGen() {
    const templates = {
      'tcp-client': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'Remote Server' },
          { id: 'host', label: 'Target Host', value: 'amsterdam.connect.reticulum.network' },
          { id: 'port', label: 'Target Port', value: '4965' }
        ],
        generate: (v) => `[[${v.name}]]
  type = TCPClientInterface
  enabled = yes
  target_host = ${v.host}
  target_port = ${v.port}`
      },
      'tcp-server': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'TCP Server' },
          { id: 'ip', label: 'Listen IP', value: '0.0.0.0' },
          { id: 'port', label: 'Listen Port', value: '4242' }
        ],
        generate: (v) => `[[${v.name}]]
  type = TCPServerInterface
  enabled = yes
  listen_ip = ${v.ip}
  listen_port = ${v.port}`
      },
      'auto': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'Default Interface' },
          { id: 'group', label: 'Group ID', value: 'reticulum' }
        ],
        generate: (v) => `[[${v.name}]]
  type = AutoInterface
  enabled = yes
  group_id = ${v.group}`
      },
      'i2p': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'I2P' },
          { id: 'connectable', label: 'Accept Incoming', type: 'select', options: ['yes', 'no'], value: 'no' }
        ],
        generate: (v) => `[[${v.name}]]
  type = I2PInterface
  enabled = yes
  connectable = ${v.connectable}`
      },
      'rnode': {
        fields: [
          { id: 'name', label: 'Interface Name', value: 'RNode LoRa' },
          { id: 'port', label: 'Serial Port', value: '/dev/ttyUSB0' },
          { id: 'freq', label: 'Frequency (Hz)', value: '915000000' },
          { id: 'bw', label: 'Bandwidth (Hz)', value: '125000' },
          { id: 'txpower', label: 'TX Power (dBm)', value: '17' },
          { id: 'sf', label: 'Spreading Factor', value: '8' }
        ],
        generate: (v) => `[[${v.name}]]
  type = RNodeInterface
  enabled = yes
  port = ${v.port}
  frequency = ${v.freq}
  bandwidth = ${v.bw}
  txpower = ${v.txpower}
  spreadingfactor = ${v.sf}
  codingrate = 5`
      }
    };

    const typeSelect = document.getElementById('interfaceType');
    const fieldsDiv = document.getElementById('configFields');

    function renderFields(type) {
      const template = templates[type];
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
      const template = templates[type];
      if (!template) return;

      const vals = {};
      template.fields.forEach(f => {
        vals[f.id] = document.getElementById(`cfg_${f.id}`).value;
      });

      const config = template.generate(vals);

      document.getElementById('configResult').innerHTML = `
        <div class="calc-result" style="margin-top: 1rem;">
          <div class="result-label">Add to ~/.reticulum/config under [interfaces]:</div>
          <div class="code-block" style="margin-top: 0.5rem;"><button class="copy-btn" onclick="copyCode(this)">Copy</button>${config}</div>
        </div>
      `;
    });
  }

  // ==========================================================================
  // SEARCH
  // ==========================================================================

  function initSearch() {
    // Build search index - only if Fuse is available
    if (typeof Fuse === 'undefined') {
      console.warn('[App] Fuse.js not loaded, search disabled');
      return;
    }

    const searchData = sections.map(s => ({
      id: s.id,
      title: s.title,
      content: s.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')
    }));

    state.fuse = new Fuse(searchData, {
      keys: ['title', 'content'],
      threshold: 0.3,
      includeMatches: true
    });

    // Desktop search
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      const results = state.fuse.search(query).slice(0, 8);
      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
      } else {
        searchResults.innerHTML = results.map(r => `
          <div class="search-result-item" data-section="${r.item.id}">
            <div class="search-result-title">${r.item.title}</div>
            <div class="search-result-section">Guide</div>
          </div>
        `).join('');
      }

      searchResults.classList.add('active');

      searchResults.querySelectorAll('.search-result-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
          showSection(item.dataset.section);
          searchInput.value = '';
          searchResults.classList.remove('active');
        });
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
      }
    });

    // Mobile search
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    const mobileSearchClose = document.getElementById('mobileSearchClose');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchResults = document.getElementById('mobileSearchResults');

    mobileSearchBtn.addEventListener('click', () => {
      mobileSearchOverlay.classList.add('visible');
      mobileSearchInput.focus();
    });

    mobileSearchClose.addEventListener('click', () => {
      mobileSearchOverlay.classList.remove('visible');
      mobileSearchInput.value = '';
      mobileSearchResults.innerHTML = '';
    });

    mobileSearchInput.addEventListener('input', () => {
      const query = mobileSearchInput.value.trim();
      if (query.length < 2) {
        mobileSearchResults.innerHTML = '';
        return;
      }

      const results = state.fuse.search(query).slice(0, 10);
      if (results.length === 0) {
        mobileSearchResults.innerHTML = '<div class="search-result-item">No results found</div>';
      } else {
        mobileSearchResults.innerHTML = results.map(r => `
          <div class="search-result-item" data-section="${r.item.id}">
            <div class="search-result-title">${r.item.title}</div>
            <div class="search-result-section">Guide</div>
          </div>
        `).join('');
      }

      mobileSearchResults.querySelectorAll('.search-result-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
          showSection(item.dataset.section);
          mobileSearchOverlay.classList.remove('visible');
          mobileSearchInput.value = '';
          mobileSearchResults.innerHTML = '';
        });
      });
    });
  }

  // ==========================================================================
  // MOBILE
  // ==========================================================================

  function initMobile() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });

    overlay.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('visible');
  }

  // ==========================================================================
  // OFFLINE INDICATOR
  // ==========================================================================

  function initOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');

    function updateStatus() {
      if (!navigator.onLine) {
        indicator.classList.add('visible');
      } else {
        indicator.classList.remove('visible');
      }
    }

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
  }

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================

  // Global copy function for code blocks
  window.copyCode = function(btn) {
    const codeBlock = btn.parentElement;
    const code = codeBlock.textContent.replace('Copy', '').trim();

    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  };

  // ==========================================================================
  // START
  // ==========================================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
