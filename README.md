# Introduction

This repository represents my portfolio. It's hosted with GitHub Pages at https://www.diamonacharya.com. 

## Technical Details 
- Had to install the 'gh-pages' npm package. Running the command 'gh-pages -d dist' pushes the files in your 'dist' folder to the 'gh-pages' branch of your repository. This branch is automatically created when this command is first run. 
- By default, GitHub Pages makes your site available at https://<username>.github.io/<repo-name>. I had to buy a custom domain name from a third party registrar, and add an ALIAS record mapping my custom url to diamondacharya.github.io. I also had to input my custom url into the 
GitHub Pages Settings section of my GitHub repo. GitHub provided me the option to enforce HTTPS, so I didn't have to buy the SSL encryption add-on from the registrar. 

## How to deploy 

Run the 'yarn deploy' command from the main branch -- this is an alias to the 'gh-pages -d dist' command. This first builds the application by running the 'yarn predeploy' command. The production ready build output is placed in the 'dist' folder. The contents of this dist folder are then pusehd to the gh-pages branch of your repository. This almost immediately updates your production site. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
