---
sidebar_label: 'Prequisites'
sidebar_position: 1
---
# Prerequisites

This guide covers the required prerequisites needed to begin development for the DAU Website. These include the required packages, software, installations, and tools that are nessesary to set up the tech stack.

Ensure you have the following tools and prerequisites set up on your development environment.

## 1. Node.js

Next.js requires Node.js to run. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side.

### Installation

- **Windows/MacOS/Linux**: You can download Node.js from the [official Node.js website](https://nodejs.org/). Choose the LTS version for the best stability.

- **Using a Package Manager**: You can also install Node.js using a package manager like Homebrew (for **MacOS**).
    Links:
    - Homebrew: https://brew.sh/
  
  **MacOS:**
  ```bash
  brew install node
  ```

### Verify Installation

After installing, you can verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
```

## 2. npm (Node Package Manager)

Npm is the default package manager for Node.js. It allows you to install and manage packages (libraries) that you can use in your projects.
    - https://www.npmjs.com/
### Included with Node.js

Npm is installed automatically with Node.js, so you don't need to install it separately. You can check the version of npm installed by running:

```bash
npm -v
```

## 3. VSCode (Visual Studio Code)

Visual Studio Code is a powerful, open-source code editor developed by Microsoft. It is highly recommended for developing Next.js applications due to its extensive features and extensions.

### Installation

- **Windows/MacOS/Linux**: You can download Visual Studio Code from the [official VSCode website](https://code.visualstudio.com/).


- **For macOS users only**: Follow the instructions below to configure vscode for terminal
1. Launch VS Code.
2. Open the Command Palette (Cmd+Shift+P)
3. type 'shell command' to find the Shell Command: 'Install 'code' command in PATH command' and select.
    - your OS will ask you to enter your password which is fine

From here, if you navigate into a another directory and type ```code .``` a new vscode window will open in the directory you navigated into.
### Recommended Extensions

Here are some useful extensions in VSCode:

- **ESLint**: Integrates ESLint into VSCode.
- **Live Server**: Right click html file and select a live server.
- **Prettier - Code formatter**: An opinionated code formatter.
- **vscode-styled-components**: Syntax highlighting for styled-components.
- **Tailwind Intellisense**: Speed up TailwindCSS coding
- **JavaScript (ES6) code snippets**: Code snippets for JavaScript ES6.


