import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moment from 'react-moment';
import 'moment-timezone';


// function Tweet() {
//     return (
//         <span>hello world</span>
//     );
// }

function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url} className="avatar" alt="avatar" />
    );
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    // const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {/* {timeString} */}
        </span>
    );
};


var testTweet = {
    message: "Something about cats.", gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};

function Message({ text }) {
    return (
        <div className="message"> {text}</div>
    );
}

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <NameWithHandle author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    {/* <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton /> */}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Tweet tweet={testTweet} />, document.querySelector('#root')
);

// ReactDOM.render(
//     <Tweet />, document.querySelector('#root')
// );