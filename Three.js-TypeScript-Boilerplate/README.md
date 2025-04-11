# Create Course boilerplate

Create a course boilerplate using Vite.

#### Install Vite

Open a command prompt on your system somewhere.
`npm create vite@latest`
Next, enter a project name. This will be used as the root folder name of our project.
`Three.js-TypeScript-Boilerplate`
Press Enter at the next prompt to confirm the package name. Note that it has lower-case letters and also replaced the period sign.

`? Package name: » three-js-typescript-boilerplate`

Select the `Vanilla` framework option.

And then select the `TypeScript` option.

It will scaffold a new project in a folder named `Three.js-TypeScript-Boilerplate`

We should change directory to that new folder,
`cd Three.js-TypeScript-Boilerplate`

Install required packages as shown in the new package.json file,
`npm install`
And then we can run the dev version of the project.
`npm run dev`
If all is well, we should see a message that our project is available at http://localhost:5173/

Open http://localhost:5173/ in your browser.

It shows a basic template configured for writing Vanilla JS in TypeScript.

#### Install Three.js

`npm install three --save-dev`

To support types and IDE help
`npm install @types/three --save-dev`

###### DAT GUI

It is useful tool that help to learn Three.js interadtion with 3d scene.
Source: https://github.com/dataarts/dat.gui

Install it with:
`npm install dat.gui@latest --save-dev`

Add types support
`npm install @types/dat.gui@latest --save-dev`

You can try other GUI controls:

-   lil-gui ([GitHub](https://github.com/georgealways/lil-gui))
-   tweakpane ([GitHub](https://tweakpane.github.io/docs/))
-   Fizzy Text Example ([SBEDIT](https://sbedit.net/1e64b476676f6f945af94f278a392aba642d135c))
