# GIC CodeToImpact Team 5 Frontend README

## Introduction
Welcome to the frontend repository of the GIC CodeToImpact Team 5 application! This repository contains the code for the frontend part of our multi-container app. Here, we'll guide you through getting started, project structure, setting up the development environment, and running the frontend application.
Table of Contents

- [GIC CodeToImpact Team 5 Frontend README](#gic-codetoimpact-team-5-frontend-readme)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Setting Up](#setting-up)

## Getting Started

Before you dive into the code, here's what you need to know to get started with our frontend.

You can find the backend README [here](https://github.com/gic-codetoimpact-team5/codetoimpact-team5).

Project Structure

Our frontend project is organized as follows:

frontend/
├─ public/
│ ├─ index.html
│ └─ (other static files)
├─ src/
│ ├─ app/pages/
│ ├─ components/
| |─ contexts/
│ ├─ styles/
| |─ tests/
│ ├─ theme/
│ ├─ types/
│ ├─ utils/
│ ├─ variables/
│ ├─ tsconfig.json
│ ├─ next.config.js
│ ├─ package.json
│ └─ README.md
├─ .gitignore
├─ package.json
└─ (other configuration files)

- `public/`: Contains static assets and the main HTML file.
- `src/`: Contains Next.js pages, components, styles, and configuration files.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Contains project dependencies and scripts.
- `README.md`: This file, which provides information about setting up and running the frontend.

## Setting Up

To set up the development environment for our frontend app, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/gic-codetoimpact-team5/frontend.git
   cd frontend
   ```

2. Install the required dependencies by running:

    ```bash
    yarn install
    ```

3. Running the App

    ```bash
    yarn dev
    ```

This will start a development server, and you can access the frontend in your web browser at http://localhost:3000. The development server will automatically reload the app whenever you make changes to the code.