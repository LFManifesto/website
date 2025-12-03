# Light Fighter Manifesto Website

**Live Site:** https://lightfightermanifesto.org

This is the Hugo static site for Light Fighter Manifesto. Changes pushed to GitHub automatically deploy to Cloudflare Pages.

---

## Quick Reference

| Task | Command |
|------|---------|
| Preview locally | `hugo server --buildDrafts --port 1313` |
| Deploy changes | `git add . && git commit -m "message" && git push` |
| Check site status | Visit https://lightfightermanifesto.org |

---

## Content Locations

```
site/content/
├── _index.md           # Home page
├── shop.md             # Shop page
├── resources.md        # Resources page
├── apps.md             # Apps page
├── articles/           # All articles (newest first on site)
│   └── *.md
└── podcast/            # All podcast episodes
    └── *.md
```

---

## Adding a New Article

1. Create a new file in `content/articles/`:

```bash
# Use lowercase with hyphens, no spaces
content/articles/your-article-title.md
```

2. Add front matter at the top:

```markdown
---
title: "Your Article Title"
date: 2025-12-03
description: "Brief description for previews and SEO (1-2 sentences)"
---
```

3. Write your content below the front matter using markdown:

```markdown
---
title: "Mesh Networking Basics"
date: 2025-12-03
description: "An introduction to mesh networking for decentralized communications."
---

Your introduction paragraph goes here.

## First Section

Content for the first section.

## Second Section

More content here.

### Subsection

Even more detail.
```

4. Deploy:

```bash
git add .
git commit -m "Add article: Your Article Title"
git push
```

5. Live in ~1 minute at: `lightfightermanifesto.org/articles/your-article-title/`

---

## Editing an Existing Article

1. Find the file in `content/articles/` or `content/podcast/`

2. Open and edit the markdown file

3. Deploy:

```bash
git add .
git commit -m "Update article: Article Name"
git push
```

---

## Editing Site Pages

| Page | File |
|------|------|
| Home | `content/_index.md` |
| Shop | `content/shop.md` |
| Resources | `content/resources.md` |
| Apps | `content/apps.md` |

Edit the file, then deploy with git add/commit/push.

---

## Adding a Podcast Episode

1. Upload audio to Buzzsprout

2. Get the direct audio URL from Buzzsprout

3. Create file in `content/podcast/`:

```bash
content/podcast/episode-001-title.md
```

4. Add front matter:

```markdown
---
title: "Episode 1: Your Episode Title"
date: 2025-01-15
description: "Episode description for previews"
episode: 1
duration: "15:32"
audio: "https://www.buzzsprout.com/XXXXXXX/XXXXXXX-episode-title.mp3"
---

## Show Notes

What was discussed in this episode.

## Links Mentioned

- [Link 1](https://example.com)
- [Link 2](https://example.com)
```

5. Deploy with git add/commit/push

---

## Markdown Cheat Sheet

### Text Formatting

```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Headings

```markdown
# Heading 1 (use sparingly, title is already H1)
## Heading 2
### Heading 3
#### Heading 4
```

### Lists

```markdown
- Bullet point
- Another bullet
  - Nested bullet

1. Numbered item
2. Second item
3. Third item
```

### Links

```markdown
[Link text](https://example.com)
```

### Images

```markdown
![Alt text](/images/filename.png)
```

Place images in `static/images/` folder.

### Blockquotes

```markdown
> This is a quote
> It can span multiple lines
```

### Code Blocks

````markdown
```python
def hello():
    print("Hello World")
```
````

### Horizontal Rule

```markdown
---
```

---

## Local Preview

Preview changes before deploying:

```bash
cd /Users/user/Claude-Work/Projects/Website/site
hugo server --buildDrafts --port 1313
```

Visit http://localhost:1313 in your browser.

Press `Ctrl+C` to stop the server.

---

## File Naming Conventions

- Use lowercase letters
- Use hyphens instead of spaces
- Keep it short but descriptive
- Include date in podcast filenames

**Good:**
- `mesh-networking-basics.md`
- `episode-001-intro.md`
- `privacy-tools-2025.md`

**Bad:**
- `Mesh Networking Basics.md` (spaces, capitals)
- `article1.md` (not descriptive)
- `my_new_article.md` (underscores)

---

## Front Matter Reference

### Article Front Matter

```yaml
---
title: "Article Title"           # Required - displayed as heading
date: 2025-12-03                 # Required - YYYY-MM-DD format
description: "Brief summary"     # Required - for previews and SEO
draft: true                      # Optional - hides from live site
---
```

### Podcast Front Matter

```yaml
---
title: "Episode Title"           # Required
date: 2025-12-03                 # Required
description: "Episode summary"   # Required
episode: 1                       # Required - episode number
duration: "15:32"                # Required - MM:SS format
audio: "https://..."             # Required - direct audio URL
draft: true                      # Optional - hides from live site
---
```

---

## Draft Mode

To create content without publishing:

```yaml
---
title: "Work in Progress"
date: 2025-12-03
description: "Not ready yet"
draft: true
---
```

Drafts are hidden from the live site but visible in local preview with `--buildDrafts`.

When ready to publish, remove the `draft: true` line or set it to `false`.

---

## Adding Images

1. Place image in `static/images/`:

```
static/images/my-image.png
```

2. Reference in markdown:

```markdown
![Description of image](/images/my-image.png)
```

The image will be available at `lightfightermanifesto.org/images/my-image.png`

---

## Deployment Pipeline

```
Edit files locally
       ↓
git add .
       ↓
git commit -m "description"
       ↓
git push
       ↓
GitHub receives code
       ↓
Cloudflare Pages auto-builds
       ↓
Live in ~1 minute
```

---

## Troubleshooting

### Changes not appearing?

1. Wait 1-2 minutes for Cloudflare to rebuild
2. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check Cloudflare Pages dashboard for build errors

### Git push rejected?

```bash
git pull --rebase
git push
```

### Local preview not working?

```bash
# Make sure you're in the right directory
cd /Users/user/Claude-Work/Projects/Website/site

# Kill any existing hugo processes
pkill -f "hugo server"

# Start fresh
hugo server --buildDrafts --port 1313
```

### Article not showing in list?

- Check the date isn't in the future
- Check `draft: true` isn't set
- Verify the file is in `content/articles/` not elsewhere

---

## Directory Structure

```
site/
├── hugo.toml              # Site configuration
├── content/               # All content (markdown files)
│   ├── _index.md          # Home page
│   ├── shop.md            # Shop page
│   ├── resources.md       # Resources page
│   ├── apps.md            # Apps page
│   ├── articles/          # Article posts
│   └── podcast/           # Podcast episodes
├── static/                # Static assets
│   └── images/            # Image files
├── themes/lfm/            # Custom theme
│   ├── layouts/           # HTML templates
│   └── static/            # Theme CSS/JS
└── public/                # Generated site (don't edit)
```

---

## Useful Git Commands

```bash
# Check status
git status

# See what changed
git diff

# Undo changes to a file
git checkout -- filename.md

# See recent commits
git log --oneline -5

# Push everything
git add . && git commit -m "Update" && git push
```

---

## Contact

**Website:** https://lightfightermanifesto.org
**GitHub:** https://github.com/LFManifesto/website
