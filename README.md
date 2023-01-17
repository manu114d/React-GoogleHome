# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!-- FOLDER STRUCTURE -->
<!-- Npm is a tool that use to install packages. Npx is a tool that use to execute packages. -->

<!-- 1. ReadMe.md file. It is like a document where we can write the important notes related to our react app -->

<!--2. .gitignore. It tells the git which files to ignore(not include) while the project is commiting in github repository -->

<!--3. node modules. It containes all the packages(in-built functionalities and methods) and dependencies-->
<!-- Dependencies: code which is extracted from other project. A dependency is just a package that your project uses. Very few javascript projects are entirely self-contained. When your project needs code from other projects in order to do its thing, those other projects are “dependencies”; your project depends on them to run.-->


<!-- 4.package.json: It contains the list of all dependencies that have been installed in the app 
package.json = meta data associated with the app + dependencies info + scripts-->

<!-- 5. package-lock.json: It keeps the track of exact version of every package that is installed in the react app. It containes the history(updates) of every package installed-->

<!-- 6. public: It containes the static files. -->
<!-- public folder files : 1)favicon.icon, It is the favicon of our app/websites 
                           2)index.html, This is the main file that opens in our browser and holds the html templete of our app
                           3) manifest.json, It provides the info about the app(name, author, icon and description) in a json text file in public folder. The purpose of the manifest is to install webapplication to the home screen of the users device -->

<!-- 7. src(most important): This where you do the coding of your app, In this folder you place all your files related to development like pages/components, css files, images etc; 
1) app.css -> It is a css file that contain css related to app.js,and It can also be used globally.
2) app.js -> It the parent component of the react app and by default it containes the basic component code.
3)app.test.js -> It is a test file and containes a basic test for app.js component.
4)index.css -> It is a css file that contain css related to index.js(also can be used globally).
5)index.js -> It is actually an entry point of our react app it is where you render the main react component onto the root element.
6)logo.svg -> logo of react rotating on the screen when you first run the app.
7)reportWebVitals.js -> create-react-app includes a built-in tool for measuring the real-life performance of your app.
-->

