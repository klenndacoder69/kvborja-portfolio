
# Portfolio Website

This is a SvelteKit-based portfolio website for showcasing Computer Science projects. It is configured for static site generation and ready for deployment to GitHub Pages or a custom domain (e.g., is-a.dev).




## Developing

Install dependencies:

```sh
npm install
```

Start a development server:

```sh
npm run dev
```


## Building

To create a production version of your app:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deploying to GitHub Pages

1. Make sure your repository is set up for GitHub Pages (typically from the `main` or `gh-pages` branch).
2. The static site output will be in the `build` directory after running `npm run build`.
3. Push the contents of the `build` directory to your `gh-pages` branch, or use a deployment action.
4. If using a custom domain (e.g., is-a.dev), edit the `static/CNAME` file to contain your domain name (no protocol, just the domain).

## Custom Domain

To use a custom domain (like is-a.dev), add your domain to the `static/CNAME` file and configure your DNS provider to point to GitHub Pages.
