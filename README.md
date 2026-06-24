# ✨ Alatusz - Frontend Developer Portfolio

A modern, highly interactive, and visually stunning personal portfolio website built with cutting-edge web technologies. Designed to showcase projects, skills, and professional experience with a unique blend of "Liquid Glass" aesthetics and Terminal-inspired UI components.

---

## 🚀 Key Features

- **Liquid Glass & Terminal UI**: A bespoke design system combining elegant glassmorphism effects (translucency, blurs) with a geeky, functional Mac Terminal-styled contact form.
- **Scroll Reveal Animations**: Smooth, performant scroll-triggered animations that bring the page to life as the user scrolls down.
- **Dynamic Project Showcase**: A beautifully structured grid displaying projects with hover-zoom image effects, tag categorization, and direct links to GitHub and Live demos.
- **Fully Responsive**: Carefully crafted to look perfect on desktops, tablets, and mobile devices.
- **Clean Architecture**: Highly modular React components, ensuring the codebase is easy to read, maintain, and scale.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (with custom abstract theme colors like `sea` and `abyss`)
- **Icons**: `lucide-react` & `@thesvg/react`
- **Linting**: ESLint (Strict Type-Checked)
- **Deployment Ready**: Fully optimized for Vercel / Netlify.

---

## 📸 Screenshots

<div align="center">
  <img src="https://placehold.co/800x450/1a1a2e/ffffff?text=Portfolio+Hero+Section" alt="Portfolio Hero" width="800" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-bottom: 20px;" />
  <p><i>The sleek, modern hero section of the portfolio.</i></p>
</div>

> **Note:** To update this screenshot, place your own image in the `public/` folder and update the `src` attribute above.

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Local Development

1. Clone the repository and navigate to the directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will compile TypeScript and bundle the application into the `dist` folder.

---

## 📁 Project Structure

```text
src/
├── assets/           # Static assets like images (e.g., project screenshots)
├── components/       # Reusable UI sections (About, Contact, Experience, Projects, Skills)
├── hooks/            # Custom React hooks (e.g., useScrollReveal)
├── App.tsx           # Main application entry point
└── index.css         # Global CSS and Tailwind directives
```

---

_Designed and engineered with passion. Ready to build something luminous._
