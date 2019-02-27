
import React from 'react';
import PropTypes from 'prop-types'; //for data validation
import ReactDOM from 'react-dom';
import './index.css';

var varInfo = {
    keyOne: "Big Bank, Inc.",
    keyTwo: "1234 5678 8765 4321",
    keyThree: "8/19",
    keyFour: "Cardholder Name"
};

// data validation
ComponentName.propTypes = {
    prop: PropTypes.shape({
        keyOne: PropTypes.string.isRequired,
        keyTwo: PropTypes.string.isRequired,
        keyThree: PropTypes.string.isRequired,
        keyFour: PropTypes.string.isRequired
    }).isRequired
};

function IconButton({ children }) {
    return (
        <button>
            <i className="fas fa-bullseye" />
            {/* below takes the text as a children prop b/c it will not be explicitly passed*/}
            {children}
        </button>
    );
}


function ComponentName({ prop }) {
    var { keyOne, keyTwo, keyThree, keyFour } = prop;
    //MUST HAVE A RETURN
    return (
        // Could return below but it would be without css styling and it is only one element
        // Make sure you wrap your return in span or div or React.Fragment tags to make it 1 thing
        // return <span> <ComponentName /> </span>

        //CAN ONLY RETURN 1 THING
        <div className="box">
            <div className="bank-name">{keyOne}</div>
            <div className="card-number">{keyTwo}</div>
            <div className="first-four-digits">{keyTwo.substring(0, 4)}</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> {keyThree}
            </div>
            <div className="name">{keyFour}</div>
            {/* don't forget to add the font awsome cdn to the head of the html */}
            <div> <i className="fas fa-apple-alt"></i> </div>
            <div> <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" /> </div>
            <IconButton children={"   Do The Thing"}></IconButton>

        </div>
    );
}

// you can insert real JS expressions within JSX by wrapping it in braces
// you can return an IF stmt by using terniary <span>{isValid ? 'valid' : 'not valid'}</span>

//renders everything above to the index.html
ReactDOM.render(
    <ComponentName prop={varInfo} />,
    document.getElementById('root')
);


// var posterContent = {
//     title: "Star Wars",
//     caption: "Best movie ever..."
//   };

//   function Poster({ posterStuff }) {
//     var { title, caption } = posterStuff;

//     return (
//       <div>
//         <span>{title}</span><span>{caption}</span>
//       </div>
//     );
//   }

//   ReactDOM.render(
//     <Poster posterStuff={posterContent}/>,
//     document.querySelector("#root")
//   );