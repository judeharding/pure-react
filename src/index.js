// Their WORKING code

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ card }) {
    var { name, cardNumber, expirationDate, bankName } = card;
    return (
        <div className="credit-card">
            <div className="bank-name">{bankName}</div>
            <div className="card-number">{cardNumber}</div>
            <div className="first-four-digits">{cardNumber.substring(0, 4)}</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> {expirationDate}
            </div>
            <div className="name">{name}</div>
        </div>
    );
}
CreditCard.propTypes = {
    card: PropTypes.shape({
        bankName: PropTypes.string.isRequired,
        cardNumber: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

var cardInfo = {
    bankName: "Big Bank, Inc.",
    cardNumber: "1234 5678 8765 4321",
    expirationDate: "8/19",
    name: "Cardholder Name"
};

ReactDOM.render(
    <CreditCard card={cardInfo} />,
    document.getElementById('root')
);












// MY CODE
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import PropTypes from 'prop-types';


// // ex3 credit card exercise


// function BankName(bankName) {
//     return (
//         <div className="bank">
//             <span>
//                 Big Bank, Inc. <br />
//             </span>
//         </div>
//     );
// }

// function CcNumber(ccNumber) {
//     return (
//         <div className="ccnumber">
//             <span>
//                 1234 5678 9101 2134 <br />
//             </span>
//         </div>
//     );
// }

// // //REQUIRING Components and the data expected (example)
// // CcNumber.propTypes = {
// //     ccNumber: PropTypes.number.isRequired
// // }

// function ExpDate(expDate) {
//     return (
//         <div className="date">
//             <span>
//                 Valid Thru<br />
//                 01/19 <br />
//             </span>
//         </div>
//     );
// }

// function PersonName(personName) {
//     return (
//         <div className="name">
//             <span>
//                 CARDHOLDER NAME <br />
//             </span>
//         </div>
//     );
// }



// function CreditCard(personName, expDate, ccNumber, bankName) {
//     return (
//         <div className="card">
//             <PersonName />
//             <ExpDate />
//             <CcNumber />
//             <BankName />
//         </div >
//     )
// }



// ReactDOM.render(
//     <CreditCard label={CreditCard} />, document.querySelector('#root')
// );



