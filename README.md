# Light Fighter Manifesto

**Live Site:** https://lightfightermanifesto.org

Zines covering OSINT, survival, communications, and emergent warfare. By practitioners, for practitioners.

*Unfiltered. Uncensored. Unconventional.*

---

## About

Light Fighter Manifesto is a veteran-owned publication focused on practical knowledge for unconventional operations. The website serves as a hub for articles, web applications, podcasts, and community resources.

**Topics covered:**
- Open Source Intelligence (OSINT)
- Mesh networking and communications
- Electronic warfare and SIGINT
- Unmanned aerial systems (UAS)
- Counter-surveillance and privacy
- Precision marksmanship
- Mission planning

---

## Website Features

### Articles
In-depth articles on tactical and technical subjects. NYT-style long-form journalism with original research and analysis.

### Web Applications
Interactive tools designed for desktop and tablet use:

- **Light Fighter Guide** - Comprehensive field reference PWA covering drones, communications, SIGINT, marksmanship, and mission planning with 9 interactive calculators
- **RF Simulator** - Radio frequency propagation modeling
- **Network Simulator** - Mesh network visualization
- **Air TM Simulator** - Airspace and terrain modeling
- **Loophole Calculator** - Ballistic calculations
- **OSINT Tutorial** - Intelligence gathering walkthrough

### Podcast
Audio content discussing tactics, technology, and unconventional warfare.

### Shop
Print zines (Volumes I-IV) available for purchase. Accepts Monero, cash, or card through Mixam print-on-demand.

---

## LFM Infrastructure

Self-hosted privacy-focused services operated by Light Fighter Manifesto.

### Matrix Homeserver
Decentralized, encrypted communications via self-hosted Matrix server.

```
Server: matrix.lightfightermanifesto.net
Room: #General:matrix.lightfightermanifesto.net
```

### Monero Node
Full Monero node accessible via Tor. No logs, no tracking.

```
tnm23vptv53qmqrt57rhy7ogmjvqfaicq4t3qju4axfd6v7rmq5cgxyd.onion:18081
```

### Reticulum I2P Node
Light Fighter I2P interface for Reticulum mesh networking.

```
kfamlmwnlw3acqfxip4x6kt53i2tr4ksp5h4qxwvxhoq7mchpolq.b32.i2p
```

Reticulum config:
```ini
[[Lightfighter I2P]]
  type = I2PInterface
  enabled = yes
  connectable = yes
  peers = kfamlmwnlw3acqfxip4x6kt53i2tr4ksp5h4qxwvxhoq7mchpolq.b32.i2p
```

---

## Community

- **Discord** - [Light Fighter Manifesto Server](https://discord.com/invite/light-fighter-manifesto-963878135718371408) (~4,000 members)
- **Matrix** - [#General:matrix.lightfightermanifesto.net](https://matrix.to/#/#General:matrix.lightfightermanifesto.net)
- **GitHub** - [LFManifesto](https://github.com/LFManifesto)
- **Instagram** - [@light_fighter_manifesto](https://www.instagram.com/light_fighter_manifesto/)
- **TikTok** - [@lfmanifesto](https://www.tiktok.com/@lfmanifesto)

---

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | Hugo (static site generator) |
| Hosting | Cloudflare Pages |
| Theme | Custom "lfm" theme (dark, responsive) |
| Apps | Vanilla JavaScript PWAs |
| DNS | Cloudflare |
| SSL | Cloudflare (automatic) |

---

## Repository Structure

```
site/
├── hugo.toml              # Site configuration
├── content/
│   ├── _index.md          # Home page
│   ├── shop/              # Shop section
│   ├── resources/         # Resources page
│   ├── tools/             # Tools/Apps listings
│   ├── articles/          # Article posts
│   └── podcast/           # Podcast episodes
├── static/
│   ├── images/            # Site images
│   └── apps/              # Web applications
│       ├── field-guide/   # Light Fighter Guide PWA
│       ├── RF_Sim/        # RF Simulator
│       ├── Network_Sim/   # Network Simulator
│       ├── Air_TM_Sim/    # Air TM Simulator
│       ├── loophole/      # Loophole Calculator
│       └── OSINT/         # OSINT Tutorial
└── themes/lfm/            # Custom Hugo theme
```

---

## Development

### Prerequisites
- Hugo (v0.139.0 or later)
- Git

### Local Preview

```bash
cd site
hugo server --buildDrafts --port 1313
```

Visit http://localhost:1313

### Deployment

Changes pushed to `main` automatically deploy via Cloudflare Pages.

```bash
git add .
git commit -m "Description of changes"
git push
```

Live in approximately 1-2 minutes.

---

## Contributing

This is a private publication. For corrections or suggestions, contact via Discord or Matrix.

---

## License

Content is proprietary. All rights reserved by Light Fighter Manifesto L.L.C.

---

## Contact

- **Website:** https://lightfightermanifesto.org
- **Email:** lfmanifesto@proton.me
- **Discord:** [Join Server](https://discord.com/invite/light-fighter-manifesto-963878135718371408)
- **Matrix:** [#General:matrix.lightfightermanifesto.net](https://matrix.to/#/#General:matrix.lightfightermanifesto.net)

---

*Veteran Owned*
