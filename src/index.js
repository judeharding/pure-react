import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

var cardInfo = {
    bankName: "Big Bank, Inc.",
    cardNumber: "1234 5678 8765 4321",
    expirationDate: "8/19",
    name: "Cardholder Name"
};

function Logo({ hash }) {
    var url = `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwit-Kbw77ngAhUQ16wKHed1DBgQjRx6BAgBEAU&url=https%3A%2F%2Ffacebook.github.io%2Fcreate-react-app%2Fdocs%2Fadding-images-fonts-and-files&psig=AOvVaw0cTBsbOlpNSgy7BgtTxRu_&ust=1550187307767404{hash}`;
    return (
        <img src={url} className="logo" alt="logo" />
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

function CreditCard({ card }) {
    var { name, cardNumber, expirationDate, bankName } = card;
    return (
        <div className="poster">
            <div className="bank-name">{bankName}</div>
            <div className="logo">{cardNumber}</div>
            <div className="first-four-digits">{cardNumber.substring(0, 4)}</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> {expirationDate}
            </div>
            <div className="name">{name}</div>
        </div>
    );
}

ReactDOM.render(
    <CreditCard card={cardInfo} />,
    document.getElementById('root')
);
