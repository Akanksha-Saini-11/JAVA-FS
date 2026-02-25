Experiment-2: Route-Based Lazy Loading in SPA

Aim

To implement route-based lazy loading to improve performance in a Single Page Application.

Theory

Route-based lazy loading ensures that components associated with specific routes are loaded only
when the user navigates to that route. This reduces the initial bundle size and speeds up application
startup.

Procedure

1. Install `react-router-dom`.
2. Create multiple route components.
3. Apply lazy loading to route components using `React.lazy()`.
4. Wrap routes inside `Suspense` with a fallback UI.

Quick Start

Install dependencies (run from this folder):

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. Navigate between Home, About and Contact to see lazy-loaded routes.

Notes

- The project already demonstrates lazy loading in `src/App.jsx` using `React.lazy()` and `Suspense`.
- If `react-router-dom` isn't installed automatically, ensure it's present in `package.json` and run `npm install`.

