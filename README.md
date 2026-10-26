# SokoHub

## Overview

SokoHub is a responsive product catalog built with React. Browse products loaded from the [Fake Store API](https://fakestoreapi.com/), then open a product to view its image, description, price, category, and rating.

The app uses React Router for navigation, Redux for product state, and Tailwind CSS for styling.

## Dev instructions

### Prerequisites

- Node.js (which includes npm). Install the current LTS version from the [official Node.js website](https://nodejs.org/), then follow the installer instructions for your operating system.
- Verify the installation by opening a terminal and running:

  ```bash
  node --version
  npm --version
  ```

  Both commands should print a version number.

### Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your browser. Product data is fetched from the Fake Store API, so an internet connection is required.

### Other commands

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## User instructions

- Open the home page to browse the product catalog.
- Select a product to open its detail page.
- Use the SokoHub link in the header to return to the catalog.

The product detail page currently displays “Add to Cart” and “Buy Now” buttons, but cart and checkout functionality is not implemented.

## Contributions

Contributions are welcome. Fork the repository, create a branch for your change, and open a pull request with a clear description of what changed. Before submitting, run `npm run lint` and `npm run build`, and include any relevant testing details in the pull request.
