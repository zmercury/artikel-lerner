# Artikel Trainer

A polished German vocabulary & article learning app with spaced repetition.

## Live Demo
Deploy to GitHub Pages: Settings -> Pages -> Deploy from branch `main` -> `/` (root)

## Features
- **6 study modes**: Article, Article+Word, Plural, Weak Words, Mixed, Review
- **German Pronunciation**: Native speech synthesis (Web Speech API) with auto-pronounce, speed slider, and audio buttons
- **Smart SRS**: Weighted spaced repetition — weak words repeat more, mastered words fade
- **Dashboard**: Live stats — total words, due, mastered, weak, accuracy, streak
- **Vocabulary manager**: Search, filter, archive, reset per-word progress
- **Export / Import**: Download/restore full JSON progress backup
- **Dark & Light theme**: Warm beige light / pure black dark with indigo accent
- **Keyboard shortcuts**: 1=DER, 2=DIE, 3=DAS, P=Pronounce, Enter/Space=Next
- **Mobile friendly**: Responsive layout, works on all screen sizes
- **No build step**: Pure HTML + CSS + JS, no framework

## Files
| File | Purpose |
|------|---------|
| `index.html` | App shell, all views and modals |
| `style.css`  | Full theme (light/dark), layout, components |
| `app.js`     | SRS engine, practice logic, persistence |
| `words.json` | Vocabulary source of truth (92 words, 7 categories) |

## Extending Vocabulary
Edit `words.json`. Every word needs a **permanent unique `id`**.
Progress is keyed to `id`, so reordering or renaming other fields is safe.

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m 'Initial commit'
git remote add origin https://github.com/YOUR_USER/artikel-trainer.git
git push -u origin main
```
Then: GitHub repo -> Settings -> Pages -> Source: main branch, root.