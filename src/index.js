import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function AddressLabel(person) {
    return (
        <span>
            Full Name <br />
            123 Fake St.<br />
            Boston, MA 02118
        </span>
    );
}


//Tweet to the index html
ReactDOM.render(
    <AddressLabel person={AddressLabel} />, document.querySelector('#root')
);
