# LFM Article Writing Guide

**Last Updated:** December 11, 2025
**Parent Context:** `/Users/user/Claude-Work/Projects/www.lightfightermanifesto.org/.claude/CLAUDE.md`

This document establishes the baseline format and style for all Light Fighter Manifesto articles.

---

## Article Structure

### Front Matter

```yaml
---
title: "Article Title: Subtitle if Needed"
date: YYYY-MM-DD
description: "Compelling 1-2 sentence hook. Should make reader want to click."
author: "LFM"
tags: ["Tag1", "Tag2", "Tag3"]
draft: false
---
```

### Required Sections (in order)

1. **Hero Image** - Full-width image at top
2. **Historical Anchor Opening** - 2-4 paragraphs establishing context through history
3. **Volume Attribution** - Credit original LFM Volume source with author handle
4. **Body Sections** - Content with `##` headers, `---` dividers between major sections
5. **Closing Section** - Returns to opening thread (closes the loop)
6. **Sources** - All references, no inline links in body
7. **Tools** - LFM apps first, then external resources

---

## The Voice

We write like the bastard offspring of the New York Times, Hemingway, and Chuck Palahniuk. Elegant authority with dry humor underneath. Short sentences that carry weight.

### Core Rules

1. **Historical anchor opening** - Start with a historical figure/event that illuminates the topic (Hannibal for medicine, Simo Häyhä for sniping, Bentham for surveillance)

2. **Short sentences.** Periods over em-dashes. Fragment sentences for punch.

3. **No fluff words.** Kill "basically," "essentially," "actually," "very," "just."

4. **No inline links.** All links go in Sources/Tools sections at the end.

5. **Imply, do not explain.** Trust the reader's intelligence.

6. **Use "do not" instead of "don't"** for weight and authority.

7. **Dry humor, not jokes.** ("does not ask for hazard pay," "bad news: there is homework")

8. **Current data with verified sources.** Research external sources, do not rely solely on Volume material.

9. **Forward-looking timeframe.** Frame content for 2026 and beyond.

10. **Close the loop.** Final section returns to opening historical anchor.

### Sentence Rhythm

Mix long explanatory sentences with short punchy ones:

> The FBI operates more than 120 surveillance aircraft registered to shell corporations with post office boxes in Bristow, Virginia. Most are single-engine Cessna 182T Skylanes, fitted with exhaust mufflers to reduce engine noise, flying at approximately 5,000 feet. The cameras resolve individual faces on the ground.

Fragment sentences for emphasis:

> Concrete block. Soviet era. Cold railing.

### What NOT to Do

- Second-person present tense openings ("You are in a stairwell...")
- Inline hyperlinks in body text
- Emojis
- Exclamation points
- "Basically," "essentially," "actually," "very," "just"
- Em-dashes where periods work better
- Explaining what the reader should feel

---

## Volume Source Attribution

When expanding content from LFM Volumes, always:

