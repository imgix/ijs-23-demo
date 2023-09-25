<!-- ix-docs-ignore -->

![imgix logo](https://assets.imgix.net/sdk-imgix-logo.svg)

<!-- /ix-docs-ignore -->

# iJS 2023 Demo

This is a demo project for the [imgix](https://www.imgix.com) talk at [iJS 2023](https://javascript-conference.com/).

To get started, clone this repo, start the dev server, and open the browser to <http://localhost:5173>.

## Demo
This repository includes examples of the following imgix features:

- AI [Facial Detection](https://docs.imgix.com/apis/rendering/face-detection)
- AI [Background Removal](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
- AI [Super Resolution](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
- Automatic [Format Selection](https://docs.imgix.com/apis/rendering/auto/auto)

To add/remove imgix parameters:
- edit the `src/components/ProductGrid.tsx` and `src/data/products.ts` files
- add/remove parameters from the `imgixParams` objects.

## What is inside?

This project uses:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Getting Started

### Install

Create the project.

```bash
git clone <repo URL>
```

Access the project directory.

```bash
cd imgix-ijs-2023-demo
```

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Build

```bash
pnpm run build
```

## License

This project is licensed under the MIT License.
