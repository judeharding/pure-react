import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PropTypes from 'prop-types';


// ex3 credit card exercise


function BankName(bankName) {
    return (
        <div className="bank">
            <span>
                Big Bank, Inc. <br />
            </span>
        </div>
    );
}

function CcNumber(ccNumber) {
    return (
        <div className="ccnumber">
            <span>
                1234 5678 9101 2134 <br />
            </span>
        </div>
    );
}

// //REQUIRING Components and the data expected (example)
// CcNumber.propTypes = {
//     ccNumber: PropTypes.number.isRequired
// }

function ExpDate(expDate) {
    return (
        <div className="date">
            <span>
                Valid Thru<br />
                01/19 <br />
            </span>
        </div>
    );
}

function PersonName(personName) {
    return (
        <div className="name">
            <span>
                CARDHOLDER NAME <br />
            </span>
        </div>
    );
}



function CreditCard(personName, expDate, ccNumber, bankName) {
    return (
        <div className="card">
            <PersonName />
            <ExpDate />
            <CcNumber />
            <BankName />
        </div >
    )
}



ReactDOM.render(
    <CreditCard label={CreditCard} />, document.querySelector('#root')
);



