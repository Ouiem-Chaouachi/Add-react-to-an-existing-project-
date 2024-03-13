# How to add React to existing project
* we need to install [Node.js](https://nodejs.org/en)

 * React is where the JSX defined so we need to install and import React in order for JSX to work
 ~~~bash
 npm install react 
 ~~~
 ~~~jsx
 import React from "react"
 ~~~
* Babel : Used for compiling modern JavaScript code into a format that browsers can understand. babel-preset-react-app: Default preset for Babel in create-react-app, includes necessary plugins for React, but we didnt start our react app with create-react-app so we need to add it in devdependencies

~~~bash 
  npm install --save-dev babel-preset-react-app
~~~
 * To use ReactDOM, we need to install and import it from react-dom
 ~~~bash
 npm install react-dom
 ~~~
 ~~~jsx
 import ReactDOM from "react-dom"
 ~~~

* To be able to start our app, we need to add a script to package.json to start our react project
~~~
  "scripts": {
    "start": "react-scripts start"
  }
~~~
* Before that we install react-scripts
~~~bash 
npm install react-scripts
~~~
* now we run 
~~~bash
npm start
~~~
* we can add all these scripts to package.json
~~~json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}

~~~
* restructure our project files to respect this architecture in order to make it work
~~~bash
/path/to/your-project/
    ├── public/
    │   └── index.html
    ├── src/
    │   └── ...other React source files...
    ├── node_modules/
    │   └── ...installed packages...
    ├── package.json
    └── ...other project files...
~~~
* we need to drag and drop index.htm in new folder we call public and index.js and index.css in a new folder called src

* Now we run 
~~~bash
npm start
~~~
we get this question on terminal
~~~bash
? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? › (Y/n)
~~~
react-scripts will proceed with creating the necessary configurations. This process ensures that your React app is set up with the appropriate browser compatibility settings for development and production builds.


* Compiled successfully!! 🎉


# Note


ReactDOM.render is not supported in React 18.
Use <mark> createRoot </mark> instead.

changes are 
~~~
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root")).render(navbar)
~~~


