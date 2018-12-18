import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ex1

// function AddressLabel(person) {
//     return (
//         <span>
//             Full Name <br />
//             123 Fake St.<br />
//             Boston, MA 02118
//         </span>
//     );
// }

// //AddressLabel to the index html
// ReactDOM.render(
//     <AddressLabel person={AddressLabel} />, document.querySelector('#root')
// );

// ex2

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


