This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


/////



{/* here is a jsx comment */ }
{
    // Double-slash comments are
    // OK in multi-line blocks.
}



BASIC RECIPE  

4-step process:
1. Make a sketch of the end result
2. Carve up the sketch into components 
3. Give the components names
4. Write the code!


A.)  HTML doc has a DIV in it called ROOT

B.)  JS file has this basic code below:


import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() { 
    return (
    <div>Hello World!</div>
    ); 
}

ReactDOM.render( <HelloWorld/>,
    document.querySelector('#root'));

/////  (or more advanced code like:)

var posterContent = {
  title: "Star Wars",
  caption: "Best movie ever..."
};

function Poster({ posterStuff }) {
  var { title, caption } = posterStuff;

  return (  // NOTE if you don't wrap the return in parens, 
            // you have to keep everthing being returned on one line
    <div>
      <span>{title}</span><span>{caption}</span>
    </div>

    // PS -- if you need to show table cells, you will need to 
    // wrap them in a <React.Fragment> <td> xxx </td> 
    // b/c they are direct descendants of a tr and w/out this, 
    // your DOM gets messed up -- 
    // and you will have to import React, {Fragment} from 'react';
  );
}

ReactDOM.render(
  <Poster posterStuff={posterContent}/>,
  document.querySelector("#root")
);

START thinking of components like small tables
  TblBook contains a title, author, isbn fields

