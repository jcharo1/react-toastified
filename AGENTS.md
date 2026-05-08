# AGENTS.md

## Cursor Cloud specific instructions

This repository contains two parts:

1. **Root (`/workspace`)** — A publishable npm package (React component library) bundled with webpack. Exports `ToastProvider`, `useToast`, and `TOAST_TYPES`.
2. **`/workspace/react-toastified/`** — A Next.js 13.5 Pages Router demo app used for local development and visual testing of the toast component.

### Running services

| Service | Directory | Command | Port |
|---------|-----------|---------|------|
| Next.js demo app | `react-toastified/` | `npm run dev` | 3000 |
| Webpack library build | `/workspace` | `npm run build` | N/A |

### Key caveats

- **ESLint config issue**: The demo app's `.eslintrc.json` extends `"next/babel"` which is a Babel preset, not an ESLint config. Running `next lint` fails due to this pre-existing config issue. The library build and dev server work fine regardless.
- **No external services needed**: No databases, Docker, or environment variables are required. This is a purely frontend React component library.
- **Jest**: Test runner is configured in root `package.json` (`npm test`) but no test files currently exist. Jest passes with `--passWithNoTests`.
- **Peer dependency**: The root library lists `react ^18.2.0` as a peer dependency — it does not bundle React itself.
- **Two `package.json` files**: Root is for the npm library package; `react-toastified/` is for the Next.js demo app. Both need `npm install` separately.