1. **Name the source** in the opening section:
   > In Light Fighter Manifesto Volume III, disruptor_26 ([@Sentinel_Society](https://instagram.com/Sentinel_Society) / [@Disruptor26](https://instagram.com/Disruptor26)) introduced...

2. **Weave direct quotes throughout** the article:
   > disruptor_26 wrote about the medic needing to keep "a library of voodoo and supporting philosophies" in their head.

3. **Include in Sources section**:
   > - Light Fighter Manifesto Volume III: "Guerrilla Hacking for Austere Medicine" (disruptor_26, 2023)

### Author Attribution Format

| Volume | Author | Handle Format |
|--------|--------|---------------|
| Vol III | disruptor_26 | ([@Sentinel_Society](https://instagram.com/Sentinel_Society) / [@Disruptor26](https://instagram.com/Disruptor26)) |
| Vol III | N. | (no public handle) |
| Vol IV | editor | (no public handle) |

---

## Research Requirements

Articles MUST include external research beyond Volume source material:

### Required Research Depth

- **Statistics** - Current data with dates (2024-2025)
- **Legal cases** - Court rulings, lawsuits, precedents
- **Market data** - Industry size, growth projections
- **Technical specifications** - Verified capabilities, limitations
- **Organizational data** - Agency programs, contract values, deployments

### Source Quality Hierarchy

1. **Primary sources** - Court filings, government reports, official documentation
2. **Investigative journalism** - ACLU, EFF, BuzzFeed News investigations, 404 Media
3. **Academic papers** - BMJ, peer-reviewed journals
4. **Industry sources** - Company documentation, Wikipedia for factual data
5. **News reporting** - For recent events, verified by multiple outlets

### Research Before Writing

Always search for:
- "[topic] 2024 2025" for current data
- "[topic] lawsuit court ruling" for legal precedents
- "[topic] statistics market size" for quantitative data
- "[technology] capabilities limitations" for technical accuracy

---

## Section Formatting

### Headers

```markdown
## Section Title

Content here.

---

## Next Section
```

Use `---` horizontal rules between major sections for visual breathing room.

### Blockquotes for Direct Quotes

```markdown
The editor's assessment was blunt: "The state, with its vast resources, has built a near-perfect system for monitoring public gatherings."
```

### Technical Data

For calculations or technical examples, use the site's shortcodes:

```markdown
{{< worked-example title="DANGER SPACE CALCULATION" >}}
Content here
{{< /worked-example >}}
```

### Resource Callouts

```markdown
{{< resource-callout title="INTERACTIVE MAP" url="https://example.com" icon="map" >}}
Description of resource.
{{< /resource-callout >}}
```

---

## Sources Section Format

```markdown
### Sources

- BMJ Military Health: "'Golden day' is a myth" (Dilday et al., November 2024)
- ACLU: FBI surveillance aircraft fleet documentation
- Light Fighter Manifesto Volume III: "Article Title" (author, year)
```

**Rules:**
- Publication/Organization first
- Article title in quotes
- Author and date in parentheses
- No URLs in Sources (those go in Tools)

---

## Tools Section Format

```markdown
### Tools

- [LFM App Name](/apps/app-path/) - Brief description
- [External Tool](https://url.com/) - Brief description
```

**Rules:**
- LFM apps listed first
- External tools after
- Brief description (one line)
- Verify all links work before publishing

---

## Hero Images

### Format

```html
<figure class="hero-image">
  <img src="/images/articles/article-slug/hero.jpg" alt="Descriptive alt text">
</figure>
```

### Requirements

- Store in `/static/images/articles/[article-slug]/`
- Use descriptive alt text
- Prefer .jpg for photos, .png for graphics
- No SVG for hero images (Safari compatibility)

---

## Tags

### Common Tags

| Category | Tags |
|----------|------|
| Medical | Medicine, TCCC, Austere Medicine, Prolonged Field Care |
| Weapons | Marksmanship, Sniper, Tactics |
| Tech | Drones, FPV, SIGINT, Electronic Warfare, Reticulum |
| Intel | OSINT, Surveillance, Counter-Surveillance, Tradecraft |
| Location | Ukraine, Urban Operations |
| Privacy | Privacy, Communications |

Use 4-6 tags per article. Include "Ukraine" if article references Ukraine conflict data.

---

## Publishing Checklist

Before committing:

- [ ] Front matter complete (title, date, description, author, tags)
- [ ] Historical anchor opening
- [ ] Volume source attributed with author handle
- [ ] Direct quotes woven throughout
- [ ] External research included with current data
- [ ] No inline links in body text
- [ ] Sources section complete
- [ ] Tools section with LFM apps first
- [ ] Closing returns to opening thread
- [ ] Hero image in place with alt text
- [ ] All external links verified working
- [ ] No emojis, no exclamation points
- [ ] "do not" instead of "don't"

---

## Example Articles (Reference)

These articles exemplify the current style template:

1. **The Guerrilla Medic in the Drone Age** - Medical, Volume III expansion
   - Historical anchor: Hannibal Barca crossing the Alps
   - Source: disruptor_26, Volume III
   - Closes with: Hannibal quote on pain and death

2. **Quick Kill: Rapid Engagement Techniques for Snipers** - Marksmanship, Volume III expansion
   - Historical anchor: Simo Häyhä, Winter War
   - Source: N., Volume III
   - Closes with: "Häyhä had days. This sniper has seconds."

3. **The Digital Panopticon: Urban Operations in Surveilled Cities** - Surveillance, Volume IV expansion
   - Historical anchor: Jeremy Bentham's Panopticon (1791)
   - Source: editor, Volume IV
   - Closes with: "Stop believing."

---

## Volume Source Locations

| Volume | Path |
|--------|------|
| Volume III | `/Users/user/Desktop/Knowledge/Published-Volumes/Light Fighter Manifesto Volumes/Volume III/` |
| Volume IV | `/Users/user/Desktop/Knowledge/Published-Volumes/Light Fighter Manifesto Volumes/Volume IV/` |

When expanding Volume content:
1. Read the full source article from the PDF
2. Identify key quotes to weave throughout
3. Research current data to add depth
4. Frame for 2026 timeframe
5. Apply historical anchor + closing loop structure

---

**Document Purpose:** Article writing baseline and format guide
**Scope:** All articles in `site/content/articles/`
