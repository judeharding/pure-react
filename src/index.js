import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


// ex3 credit card exercise

function Stamp({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url} className="stamp" alt="stamp" />
    );
}

function ToPerson(toPerson) {
    return (
        <div className="to">
            <span>
                TO Name <br />
                123 Fake St.<br />
                Boston, MA 02118
            </span>
        </div>
    );
}

function FromPerson(fromPerson) {
    return (
        <div className="from">
            <span>
                FROM Name <br />
                123 Fake St.<br />
                Boston, MA 02118
            </span>
        </div>
    );
}

//REQUIRING Components and the data expected (example)
FromPerson.propTypes = {
    from: PropTypes.string.isRequired
}


function Envelope(toPerson, fromPerson) {
    return (
        <div className="envelope">
            <FromPerson />
            <ToPerson />
            <Stamp />
        </div >
    )
}


//Envelope to the index html
ReactDOM.render(
    <Envelope label={Envelope} />, document.querySelector('#root')
);

