# yashgupta.io

Personal site and blog of Yash Gupta — built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content

- **Bio, links, highlights:** `src/data/site.ts`
- **Blog posts:** add a Markdown file to `src/content/blog/` with frontmatter:

  ```md
  ---
  title: 'Post title'
  description: 'One-line summary'
  pubDate: 2026-09-28
  tags: ['e-commerce']
  draft: false
  ---
  ```

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. The custom domain is set in `public/CNAME`.
