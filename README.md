# React Component Boilerplate

A simple, easy to use, production build compatible, ready to publish boilerplate for creating & publishing react components.


## Features
  * This boilerplate is pre-configured with module bundler necessary for publishing custom react components without much hassle.    
  * Simple and easy to understand config with very less dependencies.
  * Folder structure ready for creating commponent(s)/Kit
  * Simply clone, edit metadata, create new component folders under `src/components/` and ship it :rocket:


### Rollup<br/>
The module bundler that is used for creating component(s) bundle is [**Rollup**](https://rollupjs.org/guide/en). Rollup is very easy to configure and understand. It supports flat bundling which simply means taking your modules and turning them into a single bundle. Rollup is more suitable for creating libraries whereas Webpack is for apps.

### Folder Structure

#### *`dist`* <br/>
Contains **bundle.js** which is created when **build** is generated. This file remains the `main` target in package.json to be recognized by NPM registry when you publish your component and people install it.

#### *`docs`* <br/>
Will contain sample demo application of the component you have created. Following is the method I use to generate files in this folder.
1. generate a new `create-react-app` application.
2. install your published component via `yarn` or `npm`.
3. create some demo which will showcase your component.
4. execute `yarn build` to generate a build.
5. copy contents from that build folder to this docs folder.
6. lastly in your Github repo -> settings -> set GithubPages to use `docs`.

#### *`src`* <br/>
1. `components` folder with should include `your-component` folder(s) and 3 files
    * your-component.js
    * your-component.css (optional)  
    * package.json - defines entry point for that component
2. `index.js` - all the export statements for your component(s)
3. `.babelrc` - babel config

*Remaining are all config files*

### Setup
1. Clone the repository `git clone https://github.com/chaoticbit/react-component-boilerplate.git`.
2. Edit `package.json` as per your details.
3. Run `yarn eject` to cleanup **dist** and **src/components** folder which will delete demo-component files and bundle.
4. Write your new component.
5. Run `yarn build` to generate bundle in `dist`.
6. Test this component
    1. Run `yarn link` in component dir to link your created component.
    2. Generate new *create-react-app* in another directory.
    3. run `yarn link <your-component-name>` in the above created sample app.
    4. Test it.
    5. All good, then generate build the sample using `yarn build`.
    6. Copy the **build** folder contents to your component's **`docs`** folder.
7. Update *`ver`* in package.json
8. Run `npm login` if not already.
9. Run `npm publish` to publish :shipit: