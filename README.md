# Pixi Boilerplate
Takes care of loading assets and intiliazing the scene. Just drop your images and sounds, set your viewport size and start coding.

Includes:
* 📦 Bundling via Webpack
* 🏝 Scene management
* ✨ Out of the box loader with progress bar, see `src/scenes/Splash.js`
* 📐 Viewport fitting and resize handling, see `Application.setupViewport()` in `src/core/Application.js`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm start`.


After starting the development server with `npm start`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

### Code Linter

Eslint is used to ensure a unified code base. Feel free to edit the config in `.eslintrc.json` as per your needs.
To run the linter and fix some problems automatically use
```
npm run lintfix
```
## Customizing Template

### Babel
You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "1%" but excludes IE11 and Opera Mini.

  ```
  "browsers": [
    ">1%",
    "not ie 11",
    "not op_mini all"
  ]
  ```

### Webpack
If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json`.

## Deploying Code
After you run the `npm run build` command, your code will be built into a single bundle located at 
`dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), 
you should be able to open `http://mycoolserver.com/index.html` and play your game.
