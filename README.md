# Opulenthost

Landing page website for Opulent Host company, designed to captivate potential clients and business owners in Indonesia, particularly UMKM (small and medium enterprises). This project showcases the company's services and aims to convert visitors into customers.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)  
![Version](https://img.shields.io/badge/version-1.0.0-blue)  
![License](https://img.shields.io/badge/license-MIT-green)

---

## Table of Contents

1. [Key Features](#key-features)
2. [Prerequisites and Dependencies](#prerequisites-and-dependencies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Project Structure](#project-structure)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)
11. [Acknowledgments](#acknowledgments)

---

## Key Features

- **Responsive Design**: Optimized for all devices, ensuring a seamless user experience.
- **Interactive Animations**: Engaging animations using Framer Motion.
- **Customizable Components**: Modular React components for easy updates.
- **TailwindCSS Integration**: Rapid styling with utility-first CSS.
- **Optimized Performance**: Lazy loading and optimized assets for fast load times.

---

## Prerequisites and Dependencies

### Prerequisites

- **Node.js**: Version 16 or higher is required. [Download Node.js](https://nodejs.org/)
- **Git**: Ensure Git is installed for version control. [Download Git](https://git-scm.com/)

### Dependencies

The project uses the following key dependencies:

- **React**: For building the user interface.
- **TailwindCSS**: For styling.
- **Framer Motion**: For animations.
- **Vite**: For fast development and build tooling.

To install all dependencies, run:

```bash
npm install
```

### Installation

1. Clone the repository:

```shell
git clone https://github.com/your-username/opulenthost.git
cd opulenthost
```

2. Install Dependencies:

```shell
npm install
```

3. Start the Development Server:

```shell
npm run dev
```

Open localhost in your browser

### Usage

Running the project

To start the project in development mode:

```shell
npm run dev
```

Building for Production
To create an optimized production build:

```shell
npm run build
```

Previewing the Production Build

```shell
npm run preview
```

### Configuration

**TailwindCSS**
TailwindCSS is configured in tailwind.config.js. You can customize the theme, colors, and plugins as needed:

```javascript
// filepath: tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#fff9e6",
          500: "#ffd41a",
        },
      },
    },
  },
};
```

**Vite Configuration**
Aliases and plugins are configured in vite.config.js:

```javascript
// filepath: vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
```

### Project Structure
```
src/
├── assets/ # Static assets (images, styles)
├── components/ # Reusable React components
├── contexts/ # Context API for global state
├── data/ # Static data (e.g., pricing, testimonials)
├── hooks/ # Custom React hooks
├── sections/ # Page sections (e.g., Hero, Services)
├── App.jsx # Main application component
├── main.jsx # Entry point
```
### Testing

**Running Tests**

To run tests (if applicable):

```shell
npm test
```

**Troubleshooting**

- Ensure all dependencies are installed.
- Check for conflicting versions of Node.js or npm.

### Deployment

**Deploying to Vercel**

1. Install the Vercel CLI:

```shell
npm install -g vercel
```

2. Deploy the project:

```shell
vercel
```

**Deploying to Netlify**

1. Install the Netlify CLI:

```shell
npm install -g netlify-cli
```

2. Deploy the project:

```shell
netlify deploy
```

### Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:

```shell
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```shell
git commit -m "Add your message here"
```

4. Push to your branch:

```shell
git push origin feature/your-feature-name
```

5. Open a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

- React: For the powerful UI library.
- TailwindCSS: For the utility-first CSS framework.
- Framer Motion: For the smooth animations.
