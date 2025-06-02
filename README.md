# Portfolio Olivier Renard 2025 
![Node.js Version](https://img.shields.io/badge/Node.js-18+-brightgreen.svg)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3-9466ff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38bdf8?logo=tailwindcss)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Welcome to the repository of my personal portfolio, designed to showcase my expertise in modern web development with a strong focus on performance, accessibility, and user experience.

## Tech Stack

* [React](https://react.dev/) v19.1 with TypeScript
* [Vite](https://vitejs.dev/) v6.3 for fast bundling and dev server
* [TailwindCSS](https://tailwindcss.com/) v4.1 for styling
* [Lenis](https://github.com/studio-freight/lenis) for smooth scroll
* [Motion](https://motion.dev/) for page transitions
* [Biome](https://biomejs.dev/) for linting and formatting

## Requirements

* Node.js >= 18
* npm >= 9

## Getting Started

```bash
# Clone the repository
git clone git@github.com:renardoli/portfolio-2025.git
cd portfolio-2025

# Install dependencies
npm install
```

## Project Structure

```
portfolio-2025/
├── public/             # Static assets and images
├── scripts/            # Utility scripts
├── src/
│   ├── assets/         # Assets used in code
│   ├── components/     # Reusable React components
│   ├── contexts/       # React contexts
│   ├── data/          # Static data
│   ├── hooks/         # Custom hooks for Lenis & Motion
│   ├── layout/        # Layout components
│   ├── pages/         # Page components
│   ├── types/         # TypeScript declarations
│   ├── Router.tsx     # React Router v7 configuration
│   └── main.tsx       # Entry point
├── .gitignore
├── biome.json
├── index.html
├── package.json
└── vite.config.ts
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Convert images to WebP format
npm run convert:img
```

## Utility Scripts

### Image Conversion

The `convert:img` script allows you to:

* Automatically convert JPG/PNG images to WebP
* Optimize image quality (80%)
* Backup original images into the `/original-imgs` folder

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or collaboration opportunities, feel free to contact me via [LinkedIn](https://www.linkedin.com/in/renardoli/) or by email at [contact@olivier-renard.com](mailto:contact@olivier-renard.com).

---

Thank you for checking out my portfolio! 😊
