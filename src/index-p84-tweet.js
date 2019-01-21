import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';



// function Tweet() {
//     return (
//         <span>hello world</span>
//     );
// }

// Avatar Begin
function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url} className="avatar" alt="avatar" />
    );
}
Avatar.propTypes = { hash: PropTypes.string };
// Avatar End

// Avatar Name and Handle Begin
function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}
NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};
// Avatar Name and Handle End


// Time Begin
const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};
Time.propTypes = { time: PropTypes.string };
// Time End

// Test Tweet Begin
var testTweet = {
    message: "Something about cats.", gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2018-07-30 21:24:37"
};

function Message({ text }) {
    return (
        <div className="message"> {text}</div>
    );
}
Message.propTypes = { text: PropTypes.string };
// Test Tweet End


// Buttons Begin
const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
);


const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span>
);
LikeButton.propTypes = { count: PropTypes.number };


const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);
// Buttons End

// Structure of each tweet Begin
function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <NameWithHandle author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}
Tweet.propTypes = { tweet: PropTypes.object };

// Tweet.PropTypes.shape({           // my attempt at the shape prototype
//     Avatar: PropTypes.string,
//     Time: PropTypes.string,
//     Message: PropTypes.string,
// })
// Structure of each tweet End

//Tweet to the index html
ReactDOM.render(
    <Tweet tweet={testTweet} />, document.querySelector('#root')
);

// ReactDOM.render(
//     <Tweet />, document.querySelector('#root')
// );