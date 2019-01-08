# Vnime
An anime streaming desktop app using Electron/ReactJS/Firebase.
Anime sources are from masterani.me

Add link to beta version here.

## TODO
  - User authentication persistance with node-keytar.
  - Save last watched episode on 'Faved' animes.
  - Splash screen on open.
  - Tweaks for optimization.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

### Development
### `yarn start`

Runs the app in the development mode.<br>
The react server is first served then the electron app loads the files served

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Production
### `yarn dist`

Builds the react code then packages the electron app using CRA config from electron-builder.<br>
Files are located in your /dist folder

### Other Scripts
The CRA scripts like `yarn build` `yarn test` etc.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  node_modules/
  public/
    electron.js
    index.html
    favicon.ico
    manifest.json
  src/
    actions/
      types.js
    components/
      Home.js
      Other.js
    reducers/
      index.js
    App.js
    App.test.js
    index.css
    index.js
    registerServiceWorker.js
   .env
   .gitattributes
   .gitignore
   package.json
   Procfile
   README.md
   yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/electron.js` is the Javascript entry point;
* `public/index.html` is the page template;
* `src/index.js` is the ReactJS entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.
