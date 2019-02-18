import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Email({ emailInfo }) {
    var { checkbox, pushpin, sender, subject, date, blurb } = emailInfo;

    return (
        <div className="email">
            <div className="checkbox-container">
                <img alt="checkbox" src={checkbox} />
            </div>
            <div className="pushpin-container">
                <img alt="pushpin" src={pushpin} />
            </div>
            <div className="sender">
                {sender}
            </div>
            <div className="subject">
                {subject}
            </div>
            <div className="date">
                {date}
            </div>
            <div className="blurb">
                {blurb}
            </div>
        </div>
    );
}



var emailInfo = {
    checkbox: "http://chittagongit.com/images/check-icon-small/check-icon-small-10.jpg",
    pushpin: "https://previews.123rf.com/images/oksanaoo/oksanaoo1708/oksanaoo170800069/83718432-vector-icon-red-push-pin-.jpg",
    sender: "React Newsletter",
    subject: "React Newsletter - Issue 36",
    date: "July 15",
    blurb: "React Newsletter Issue 36 - July 15th 2016 Read this issue on the web at http://www.react.com"
};

ReactDOM.render(
    <Email emailInfo={emailInfo} />,
    document.getElementById('root')
);
