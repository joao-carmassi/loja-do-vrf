import MarkdownToHtml from './markdownToHtml';

const markdown = `
# Rare Solar Eclipse Amazes Millions Worldwide

## A Spectacular Celestial Event

On **September 8, 2025**, people across several continents witnessed a rare **annular solar eclipse**, where the Moon covered the center of the Sun, creating a striking "ring of fire."

### Key Highlights
- Millions gathered in public spaces to watch.
- Scientists used the opportunity to study solar activity.
- Tourists traveled to regions with the best visibility.

> "Events like these remind us how small we are in the vast universe,"  
> said Dr. Emily Carter, an astrophysicist from NASA.

---

## What Is an Annular Eclipse?

Unlike a total eclipse, during an annular eclipse the Moon is slightly farther from Earth and does not completely cover the Sun.

### Steps of the Eclipse
1. **Partial Eclipse** begins.
2. The Moon moves to the center of the Sun.
3. The **"ring of fire"** appears.
4. The Moon slowly drifts away, ending the eclipse.

---

## How to Safely Watch an Eclipse

- **Do not** look directly at the Sun.  
- Use **special eclipse glasses** or **pinhole projectors**.  
- NASA provides resources on [safe viewing](https://science.nasa.gov/eclipses/safety/).

---

## Upcoming Eclipses

| Date       | Type      | Visibility Region       |
|------------|-----------|-------------------------|
| Oct 2, 2026 | Total     | South America           |
| Aug 12, 2026 | Partial   | Europe, Asia            |
| Aug 23, 2044 | Annular   | Africa, Middle East     |

---
`;

export const MarkdownExemple = () => {
  return <MarkdownToHtml markdown={markdown} />;
};
