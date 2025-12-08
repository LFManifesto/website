# Light Fighter Manifesto

**Live Site:** https://lightfightermanifesto.org

A veteran-owned publication delivering field-tested knowledge on intelligence gathering, communications infrastructure, and unconventional operations.

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

- **[Light Fighter Guide](https://lightfightermanifesto.org/apps/field-guide/)** - Comprehensive field reference PWA covering drones, communications, SIGINT, marksmanship, and mission planning with 9 interactive calculators

### Podcast
Audio content discussing tactics, technology, and unconventional warfare.

### Shop
Print zines (Volumes I-IV) available for purchase. Accepts Monero, cash, or card through Mixam print-on-demand.

---

## Active Projects

We maintain several open-source projects focused on communications and field operations. See the [Projects page](https://lightfightermanifesto.org/projects/) for details and contribution opportunities.

### LFM-Reticulum
Encrypted mesh communications over HF radio using Reticulum and FreeDV. Long-range, off-grid, no repeaters. Building Monero transaction capability over mesh.

- [ReticulumHF](https://github.com/LFManifesto/ReticulumHF) - HF transport layer for Reticulum
- [LXMFMonero](https://github.com/LFManifesto/LXMFMonero) - Monero transactions over LXMF

### LFM-Unmanned Systems
FPV platforms and counter-UAS. Build documentation, flight controller configs, and operational techniques.

### LFM-Guerrilla Tech
AI-assisted field operations: medical diagnosis support, direction finding, telemedicine over mesh, and improvised tech solutions.

---

## The Model

Publications fund development. All contributions become open source. We do not profit from your work.

---

## Contributing

We pay for work that ships. All payments in Monero (XMR).

| Type | Payout |
|------|--------|
| Articles | $25 |
| Field Documentation | $10 |
| Hardware Configs | $30 |
| Code Contributions | Variable |

### Submission Guidelines

**Articles**
- Length: 1,200 - 3,000 words
- Format: .docx, .odt, or Markdown (.md)
- Font: 12pt, standard font (Times New Roman, Arial, Liberation Serif)
- Structure: Title, author name or handle, body with subheadings, sources at end
- File naming: `ARTICLE_Title_Author_Date.docx`

**Field Documentation**
- Format: .docx, .odt, or Markdown (.md)
- Required: Date, location (general area), equipment used, methodology, results
- Structure: Objective, setup, procedure, data/observations, conclusions
- Photos: Include if applicable, labeled with description
- File naming: `FIELD_TestType_Author_Date.docx`

**Hardware Configs**
- Format: .docx, .odt, or Markdown (.md)
- Required: Complete parts list with sources, wiring diagrams, config files, tested parameters
- Include: Build photos, cost breakdown, software/firmware versions
- File naming: `HW_DeviceType_Author_Date.docx`

**Code Contributions**
- Process: Open a Discussion on the relevant repo before starting significant work
- Standards: Follow existing code style, include tests if applicable
- Documentation: Update README or docs for new features

### How to Submit

**Code:** Open a PR or start a [Discussion](https://github.com/LFManifesto/ReticulumHF/discussions) first for significant work.

**Everything else:** Email [lfmanifesto@proton.me](mailto:lfmanifesto@proton.me)

PGP encryption available for sensitive material:
- **Key:** https://lightfightermanifesto.org/keys/lfm-dead-drop.asc
- **Fingerprint:** `5F30 7CCC D67D 28BC F7D2 B5EE FBEC F672 D19E 1FFB`

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

Project-specific Matrix channels (invite-only, join #General first):
- #LFM-Reticulum
- #LFM-Unmanned-Systems
- #LFM-Guerrilla-Tech

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
│   ├── articles/          # Article posts
│   ├── podcast/           # Podcast episodes
│   ├── projects/          # Projects/bounties page
│   ├── resources/         # Resources page
│   ├── shop/              # Shop section
│   └── tools/             # Tools/Apps listings
├── static/
│   ├── apps/              # Web applications
│   │   └── field-guide/   # Light Fighter Guide PWA
│   ├── images/            # Site images
│   └── keys/              # PGP keys
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
