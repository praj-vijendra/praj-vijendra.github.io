# Prajwal Vijendra

Personal portfolio at [prajwalvijendra.com](https://prajwalvijendra.com).

## Development

```sh
npm ci
npm start
```

## Build and publish

```sh
npm run build
# Publish the production build to the gh-pages branch:
npm run deploy
```

`public/CNAME` preserves the custom domain when publishing. Merging source changes into `main` does not publish the site; deployment is a separate step.

## Content

- Edit the introduction, areas of work, and experience in `src/App.js`.
- Update layout rules in `src/App.css` and shared colors and fonts in `src/index.css`.

The page uses native anchor navigation, keyboard focus styles, and reduced-motion support. Before publishing, check the production build, narrow and wide layouts, and navigation.
