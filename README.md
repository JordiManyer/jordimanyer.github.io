# manyer.dev

This is the source code for my personal website. Built with
[Astro](https://astro.build) as a static site and hosted on Cloudflare Workers.

## Development

```sh
npm install      # fetch dependencies
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run check    # type-check
```

The publications page is generated from `public/publications.bib`, which is not
committed: CI downloads it (and the CV) from the `curriculum` repository.
