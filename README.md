# 3D for Web Starter Environment

A minimalist starter project configured with **Three.js**, **Webpack**, and **Webpack CLI**. This setup provides a solid foundation for developing 3D web applications with modern tooling.

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
- [Dependencies](#dependencies)
  - [Three.js](#threejs)
  - [Webpack](#webpack)
  - [Webpack CLI](#webpack-cli)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

You can download Node.js from the [official website](https://nodejs.org/).

### Clone the Repository

First, clone the repository to your local machine using `git`:

```bash
git clone https://github.com/Eddy-Sensei/Starter-ENV.git

cd starter-ENV
```

### Install Dependencies

Install the necessary dependencies using `npm`:

```bash
npm install
``` 
This command will install all the required packages listed in the `package.json` file, including **Three.js**, **Webpack**, and **Webpack CLI**.

## Dependencies

### Three.js

[Three.js](https://threejs.org/) is a powerful JavaScript 3D library that makes creating and displaying animated 3D graphics in the browser easy.

**Installation:**

Three.js is included in the `dependencies`. If you need to install it separately, use:

```bash
npm install three
```

### Webpack

[Webpack](https://webpack.js.org/) is a static module bundler for modern JavaScript applications. It bundles JavaScript files for usage in the browser.

**Installation:**

Webpack is included in the `devDependencies`. To install it manually:

```bash
npm install --save-dev webpack
```

### Webpack CLI

[Webpack CLI](https://github.com/webpack/webpack-cli) provides a command line interface for Webpack, allowing you to interact with Webpack in the terminal.

**Installation:**

Webpack CLI is included in the `devDependencies`. To install it manually:

```bash
npm install --save-dev webpack-cli
``` 

## Usage

To start the development server and run the project locally:

```bash
npm run dev
```

This command will build your project and start the Webpack Dev Server. Open your browser and navigate to `http://localhost:8080/` to view the application.

## Project Structure

```bash
Starter-ENV/
├── bundler/
│ ├── webpack.common.js
│ ├── webpack.dev.js
│ └── server.js
├── src/
│ ├── app.js
│ ├── index.html
│ └── style.css
├── static/
├── dist/ 
├── package.json
└── README.md
```

- **bundler/**: Contains Webpack configuration files.
- **src/**: Source files for your application.
- **static/**: (Optional) Directory for static assets to be copied to `dist/`.
- **dist/**: Directory where the production build files are generated.
- **package.json**: Lists project dependencies and scripts.
- **README.md**: Project documentation.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project as per the license terms.

---
