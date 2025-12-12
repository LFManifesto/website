/**
 * Reticulum Field Reference
 * Version 3.0 - Dec 12, 2025
 * Added: NomadNet Pages, GitHub Repos, Navigation buttons
 * Updated: All transport nodes verified from live rnstatus
 */

(function() {
  'use strict';

  // ==========================================================================
  // State
  // ==========================================================================

  const state = {
    sections: [],
    tools: [],
    searchIndex: null,
    currentSection: null,
    isOffline: !navigator.onLine
  };

  // ==========================================================================
  // Data - All sections embedded
  // ==========================================================================

  const sectionData = [
    {
      id: 'getting-started',
      number: '1',
      title: 'Getting Started',
      icon: 'clock',
      description: 'What Reticulum is, why you need it, and your first steps.',
      content: [
        { type: 'heading', level: 3, text: 'What is Reticulum?' },
        { type: 'paragraph', text: 'Reticulum is a cryptography-based networking stack that enables secure, private communications over any medium. It works over WiFi, LoRa radio, packet radio, serial connections, and the internet - all at the same time.' },
        { type: 'heading', level: 4, text: 'Key Features' },
        { type: 'list', items: [
          '<strong>Zero Configuration</strong> - Works out of the box with automatic peer discovery',
          '<strong>End-to-End Encryption</strong> - All communications are encrypted by default',
          '<strong>Works Anywhere</strong> - Runs on Raspberry Pi, laptops, phones, even microcontrollers',
          '<strong>Low Bandwidth</strong> - Operates on links as slow as 5 bits per second',
          '<strong>No Internet Required</strong> - Build mesh networks that work offline'
        ]},
        { type: 'heading', level: 3, text: 'The Reticulum Ecosystem' },
        { type: 'table', headers: ['Application', 'Purpose', 'Interface'], rows: [
          ['<code>rnsd</code>', 'Network daemon - keeps Reticulum running', 'Background service'],
          ['<strong>NomadNet</strong>', 'Messaging, pages, file sharing', 'Terminal (text UI)'],
          ['<strong>Sideband</strong>', 'Messaging, voice, maps, telemetry', 'Graphical (Android/Desktop)'],
          ['<code>lxmd</code>', 'Message propagation node', 'Background service']
        ]},
        { type: 'heading', level: 3, text: 'Quick Start (5 Minutes)' },
        { type: 'paragraph', text: 'Get Reticulum running on your system:' },
        { type: 'heading', level: 4, text: 'Step 1: Install' },
        { type: 'code', text: 'pip install rns' },
        { type: 'info', title: 'Note', text: 'On newer Debian/Ubuntu systems, use <code>pipx install rns</code> instead. See the Installation section for details.' },
        { type: 'heading', level: 4, text: 'Step 2: Start the Daemon' },
        { type: 'code', text: 'rnsd' },
        { type: 'paragraph', text: 'First run creates a default config at <code>~/.reticulum/config</code>' },
        { type: 'heading', level: 4, text: 'Step 3: Check Status' },
        { type: 'code', text: 'rnstatus' },
        { type: 'paragraph', text: 'Shows your active interfaces and connected peers.' },
        { type: 'heading', level: 4, text: 'Step 4: Install an Application' },
        { type: 'code', text: 'pip install nomadnet\nnomadnet' },
        { type: 'paragraph', text: 'NomadNet gives you encrypted messaging and network browsing in your terminal.' }
      ]
    },
    {
      id: 'installation',
      number: '2',
      title: 'Installation',
      icon: 'download',
      description: 'Platform-specific installation instructions.',
      content: [
        { type: 'heading', level: 3, text: 'Requirements' },
        { type: 'list', items: [
          'Python 3.7 or newer',
          'pip (Python package manager)',
          'No root access required - runs entirely in userspace'
        ]},
        { type: 'heading', level: 3, text: 'Raspberry Pi (Recommended)' },
        { type: 'paragraph', text: 'Use Raspberry Pi OS 64-bit for best performance.' },
        { type: 'heading', level: 4, text: 'Install Dependencies' },
        { type: 'code', text: 'sudo apt update\nsudo apt install python3 python3-pip python3-dev build-essential' },
        { type: 'heading', level: 4, text: 'Install Reticulum' },
        { type: 'code', text: 'pip install rns --break-system-packages' },
        { type: 'heading', level: 4, text: 'Install Applications' },
        { type: 'code', text: 'pip install nomadnet --break-system-packages\npip install lxmf --break-system-packages' },
        { type: 'info', title: 'Why --break-system-packages?', text: 'Debian 12+ restricts pip to prevent conflicts with system packages. This flag is safe for user-installed Python packages.' },
        { type: 'heading', level: 3, text: 'Debian / Ubuntu (Modern)' },
        { type: 'paragraph', text: 'For Debian 12 (Bookworm), Ubuntu 23.04+, and similar systems that use PEP 668.' },
        { type: 'heading', level: 4, text: 'Option A: Use pipx (Recommended)' },
        { type: 'code', text: 'sudo apt install pipx\npipx ensurepath\npipx install rns\npipx install nomadnet\npipx install lxmf' },
        { type: 'paragraph', text: 'Log out and back in for PATH changes to take effect.' },
        { type: 'heading', level: 4, text: 'Option B: Allow pip System-Wide' },
        { type: 'paragraph', text: 'Edit <code>~/.config/pip/pip.conf</code>:' },
        { type: 'code', text: '[global]\nbreak-system-packages = true' },
        { type: 'paragraph', text: 'Then install normally with <code>pip install rns</code>' },
        { type: 'heading', level: 3, text: 'macOS' },
        { type: 'paragraph', text: 'Requires Python 3.7+ (install from python.org or via Homebrew).' },
        { type: 'code', text: 'pip3 install rns' },
        { type: 'paragraph', text: 'If you get permission errors:' },
        { type: 'code', text: 'pip3 install rns --break-system-packages' },
        { type: 'paragraph', text: 'Add to your PATH if commands not found:' },
        { type: 'code', text: 'export PATH=$PATH:~/Library/Python/3.9/bin' },
        { type: 'heading', level: 3, text: 'Windows' },
        { type: 'heading', level: 4, text: 'Step 1: Install Python' },
        { type: 'paragraph', text: 'Download Python 3.12+ from <strong>python.org</strong>' },
        { type: 'paragraph', text: '<strong>Important:</strong> Check "Add Python to PATH" during installation!' },
        { type: 'heading', level: 4, text: 'Step 2: Open Command Prompt' },
        { type: 'paragraph', text: 'Press Win+R, type <code>cmd</code>, press Enter' },
        { type: 'heading', level: 4, text: 'Step 3: Install Reticulum' },
        { type: 'code', text: 'pip install rns' },
        { type: 'heading', level: 3, text: 'Android (Termux)' },
        { type: 'code', text: 'pkg update && pkg upgrade\npkg install python python-cryptography\npip install rns nomadnet' },
        { type: 'info', title: 'Alternative', text: 'For a graphical interface on Android, install <strong>Sideband</strong> from the releases page - no Termux required.' },
        { type: 'heading', level: 3, text: 'Verify Installation' },
        { type: 'paragraph', text: 'After installing, test that everything works:' },
        { type: 'code', text: '# Start the daemon\nrnsd\n\n# In another terminal, check status\nrnstatus' },
        { type: 'paragraph', text: 'You should see output showing your active interfaces. If <code>rnsd</code> is not found, reboot or add pip\'s bin directory to your PATH.' }
      ]
    },
    {
      id: 'configuration',
      number: '3',
      title: 'Configuration',
      icon: 'settings',
      description: 'Understanding config files and basic setup.',
      content: [
        { type: 'heading', level: 3, text: 'Configuration Locations' },
        { type: 'paragraph', text: 'Reticulum searches for config files in this order:' },
        { type: 'table', headers: ['Priority', 'Location', 'Notes'], rows: [
          ['1', '<code>/etc/reticulum/</code>', 'System-wide config'],
          ['2', '<code>~/.config/reticulum/</code>', 'XDG standard location'],
          ['3', '<code>~/.reticulum/</code>', 'Default (created automatically)']
        ]},
        { type: 'paragraph', text: 'First run creates <code>~/.reticulum/config</code> with sensible defaults and one active local interface.' },
        { type: 'heading', level: 3, text: 'Config File Structure' },
        { type: 'paragraph', text: 'The config file has two main sections:' },
        { type: 'heading', level: 4, text: '[reticulum] - General Settings' },
        { type: 'code', text: '[reticulum]\n  # Enable shared transport (allows routing through this node)\n  enable_transport = no\n\n  # Share your identity (for remote management)\n  share_instance = yes\n\n  # Shared instance port\n  shared_instance_port = 37428\n\n  # Interface mode (for all interfaces by default)\n  # Options: full, gateway, boundary, access_point, roaming\n  interface_mode = full' },
        { type: 'heading', level: 4, text: '[interfaces] - Network Connections' },
        { type: 'paragraph', text: 'Each interface connects Reticulum to a network. You can have many interfaces active at once.' },
        { type: 'code', text: '[interfaces]\n\n# Local auto-discovery (finds other Reticulum nodes on LAN)\n[[Default Interface]]\n  type = AutoInterface\n  enabled = yes\n\n# Connect to a public transport node\n[[RNS Testnet Amsterdam]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = amsterdam.connect.reticulum.network\n  target_port = 4965' },
        { type: 'heading', level: 3, text: 'View Example Config' },
        { type: 'paragraph', text: 'See a complete example configuration with all options documented:' },
        { type: 'code', text: 'rnsd --exampleconfig' },
        { type: 'heading', level: 3, text: 'Application Config Locations' },
        { type: 'table', headers: ['Application', 'Config Directory'], rows: [
          ['Reticulum', '<code>~/.reticulum/</code>'],
          ['NomadNet', '<code>~/.nomadnetwork/</code>'],
          ['Sideband', '<code>~/.sideband/</code>'],
          ['LXMF (lxmd)', '<code>~/.lxmd/</code>']
        ]},
        { type: 'heading', level: 3, text: 'Enable Transport' },
        { type: 'paragraph', text: 'To allow your node to route traffic for other nodes (recommended for always-on servers):' },
        { type: 'code', text: '[reticulum]\n  enable_transport = yes' },
        { type: 'info', title: 'When to Enable Transport', text: 'Enable this on Raspberry Pi or server nodes that are always running. Leave disabled on mobile devices to save battery.' }
      ]
    },
    {
      id: 'interfaces',
      number: '4',
      title: 'Interfaces',
      icon: 'monitor',
      description: 'Connect Reticulum to different networks and radios.',
      content: [
        { type: 'heading', level: 3, text: 'Interface Types' },
        { type: 'paragraph', text: 'Reticulum supports many interface types. Here are the most common:' },
        { type: 'table', headers: ['Interface', 'Use Case', 'Requirements'], rows: [
          ['<strong>AutoInterface</strong>', 'Local network discovery', 'LAN/WiFi'],
          ['<strong>TCPClientInterface</strong>', 'Connect to remote nodes', 'Internet'],
          ['<strong>TCPServerInterface</strong>', 'Accept incoming connections', 'Public IP or tunnel'],
          ['<strong>UDPInterface</strong>', 'Local broadcast', 'LAN'],
          ['<strong>I2PInterface</strong>', 'Anonymous connections', 'I2P router'],
          ['<strong>RNodeInterface</strong>', 'LoRa radio', 'RNode hardware'],
          ['<strong>KISSInterface</strong>', 'Packet radio TNC', 'TNC hardware']
        ]},
        { type: 'heading', level: 3, text: 'AutoInterface (LAN Discovery)' },
        { type: 'paragraph', text: 'Automatically discovers other Reticulum nodes on your local network. Enabled by default.' },
        { type: 'code', text: '[[Default Interface]]\n  type = AutoInterface\n  enabled = yes' },
        { type: 'heading', level: 4, text: 'Advanced Options' },
        { type: 'code', text: '[[Default Interface]]\n  type = AutoInterface\n  enabled = yes\n  group_id = reticulum\n  discovery_scope = link\n  discovery_port = 29716\n  data_port = 42671' },
        { type: 'info', title: 'Group ID', text: 'Nodes with the same <code>group_id</code> will discover each other. Change this to create isolated networks.' },
        { type: 'heading', level: 3, text: 'TCPClientInterface (Connect to Server)' },
        { type: 'paragraph', text: 'Connect to a remote Reticulum node over the internet.' },
        { type: 'heading', level: 4, text: 'Connect to Public Testnet' },
        { type: 'code', text: '[[RNS Testnet Amsterdam]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = amsterdam.connect.reticulum.network\n  target_port = 4965' },
        { type: 'heading', level: 4, text: 'Connect to a Specific Server' },
        { type: 'code', text: '[[My Server]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = 192.168.1.100\n  target_port = 4242' },
        { type: 'heading', level: 3, text: 'TCPServerInterface (Accept Connections)' },
        { type: 'paragraph', text: 'Allow other nodes to connect to your server.' },
        { type: 'code', text: '[[TCP Server]]\n  type = TCPServerInterface\n  enabled = yes\n  listen_ip = 0.0.0.0\n  listen_port = 4242' },
        { type: 'info', title: 'Firewall', text: 'Open port 4242 TCP in your firewall and router for external connections.', warning: true },
        { type: 'heading', level: 3, text: 'I2PInterface (Anonymous)' },
        { type: 'paragraph', text: 'Connect through the I2P anonymous network. Requires an I2P router (i2pd or Java I2P).' },
        { type: 'heading', level: 4, text: 'Basic Setup' },
        { type: 'code', text: '[[I2P]]\n  type = I2PInterface\n  enabled = yes\n  connectable = no' },
        { type: 'heading', level: 4, text: 'Accept Incoming (Run a Node)' },
        { type: 'code', text: '[[I2P]]\n  type = I2PInterface\n  enabled = yes\n  connectable = yes' },
        { type: 'heading', level: 3, text: 'RNodeInterface (LoRa Radio)' },
        { type: 'paragraph', text: 'Connect via LoRa radio using RNode hardware. This enables long-range, off-grid communications.' },
        { type: 'heading', level: 4, text: 'Basic RNode Configuration' },
        { type: 'code', text: '[[RNode LoRa]]\n  type = RNodeInterface\n  enabled = yes\n  port = /dev/ttyUSB0\n  frequency = 915000000\n  bandwidth = 125000\n  txpower = 17\n  spreadingfactor = 8\n  codingrate = 5' },
        { type: 'table', headers: ['Parameter', 'Description', 'Common Values'], rows: [
          ['<code>frequency</code>', 'Center frequency (Hz)', '915000000 (US), 868000000 (EU)'],
          ['<code>bandwidth</code>', 'Channel bandwidth (Hz)', '125000, 250000, 500000'],
          ['<code>txpower</code>', 'Transmit power (dBm)', '2-17 (check local regulations)'],
          ['<code>spreadingfactor</code>', 'LoRa SF (7-12)', '8 balanced, 12 max range'],
          ['<code>codingrate</code>', 'Error correction (5-8)', '5 fast, 8 robust']
        ]}
      ]
    },
    {
      id: 'nomadnet',
      number: '5',
      title: 'NomadNet',
      icon: 'message',
      description: 'Terminal-based messaging and network browser.',
      content: [
        { type: 'heading', level: 3, text: 'What is NomadNet?' },
        { type: 'paragraph', text: 'NomadNet is a terminal application that provides encrypted messaging, node browsing, and file sharing over Reticulum. It works on any bandwidth - even 300 bps radio links.' },
        { type: 'heading', level: 4, text: 'Features' },
        { type: 'list', items: [
          'End-to-end encrypted messaging',
          'Distributed message store (messages wait for offline users)',
          'Browse pages hosted on other nodes',
          'Share files securely',
          'Works entirely offline with LoRa/packet radio'
        ]},
        { type: 'heading', level: 3, text: 'Installation' },
        { type: 'heading', level: 4, text: 'Standard Install' },
        { type: 'code', text: 'pip install nomadnet' },
        { type: 'heading', level: 4, text: 'With pipx (Recommended)' },
        { type: 'code', text: 'pipx install nomadnet' },
        { type: 'heading', level: 3, text: 'Running NomadNet' },
        { type: 'heading', level: 4, text: 'Interactive Mode' },
        { type: 'code', text: 'nomadnet' },
        { type: 'paragraph', text: 'Opens the full text interface with messaging, network browser, and settings.' },
        { type: 'heading', level: 4, text: 'Daemon Mode' },
        { type: 'code', text: 'nomadnet --daemon' },
        { type: 'paragraph', text: 'Runs in background without UI. Your node stays online and stores messages.' },
        { type: 'heading', level: 3, text: 'Navigation' },
        { type: 'table', headers: ['Key', 'Action'], rows: [
          ['<code>Tab</code>', 'Switch between sections'],
          ['<code>Ctrl+U</code>', 'Discover nodes (in Network section)'],
          ['<code>Ctrl+G</code>', 'Go to address'],
          ['<code>Ctrl+C</code>', 'Exit'],
          ['<code>?</code>', 'Help']
        ]},
        { type: 'heading', level: 3, text: 'Test Nodes' },
        { type: 'paragraph', text: 'After connecting to the testnet, try visiting these nodes:' },
        { type: 'table', headers: ['Node', 'Address Hash'], rows: [
          ['Dublin Hub', '<code>abb3ebcd03cb2388a838e70c001291f9</code>'],
          ['Frankfurt Hub', '<code>ea6a715f814bdc37e56f80c34da6ad51</code>'],
          ['Light Fighter Manifesto', '<code>2eabad04f9145d32a6a3eda285d66c39</code>']
        ]},
        { type: 'paragraph', text: 'Use <code>Ctrl+G</code> and paste an address to visit.' }
      ]
    },
    {
      id: 'nomadnet-pages',
      number: '6',
      title: 'NomadNet Pages',
      icon: 'file',
      description: 'Build dynamic pages for your NomadNet node.',
      content: [
        { type: 'heading', level: 3, text: 'What are NomadNet Pages?' },
        { type: 'paragraph', text: 'NomadNet pages are micron-formatted (.mu) files that create browsable content on your node. Pages can be static text or dynamic Python scripts that pull live data from APIs, run shell commands, or interact with users.' },
        { type: 'heading', level: 4, text: 'Page Locations' },
        { type: 'table', headers: ['Type', 'Directory'], rows: [
          ['Pages', '<code>~/.nomadnetwork/storage/pages/</code>'],
          ['Files (downloads)', '<code>~/.nomadnetwork/storage/files/</code>']
        ]},
        { type: 'heading', level: 3, text: 'Micron Markup Basics' },
        { type: 'paragraph', text: 'Micron is a lightweight markup language for NomadNet. Here are the essential formatting codes:' },
        { type: 'table', headers: ['Code', 'Effect'], rows: [
          ['<code>`!</code>', 'Bold text'],
          ['<code>`*</code>', 'Italic text'],
          ['<code>`_</code>', 'Underline'],
          ['<code>`c</code> / <code>`a</code>', 'Center / End center'],
          ['<code>`Frrggbb</code>', 'Foreground color (hex RGB)'],
          ['<code>`Brrggbb</code>', 'Background color'],
          ['<code>`f</code> / <code>`b</code>', 'Reset foreground / background'],
          ['<code>`[Text`:/page/file.mu]</code>', 'Link to another page'],
          ['<code>-=</code>', 'Horizontal divider'],
          ['<code>>Heading</code>', 'Section heading'],
          ['<code>`=</code>', 'Preformatted block (start/end)']
        ]},
        { type: 'heading', level: 3, text: 'Static Page Example' },
        { type: 'paragraph', text: 'A basic static page (save as <code>index.mu</code>):' },
        { type: 'code', text: '`c`!Welcome to My Node`!`a\n\n-=\n\n>About\n\n  This is a Reticulum node running NomadNet.\n  We share resources and stay connected off-grid.\n\n-=\n\n>Links\n\n  `Ff00`[Articles`:/page/articles.mu]`f\n  `Ff00`[Tools`:/page/tools.mu]`f\n  `Ff00`[Contact`:/page/contact.mu]`f' },
        { type: 'heading', level: 3, text: 'Dynamic Page Example' },
        { type: 'paragraph', text: 'Dynamic pages use Python to generate content. Add the shebang and print formatted output:' },
        { type: 'code', text: '#!/usr/bin/env python3\nprint("#!c=60")  # Refresh every 60 seconds\n\nfrom datetime import datetime\nimport subprocess\n\nprint("`c`!NODE STATUS`!`a")\nprint("")\nprint(f"Updated: {datetime.utcnow().strftime(\'%Y-%m-%d %H:%M UTC\')}")\nprint("")\nprint("-=")\n\n# Get system uptime\ntry:\n    result = subprocess.run(["uptime", "-p"], capture_output=True, text=True)\n    print(f"Uptime: `!{result.stdout.strip()}`!")\nexcept:\n    print("Uptime: Unknown")\n\nprint("")\nprint("`Ff00`[Back to Home`:/page/index.mu]`f")' },
        { type: 'info', title: 'Cache Control', text: 'The <code>#!c=60</code> directive tells NomadNet to cache the page for 60 seconds. Use <code>#!c=0</code> for no caching (always regenerate).' },
        { type: 'heading', level: 3, text: 'Light Fighter Manifesto Pages' },
        { type: 'paragraph', text: 'The LFM node runs several dynamic pages. Here are examples from our production setup:' },
        { type: 'heading', level: 4, text: 'Index Page (Home)' },
        { type: 'paragraph', text: 'The main landing page with navigation links:' },
        { type: 'code', text: '`c`Ff00`!LIGHT FIGHTER MANIFESTO`!`f`a\n`cVeteran-Owned Publication`a\n`c`F777Unfiltered. Uncensored. Unconventional.`f`a\n\n-=\n\n`c`Ff00`!`[ARTICLES`:/page/lfm_articles.mu]`!`f    `Ff00`!`[PROJECTS`:/page/projects.mu]`!`f    `Ff00`!`[RESOURCES`:/page/resources.mu]`!`f    `Ff00`!`[SHOP`:/page/shop.mu]`!`f`a\n\n-=\n\n>Mesh Network\n\n  `Ff00`!`[QUICK CHAT`:/page/chat.mu]`!`f\n  Real-time messaging bridged to Matrix #Nomadnet room.\n\n  `Ff00`[Node Status`:/page/node_stats.mu]`f\n  Live statistics for this propagation node.\n\n  `F777LXMF Direct:`f `F0f0lxmf@7a58372d270d58f6148946705a7ca665`f\n\n-=\n\n>Field Tools\n\n  `Ff00`!`[HF PROPAGATION`:/page/hfprop.mu]`!`f\n  Band selection with FreeDV DATAC recommendations.\n\n  `Ff00`[Solar Conditions`:/page/propagation.mu]`f\n  Real-time solar flux, K-index, and geomagnetic alerts.\n\n  `Ff00`[Power Planner`:/page/powerplanner.mu]`f\n  Calculate battery runtime for portable operations.\n\n-=\n\n>Live Data\n\n  `Ff00`!`[CRYPTO TICKER`:/page/crypto.mu]`!`f\n  Live XMR/BTC prices with LFM contribution rates.\n\n  `Ff00`[GitHub Activity`:/page/github_feed.mu]`f\n  Recent commits from LFManifesto repositories.\n\n-=\n\n`c`F777Light_Fighter_Manifesto Propagation Node`f`a\n`c`!lightfightermanifesto.org`!`a' },
        { type: 'heading', level: 4, text: 'Crypto Ticker (Live API)' },
        { type: 'paragraph', text: 'Fetches live prices from CoinGecko API:' },
        { type: 'code', text: '#!/usr/bin/env python3\nprint("#!c=60")\n\nimport urllib.request\nimport json\nfrom datetime import datetime\n\nprint("`c`!CRYPTO TICKER`!`a")\nprint("")\n\ndef fetch_prices():\n    url = "https://api.coingecko.com/api/v3/simple/price?ids=monero,bitcoin&vs_currencies=usd&include_24hr_change=true"\n    try:\n        req = urllib.request.Request(url, headers={"User-Agent": "NomadNet/1.0"})\n        with urllib.request.urlopen(req, timeout=10) as resp:\n            return json.loads(resp.read().decode())\n    except:\n        return None\n\nprices = fetch_prices()\n\nif prices:\n    xmr = prices.get("monero", {})\n    xmr_usd = xmr.get("usd", 0)\n    xmr_change = xmr.get("usd_24h_change", 0)\n    \n    color = "0f0" if xmr_change >= 0 else "f00"\n    sign = "+" if xmr_change >= 0 else ""\n    \n    print(">MONERO (XMR)")\n    print("")\n    print(f"  `F{color}`!${xmr_usd:,.2f}`!`f USD")\n    print(f"  `F{color}24h: {sign}{xmr_change:.2f}%`f")\n    \n    # Calculate contribution rates\n    if xmr_usd > 0:\n        print("")\n        print(">LFM CONTRIBUTION RATES")\n        print("")\n        print(f"  Article ($25):    `F0f0{25/xmr_usd:.4f} XMR`f")\n        print(f"  Field Doc ($10):  `F0f0{10/xmr_usd:.4f} XMR`f")\nelse:\n    print("`Ff00Unable to fetch prices.`f")\n\nprint("")\nprint("`Ff00`[Back`:/page/index.mu]`f")' },
        { type: 'heading', level: 4, text: 'Interactive Chat' },
        { type: 'paragraph', text: 'The chat page demonstrates user input and database interaction. Messages are bridged to Matrix via maubot.' },
        { type: 'info', title: 'Page Types on LFM Node', text: '<strong>Static:</strong> shop.mu, projects.mu, resources.mu<br><strong>Dynamic (API):</strong> crypto.mu, propagation.mu, github_feed.mu<br><strong>Dynamic (System):</strong> node_stats.mu, nets.mu<br><strong>Interactive:</strong> chat.mu, hfprop.mu (with input fields)' },
        { type: 'heading', level: 3, text: 'Input Fields' },
        { type: 'paragraph', text: 'Create interactive pages with input fields:' },
        { type: 'code', text: '# Text input (width 20, name "callsign", default "N0CALL")\n`<20|callsign`N0CALL>\n\n# Submit button that links to processing page\n`[SUBMIT`:/page/process.mu`callsign]\n\n# Access in Python via environment variable\nimport os\ncallsign = os.environ.get("field_callsign", "")' },
        { type: 'heading', level: 3, text: 'Making Pages Executable' },
        { type: 'paragraph', text: 'Dynamic Python pages must be executable:' },
        { type: 'code', text: 'chmod +x ~/.nomadnetwork/storage/pages/mypage.mu' },
        { type: 'heading', level: 3, text: 'Debugging Pages' },
        { type: 'paragraph', text: 'Test dynamic pages from the command line:' },
        { type: 'code', text: 'cd ~/.nomadnetwork/storage/pages/\npython3 ./mypage.mu' },
        { type: 'paragraph', text: 'Check for syntax errors and verify output looks correct before accessing via NomadNet.' }
      ]
    },
    {
      id: 'sideband',
      number: '7',
      title: 'Sideband',
      icon: 'phone',
      description: 'Graphical messaging client for Android and desktop.',
      content: [
        { type: 'heading', level: 3, text: 'What is Sideband?' },
        { type: 'paragraph', text: 'Sideband is a graphical LXMF messaging client that runs on Android, Linux, macOS, and Windows. It provides encrypted messaging, voice calls, file sharing, and telemetry.' },
        { type: 'heading', level: 4, text: 'Features' },
        { type: 'list', items: [
          'End-to-end encrypted messaging',
          'Voice calls over LoRa',
          'Image and file transfers',
          'Location sharing with offline maps',
          'Telemetry and sensor data',
          'Works without Google services (Android)'
        ]},
        { type: 'heading', level: 3, text: 'Installation' },
        { type: 'heading', level: 4, text: 'Android' },
        { type: 'paragraph', text: 'Download the APK from the Sideband releases page. No Google Play required.' },
        { type: 'list', items: [
          'Download the <code>.apk</code> file',
          'Enable "Install from unknown sources" in Android settings',
          'Install the APK'
        ]},
        { type: 'heading', level: 4, text: 'Linux' },
        { type: 'code', text: 'pip install sbapp' },
        { type: 'paragraph', text: 'Then run <code>sideband</code> from terminal.' },
        { type: 'heading', level: 4, text: 'macOS' },
        { type: 'paragraph', text: 'Download the disk image from releases, or install via pip:' },
        { type: 'code', text: 'pip3 install sbapp' },
        { type: 'heading', level: 4, text: 'Windows' },
        { type: 'paragraph', text: 'Download the pre-built ZIP from releases, or use pip with Python 3.12:' },
        { type: 'code', text: 'pip install sbapp' },
        { type: 'heading', level: 3, text: 'Configuration' },
        { type: 'paragraph', text: 'Sideband stores its config in <code>~/.sideband/</code>' },
        { type: 'paragraph', text: 'Reticulum interfaces are configured in <code>~/.reticulum/config</code> as usual.' },
        { type: 'info', title: 'Tip', text: 'Sideband can run its own Reticulum instance or connect to an existing rnsd daemon.' }
      ]
    },
    {
      id: 'utilities',
      number: '8',
      title: 'Utilities',
      icon: 'tool',
      description: 'Command-line tools included with Reticulum.',
      content: [
        { type: 'heading', level: 3, text: 'rnsd - Network Daemon' },
        { type: 'paragraph', text: 'Runs Reticulum as a persistent service. Required for other programs to use the network.' },
        { type: 'code', text: '# Start daemon\nrnsd\n\n# Start as service (logs to file)\nrnsd -s\n\n# Show example config\nrnsd --exampleconfig' },
        { type: 'heading', level: 3, text: 'rnstatus - View Status' },
        { type: 'paragraph', text: 'Shows the status of all configured interfaces (like <code>ifconfig</code>).' },
        { type: 'code', text: '# Show all interfaces\nrnstatus\n\n# Filter by interface name\nrnstatus rnode\n\n# JSON output (for scripts)\nrnstatus -j' },
        { type: 'heading', level: 3, text: 'rnpath - Path Discovery' },
        { type: 'paragraph', text: 'Look up and display paths to destinations on the network.' },
        { type: 'code', text: '# Find path to a destination\nrnpath <destination_hash>\n\n# Show all known paths\nrnpath -t' },
        { type: 'heading', level: 3, text: 'rnprobe - Connectivity Test' },
        { type: 'paragraph', text: 'Test connectivity to a destination (like <code>ping</code>). The destination must support probe replies.' },
        { type: 'code', text: '# Probe a destination\nrnprobe <destination_name> <destination_hash>\n\n# Probe with larger packet\nrnprobe <destination_hash> -s 256' },
        { type: 'heading', level: 3, text: 'rncp - File Transfer' },
        { type: 'paragraph', text: 'Transfer files securely between Reticulum nodes.' },
        { type: 'code', text: '# Receive files (run on receiving machine)\nrncp --listen\n\n# Send a file\nrncp file.tar.gz <destination_hash>\n\n# Fetch a file from remote\nrncp --fetch remote_file.txt <destination_hash>' },
        { type: 'heading', level: 3, text: 'rnx - Remote Command' },
        { type: 'paragraph', text: 'Execute commands on remote systems.' },
        { type: 'code', text: '# Listen for commands (on remote machine)\nrnx --listen\n\n# Execute a command\nrnx <destination_hash> "ls -la"\n\n# Interactive shell\nrnx <destination_hash> -x' },
        { type: 'info', title: 'Security', text: 'Only allow remote command execution from trusted identities. Configure allowed identities in rnx settings.', warning: true },
        { type: 'heading', level: 3, text: 'rnid - Identity Management' },
        { type: 'paragraph', text: 'Generate and manage Reticulum identities, encrypt/decrypt files.' },
        { type: 'code', text: '# Generate new identity\nrnid -g ./my_identity\n\n# Show identity info\nrnid -i ./my_identity -p\n\n# Encrypt a file for a destination\nrnid -i <destination_hash> -e file.txt\n\n# Decrypt a file\nrnid -i ./my_identity -d file.txt.rfe' },
        { type: 'heading', level: 3, text: 'lxmd - LXMF Daemon' },
        { type: 'paragraph', text: 'Run an LXMF message propagation node.' },
        { type: 'code', text: '# Run as propagation node\nlxmd --propagation-node\n\n# Show example config\nlxmd --exampleconfig' }
      ]
    },
    {
      id: 'public-nodes',
      number: '9',
      title: 'Public Nodes',
      icon: 'globe',
      description: 'Connect to the global Reticulum network.',
      content: [
        { type: 'heading', level: 3, text: 'Public Transport Nodes' },
        { type: 'paragraph', text: 'These nodes are verified active as of December 12, 2025. Add them to your <code>~/.reticulum/config</code> to connect to the global network.' },
        { type: 'heading', level: 4, text: 'TCP Transport Nodes' },
        { type: 'table', headers: ['Name', 'Host', 'Port'], rows: [
          ['RNS Testnet Amsterdam', '<code>amsterdam.connect.reticulum.network</code>', '4965'],
          ['BetweenTheBorders', '<code>reticulum.betweentheborders.com</code>', '4242'],
          ['Chicago Nomadnet', '<code>rns.chicagonomad.net</code>', '4242'],
          ['NomadNode SEAsia', '<code>rns.jaykayenn.net</code>', '4242'],
          ['0rbit-Net', '<code>93.95.227.8</code>', '49952'],
          ['Beleth RNS Hub', '<code>rns.beleth.net</code>', '4242'],
          ['FireZen', '<code>firezen.com</code>', '4242'],
          ['Sydney RNS', '<code>sydney.reticulum.au</code>', '4242'],
          ['RNS Transport US-East', '<code>45.77.109.86</code>', '4965'],
          ['noDNS1', '<code>202.61.243.41</code>', '4965'],
          ['noDNS2', '<code>193.26.158.230</code>', '4965']
        ]},
        { type: 'heading', level: 4, text: 'Example Config' },
        { type: 'code', text: '[[RNS Testnet Amsterdam]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = amsterdam.connect.reticulum.network\n  target_port = 4965\n\n[[Chicago Nomadnet TCP]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = rns.chicagonomad.net\n  target_port = 4242\n\n[[Beleth RNS Hub]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = rns.beleth.net\n  target_port = 4242' },
        { type: 'heading', level: 3, text: 'I2P Nodes (Anonymous)' },
        { type: 'paragraph', text: 'These nodes are accessible via I2P for anonymous connectivity. Requires an I2P router running.' },
        { type: 'table', headers: ['Name', 'B32 Address'], rows: [
          ['Light Fighter Manifesto', '<code>kfamlmwnlw3acqfxip4x6kt53i2tr4ksp5h4qxwvxhoq7mchpolq.b32.i2p</code>'],
          ['RNS Testnet I2P Hub', '<code>g3br23bvx3lq5uddcsjii74xgmn6y5q325ovrkq2zw2wbzbqgbuq.b32.i2p</code>'],
          ['Chicago Nomad I2P', '<code>fgtqx3pgwyd3bjcq4ojes47j7ynnw72luf2g3jeguhf5bbzkcuhq.b32.i2p</code>'],
          ['0rbit-Net I2P', '<code>3amqekrikkrvfoyor75tjnlxmswmxiprqx7wknrwsnb46x7kjwuq.b32.i2p</code>']
        ]},
        { type: 'heading', level: 4, text: 'I2P Config Example' },
        { type: 'code', text: '[[I2P]]\n  type = I2PInterface\n  enabled = yes\n  connectable = yes\n  peers = kfamlmwnlw3acqfxip4x6kt53i2tr4ksp5h4qxwvxhoq7mchpolq.b32.i2p, g3br23bvx3lq5uddcsjii74xgmn6y5q325ovrkq2zw2wbzbqgbuq.b32.i2p' },
        { type: 'info', title: 'I2P Setup', text: 'Install i2pd (<code>sudo apt install i2pd</code>) and enable the SAM interface in <code>/etc/i2pd/i2pd.conf</code> by setting <code>sam.enabled = true</code>.' },
        { type: 'heading', level: 3, text: 'LFM NomadNet Node' },
        { type: 'paragraph', text: 'The Light Fighter Manifesto runs a public NomadNet node with live tools, chat, and resources.' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['Node Address', '<code>2eabad04f9145d32a6a3eda285d66c39</code>'],
          ['LXMF Propagation', '<code>a21f547bc1f70043a28c4e2d5b04e570</code>'],
          ['I2P B32', '<code>kfamlmwnlw3acqfxip4x6kt53i2tr4ksp5h4qxwvxhoq7mchpolq.b32.i2p</code>'],
          ['Uptime', '~10 days continuous (Dec 12, 2025)']
        ]},
        { type: 'paragraph', text: 'Connect via TCP or I2P and browse to the node address in NomadNet to access LFM pages.' }
      ]
    },
    {
      id: 'github-repos',
      number: '10',
      title: 'GitHub Resources',
      icon: 'code',
      description: 'Official repositories and community projects.',
      content: [
        { type: 'heading', level: 3, text: 'Official Reticulum Repositories' },
        { type: 'paragraph', text: 'All official Reticulum software is maintained by Mark Qvist on GitHub.' },
        { type: 'table', headers: ['Repository', 'Description', 'URL'], rows: [
          ['<strong>Reticulum</strong>', 'Core networking stack', 'github.com/markqvist/Reticulum'],
          ['<strong>NomadNet</strong>', 'Terminal messaging client', 'github.com/markqvist/NomadNet'],
          ['<strong>Sideband</strong>', 'Graphical messaging client', 'github.com/markqvist/Sideband'],
          ['<strong>LXMF</strong>', 'Messaging protocol', 'github.com/markqvist/LXMF'],
          ['<strong>RNode</strong>', 'LoRa hardware firmware', 'github.com/markqvist/RNode_Firmware'],
          ['<strong>LoRaMon</strong>', 'LoRa traffic monitor', 'github.com/markqvist/LoRaMon']
        ]},
        { type: 'heading', level: 3, text: 'Documentation' },
        { type: 'list', items: [
          '<strong>Reticulum Manual:</strong> markqvist.github.io/Reticulum/manual/',
          '<strong>API Reference:</strong> markqvist.github.io/Reticulum/reference.html',
          '<strong>NomadNet Guide:</strong> github.com/markqvist/NomadNet/blob/master/README.md'
        ]},
        { type: 'heading', level: 3, text: 'LFManifesto Repositories' },
        { type: 'paragraph', text: 'Light Fighter Manifesto maintains several Reticulum-related projects:' },
        { type: 'table', headers: ['Repository', 'Description', 'URL'], rows: [
          ['<strong>LXMFMonero</strong>', 'Monero transactions over LXMF/Reticulum mesh - off-grid cryptocurrency via radio', 'github.com/LFManifesto/LXMFMonero'],
          ['<strong>ReticulumHF</strong>', 'Encrypted communication over HF radio using Reticulum and FreeDV digital modes', 'github.com/LFManifesto/ReticulumHF'],
          ['<strong>website</strong>', 'Light Fighter Manifesto official website source', 'github.com/LFManifesto/website']
        ]},
        { type: 'info', title: 'Contributing', text: 'LFManifesto accepts contributions via GitHub pull requests. See the Projects page at lightfightermanifesto.org/projects/ for bounty information and contribution guidelines.' },
        { type: 'heading', level: 3, text: 'Community Resources' },
        { type: 'list', items: [
          '<strong>Matrix:</strong> #reticulum:matrix.org (Official)',
          '<strong>Matrix:</strong> #General:matrix.lightfightermanifesto.net (LFM)',
          '<strong>Reddit:</strong> r/reticulum',
          '<strong>Mastodon:</strong> @markqvist@chaos.social'
        ]},
        { type: 'heading', level: 3, text: 'Installing from Source' },
        { type: 'paragraph', text: 'Clone and install directly from GitHub for the latest development version:' },
        { type: 'code', text: '# Clone Reticulum\ngit clone https://github.com/markqvist/Reticulum.git\ncd Reticulum\npip install .\n\n# Clone NomadNet\ngit clone https://github.com/markqvist/NomadNet.git\ncd NomadNet\npip install .\n\n# Clone LXMFMonero\ngit clone https://github.com/LFManifesto/LXMFMonero.git\ncd LXMFMonero\npip install -r requirements.txt' },
        { type: 'info', title: 'Development', text: 'Use <code>pip install -e .</code> for editable installs during development. Changes to the source take effect immediately.', warning: false }
      ]
    },
    {
      id: 'troubleshooting',
      number: '11',
      title: 'Troubleshooting',
      icon: 'alert',
      description: 'Common issues and solutions.',
      content: [
        { type: 'heading', level: 3, text: '"Command not found" after pip install' },
        { type: 'paragraph', text: '<strong>Cause:</strong> pip installs commands to a directory not in your PATH.' },
        { type: 'heading', level: 4, text: 'Solution 1: Reboot' },
        { type: 'paragraph', text: 'Log out and back in, or reboot. Many systems update PATH on login.' },
        { type: 'heading', level: 4, text: 'Solution 2: Add to PATH' },
        { type: 'paragraph', text: 'Add pip\'s bin directory to your PATH:' },
        { type: 'paragraph', text: '<strong>Linux/macOS:</strong>' },
        { type: 'code', text: 'export PATH=$PATH:~/.local/bin' },
        { type: 'paragraph', text: 'Add to <code>~/.bashrc</code> or <code>~/.zshrc</code> to make permanent.' },
        { type: 'heading', level: 3, text: '"externally-managed-environment" Error' },
        { type: 'paragraph', text: '<strong>Cause:</strong> Newer Debian/Ubuntu systems block pip to protect system packages (PEP 668).' },
        { type: 'heading', level: 4, text: 'Solution 1: Use pipx' },
        { type: 'code', text: 'sudo apt install pipx\npipx ensurepath\npipx install rns' },
        { type: 'heading', level: 4, text: 'Solution 2: Use break-system-packages flag' },
        { type: 'code', text: 'pip install rns --break-system-packages' },
        { type: 'heading', level: 3, text: 'No Interfaces Showing' },
        { type: 'paragraph', text: '<strong>Cause:</strong> No interfaces enabled in config, or rnsd not running.' },
        { type: 'heading', level: 4, text: 'Check rnsd is running' },
        { type: 'code', text: 'ps aux | grep rnsd' },
        { type: 'heading', level: 4, text: 'Reset config' },
        { type: 'code', text: 'mv ~/.reticulum/config ~/.reticulum/config.bak\nrnsd' },
        { type: 'paragraph', text: 'This creates a fresh default config.' },
        { type: 'heading', level: 3, text: 'RNode Not Detected' },
        { type: 'paragraph', text: '<strong>Cause:</strong> Wrong serial port, permissions, or device not in bootloader.' },
        { type: 'heading', level: 4, text: 'Find the correct port' },
        { type: 'code', text: '# List serial devices\nls /dev/tty*\n\n# On Linux, usually /dev/ttyUSB0 or /dev/ttyACM0' },
        { type: 'heading', level: 4, text: 'Fix permissions' },
        { type: 'code', text: '# Add user to dialout group\nsudo usermod -a -G dialout $USER\n\n# Log out and back in for changes to take effect' },
        { type: 'heading', level: 3, text: 'Getting Help' },
        { type: 'list', items: [
          '<strong>Reticulum Manual:</strong> markqvist.github.io/Reticulum/manual/',
          '<strong>GitHub Issues:</strong> github.com/markqvist/Reticulum/issues',
          '<strong>Matrix:</strong> #reticulum:matrix.org'
        ]}
      ]
    }
  ];

  const toolsData = [
    { id: 'link-budget', title: 'Link Budget Calculator', icon: 'signal' },
    { id: 'airtime', title: 'Airtime Calculator', icon: 'clock' },
    { id: 'config-gen', title: 'Config Generator', icon: 'file' }
  ];

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function loadData() {
    state.sections = sectionData;
    state.tools = toolsData;
    initializeApp();
  }

  function initializeApp() {
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
      showWelcome();
    }
  }

  // ==========================================================================
  // Sidebar Navigation
  // ==========================================================================

  function buildSidebar() {
    const nav = document.getElementById('sidebarNav');
    const toolsNav = document.getElementById('sidebarTools');

    const icons = {
      clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
      settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
      monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
      tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
      signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
      file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
      globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    };

    nav.innerHTML = state.sections.map(section => `
      <li class="sidebar-nav-item">
        <a href="#${section.id}" class="sidebar-nav-link" data-section="${section.id}">
          ${icons[section.icon] || icons.signal}
          <span>${section.number}. ${section.title}</span>
        </a>
      </li>
    `).join('');

    toolsNav.innerHTML = state.tools.map(tool => `
      <li class="sidebar-nav-item">
        <a href="#${tool.id}" class="sidebar-nav-link" data-tool="${tool.id}">
          ${icons[tool.icon] || icons.tool}
          <span>${tool.title}</span>
        </a>
      </li>
    `).join('');

    nav.addEventListener('click', handleNavClick);
    toolsNav.addEventListener('click', handleNavClick);

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash) navigateToHash(hash);
    });
  }

  function handleNavClick(e) {
    const link = e.target.closest('.sidebar-nav-link');
    if (!link) return;

    e.preventDefault();
    const sectionId = link.dataset.section;
    const toolId = link.dataset.tool;

    window.location.hash = sectionId || toolId;
    closeMobileMenu();
  }

  function navigateToHash(hash) {
    const section = state.sections.find(s => s.id === hash);
    if (section) {
      showSection(section);
      updateActiveNav(hash);
      return;
    }

    const tool = state.tools.find(t => t.id === hash);
    if (tool) {
      showTool(hash);
      updateActiveNav(hash);
    }
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
  // Content Rendering
  // ==========================================================================

  function showWelcome() {
    const content = document.getElementById('contentArea');
    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Light Fighter Manifesto</div>
        <h1 class="section-title">Reticulum Field Reference</h1>
        <p class="section-description">Complete beginner's guide to Reticulum mesh networking, NomadNet, and LXMF messaging. Select a section from the sidebar or search above.</p>
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
          ${state.tools.map(tool => `
            <a href="#${tool.id}" style="display: flex; gap: 1rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 6px; text-decoration: none; transition: background 0.2s;">
              <div style="color: var(--text-primary); font-weight: 600;">${tool.title}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  function showSection(section) {
    const content = document.getElementById('contentArea');
    const currentIndex = state.sections.findIndex(s => s.id === section.id);
    const prevSection = currentIndex > 0 ? state.sections[currentIndex - 1] : null;
    const nextSection = currentIndex < state.sections.length - 1 ? state.sections[currentIndex + 1] : null;

    content.innerHTML = `
      <div class="section-header">
        <div class="section-number">Section ${section.number}</div>
        <h1 class="section-title">${section.title}</h1>
        <p class="section-description">${section.description}</p>
      </div>

      ${renderContent(section.content)}

      <div class="section-nav">
        ${prevSection ? `
          <a href="#${prevSection.id}" class="section-nav-btn prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            <div class="section-nav-text">
              <span class="section-nav-label">Previous</span>
              <span class="section-nav-title">${prevSection.number}. ${prevSection.title}</span>
            </div>
          </a>
        ` : '<div></div>'}
        ${nextSection ? `
          <a href="#${nextSection.id}" class="section-nav-btn next">
            <div class="section-nav-text">
              <span class="section-nav-label">Next</span>
              <span class="section-nav-title">${nextSection.number}. ${nextSection.title}</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        ` : '<div></div>'}
      </div>
    `;
    window.scrollTo(0, 0);
  }

  function renderContent(contentArray) {
    return contentArray.map(item => {
      switch (item.type) {
        case 'paragraph':
          return `<div class="content-card"><p>${item.text}</p></div>`;

        case 'heading':
          return `<h${item.level} style="margin-top: 2rem; margin-bottom: 1rem;">${item.text}</h${item.level}>`;

        case 'list':
          return `<div class="content-card"><ul>${item.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;

        case 'table':
          return `
            <div class="content-card" style="overflow-x: auto;">
              <table class="quick-ref-table">
                <thead><tr>${item.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                <tbody>${item.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
              </table>
            </div>
          `;

        case 'code':
          return `<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>${escapeHtml(item.text)}</div>`;

        case 'info':
          return `
            <div class="info-box${item.warning ? ' warning' : ''}">
              <div class="info-box-title">${item.title}</div>
              <p>${item.text}</p>
            </div>
          `;

        default:
          return '';
      }
    }).join('');
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ==========================================================================
  // Tools
  // ==========================================================================

  function showTool(toolId) {
    const content = document.getElementById('contentArea');

    if (toolId === 'link-budget') {
      content.innerHTML = getLinkBudgetHTML();
      initLinkBudget();
    } else if (toolId === 'airtime') {
      content.innerHTML = getAirtimeHTML();
      initAirtime();
    } else if (toolId === 'config-gen') {
      content.innerHTML = getConfigGenHTML();
      initConfigGen();
    }

    window.scrollTo(0, 0);
  }

  function getLinkBudgetHTML() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">LoRa Link Budget Calculator</h1>
        <p class="section-description">Estimate signal strength and link margin.</p>
      </div>
      <div class="content-card">
        <div class="calc-grid">
          <div class="calc-field"><label>TX Power (dBm)</label><input type="number" id="txPower" value="17"></div>
          <div class="calc-field"><label>TX Antenna Gain (dBi)</label><input type="number" id="txGain" value="2" step="0.5"></div>
          <div class="calc-field"><label>RX Antenna Gain (dBi)</label><input type="number" id="rxGain" value="2" step="0.5"></div>
          <div class="calc-field"><label>Frequency (MHz)</label><select id="freq"><option value="433">433</option><option value="868">868</option><option value="915" selected>915</option></select></div>
          <div class="calc-field"><label>Distance (km)</label><input type="number" id="distance" value="5" step="0.1"></div>
          <div class="calc-field"><label>Spreading Factor</label><select id="sf"><option value="7">SF7</option><option value="8" selected>SF8</option><option value="9">SF9</option><option value="10">SF10</option><option value="11">SF11</option><option value="12">SF12</option></select></div>
          <div class="calc-field"><label>Bandwidth (kHz)</label><select id="bw"><option value="125" selected>125</option><option value="250">250</option><option value="500">500</option></select></div>
        </div>
        <button class="calc-button" id="calcBtn">Calculate</button>
        <div id="result" class="calc-result" style="display:none;"></div>
      </div>
    `;
  }

  function initLinkBudget() {
    document.getElementById('calcBtn').addEventListener('click', () => {
      const txPower = parseFloat(document.getElementById('txPower').value);
      const txGain = parseFloat(document.getElementById('txGain').value);
      const rxGain = parseFloat(document.getElementById('rxGain').value);
      const freq = parseFloat(document.getElementById('freq').value);
      const distance = parseFloat(document.getElementById('distance').value);
      const sf = parseInt(document.getElementById('sf').value);
      const bw = parseFloat(document.getElementById('bw').value);

      const fspl = 20 * Math.log10(distance) + 20 * Math.log10(freq) + 32.44;
      const eirp = txPower + txGain;
      const rxPower = eirp - fspl + rxGain;
      const snrRequired = { 7: -7.5, 8: -10, 9: -12.5, 10: -15, 11: -17.5, 12: -20 };
      const sensitivity = -174 + 10 * Math.log10(bw * 1000) + 6 + snrRequired[sf];
      const margin = rxPower - sensitivity;

      document.getElementById('result').innerHTML = `
        <div class="result-label">EIRP: ${eirp.toFixed(1)} dBm | Path Loss: ${fspl.toFixed(1)} dB</div>
        <div class="result-label">RX Power: ${rxPower.toFixed(1)} dBm | Sensitivity: ${sensitivity.toFixed(1)} dBm</div>
        <div class="result-value" style="color: ${margin > 10 ? 'var(--accent-green)' : 'var(--accent)'}">Link Margin: ${margin.toFixed(1)} dB</div>
      `;
      document.getElementById('result').style.display = 'block';
    });
  }

  function getAirtimeHTML() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">LoRa Airtime Calculator</h1>
        <p class="section-description">Calculate time-on-air for LoRa packets.</p>
      </div>
      <div class="content-card">
        <div class="calc-grid">
          <div class="calc-field"><label>Payload (bytes)</label><input type="number" id="payload" value="50"></div>
          <div class="calc-field"><label>Spreading Factor</label><select id="sf2"><option value="7">SF7</option><option value="8" selected>SF8</option><option value="9">SF9</option><option value="10">SF10</option><option value="11">SF11</option><option value="12">SF12</option></select></div>
          <div class="calc-field"><label>Bandwidth (kHz)</label><select id="bw2"><option value="125" selected>125</option><option value="250">250</option><option value="500">500</option></select></div>
          <div class="calc-field"><label>Coding Rate</label><select id="cr"><option value="5" selected>4/5</option><option value="6">4/6</option><option value="7">4/7</option><option value="8">4/8</option></select></div>
        </div>
        <button class="calc-button" id="calcBtn2">Calculate</button>
        <div id="result2" class="calc-result" style="display:none;"></div>
      </div>
    `;
  }

  function initAirtime() {
    document.getElementById('calcBtn2').addEventListener('click', () => {
      const payload = parseInt(document.getElementById('payload').value);
      const sf = parseInt(document.getElementById('sf2').value);
      const bw = parseFloat(document.getElementById('bw2').value) * 1000;
      const cr = parseInt(document.getElementById('cr').value);

      const symbolTime = Math.pow(2, sf) / bw;
      const preambleTime = 12.25 * symbolTime;
      const de = sf >= 11 ? 1 : 0;
      const payloadSymbols = 8 + Math.max(Math.ceil((8 * payload - 4 * sf + 28 + 16) / (4 * (sf - 2 * de))) * cr, 0);
      const totalTime = (preambleTime + payloadSymbols * symbolTime) * 1000;

      document.getElementById('result2').innerHTML = `
        <div class="result-label">Payload Symbols: ${payloadSymbols}</div>
        <div class="result-value">Airtime: ${totalTime.toFixed(1)} ms</div>
      `;
      document.getElementById('result2').style.display = 'block';
    });
  }

  function getConfigGenHTML() {
    return `
      <div class="section-header">
        <div class="section-number">Tool</div>
        <h1 class="section-title">Config Generator</h1>
        <p class="section-description">Generate interface configurations.</p>
      </div>
      <div class="content-card">
        <div class="calc-field" style="margin-bottom:1rem;">
          <label>Interface Type</label>
          <select id="ifType">
            <option value="tcp-client">TCP Client</option>
            <option value="tcp-server">TCP Server</option>
            <option value="auto">Auto Interface</option>
            <option value="rnode">RNode LoRa</option>
          </select>
        </div>
        <div id="configFields"></div>
        <button class="calc-button" id="genBtn">Generate</button>
        <div id="configResult" style="display:none;"></div>
      </div>
    `;
  }

  function initConfigGen() {
    const templates = {
      'tcp-client': {
        fields: [{ id: 'host', label: 'Host', value: 'amsterdam.connect.reticulum.network' }, { id: 'port', label: 'Port', value: '4965' }],
        gen: v => `[[Remote Server]]\n  type = TCPClientInterface\n  enabled = yes\n  target_host = ${v.host}\n  target_port = ${v.port}`
      },
      'tcp-server': {
        fields: [{ id: 'port', label: 'Port', value: '4242' }],
        gen: v => `[[TCP Server]]\n  type = TCPServerInterface\n  enabled = yes\n  listen_ip = 0.0.0.0\n  listen_port = ${v.port}`
      },
      'auto': {
        fields: [{ id: 'group', label: 'Group ID', value: 'reticulum' }],
        gen: v => `[[Default Interface]]\n  type = AutoInterface\n  enabled = yes\n  group_id = ${v.group}`
      },
      'rnode': {
        fields: [{ id: 'port', label: 'Serial Port', value: '/dev/ttyUSB0' }, { id: 'freq', label: 'Frequency (Hz)', value: '915000000' }],
        gen: v => `[[RNode LoRa]]\n  type = RNodeInterface\n  enabled = yes\n  port = ${v.port}\n  frequency = ${v.freq}\n  bandwidth = 125000\n  txpower = 17\n  spreadingfactor = 8\n  codingrate = 5`
      }
    };

    const fieldsDiv = document.getElementById('configFields');
    const typeSelect = document.getElementById('ifType');

    function renderFields(type) {
      const t = templates[type];
      fieldsDiv.innerHTML = `<div class="calc-grid">${t.fields.map(f => `<div class="calc-field"><label>${f.label}</label><input type="text" id="cfg_${f.id}" value="${f.value}"></div>`).join('')}</div>`;
    }

    typeSelect.addEventListener('change', () => { renderFields(typeSelect.value); document.getElementById('configResult').style.display = 'none'; });
    renderFields(typeSelect.value);

    document.getElementById('genBtn').addEventListener('click', () => {
      const type = typeSelect.value;
      const t = templates[type];
      const vals = {};
      t.fields.forEach(f => { vals[f.id] = document.getElementById(`cfg_${f.id}`).value; });
      document.getElementById('configResult').innerHTML = `<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>${escapeHtml(t.gen(vals))}</div>`;
      document.getElementById('configResult').style.display = 'block';
    });
  }

  // ==========================================================================
  // Search
  // ==========================================================================

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || typeof Fuse === 'undefined') return;

    const searchItems = [];
    state.sections.forEach(section => {
      const textParts = [section.title, section.description];
      section.content.forEach(c => {
        if (c.text) textParts.push(c.text);
        if (c.items) textParts.push(c.items.join(' '));
      });
      searchItems.push({ id: section.id, title: section.title, number: section.number, content: textParts.join(' ') });
    });

    state.searchIndex = new Fuse(searchItems, { keys: ['title', 'content'], threshold: 0.3 });

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length < 2) { searchResults.classList.remove('active'); return; }

      const results = state.searchIndex.search(query).slice(0, 8);
      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
      } else {
        searchResults.innerHTML = results.map(r => `
          <div class="search-result-item" data-id="${r.item.id}">
            <div class="search-result-title">${r.item.number}. ${r.item.title}</div>
          </div>
        `).join('');
      }
      searchResults.classList.add('active');

      searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          window.location.hash = item.dataset.id;
          searchResults.classList.remove('active');
          searchInput.value = '';
        });
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) searchResults.classList.remove('active');
    });
  }

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================

  function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (toggle) toggle.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('visible'); });
    if (overlay) overlay.addEventListener('click', closeMobileMenu);

    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    const mobileSearchClose = document.getElementById('mobileSearchClose');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const mobileSearchResults = document.getElementById('mobileSearchResults');

    if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', () => { mobileSearchOverlay.classList.add('visible'); mobileSearchInput.focus(); });
    if (mobileSearchClose) mobileSearchClose.addEventListener('click', () => { mobileSearchOverlay.classList.remove('visible'); });

    if (mobileSearchInput && state.searchIndex) {
      mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) { mobileSearchResults.innerHTML = ''; return; }
        const results = state.searchIndex.search(query).slice(0, 10);
        mobileSearchResults.innerHTML = results.map(r => `<a href="#${r.item.id}" class="search-result-item" style="display:block;padding:1rem;border-bottom:1px solid var(--border-subtle);text-decoration:none;"><div style="color:var(--text-primary);font-weight:500;">${r.item.title}</div></a>`).join('');
        mobileSearchResults.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => { mobileSearchOverlay.classList.remove('visible'); mobileSearchInput.value = ''; });
        });
      });
    }
  }

  function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }

  // ==========================================================================
  // Keyboard Shortcuts
  // ==========================================================================

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('searchInput');
        if (input) input.focus();
      }
    });
  }

  // ==========================================================================
  // Offline Support
  // ==========================================================================

  function initOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');
    if (!indicator) return;

    function update() {
      state.isOffline = !navigator.onLine;
      indicator.classList.toggle('visible', state.isOffline);
    }

    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  }

  // ==========================================================================
  // Global Copy Function
  // ==========================================================================

  window.copyCode = function(btn) {
    const code = btn.parentElement.textContent.replace('Copy', '').trim();
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    });
  };

  // ==========================================================================
  // Start
  // ==========================================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }

})();
