// import React from 'react';
// import ReactDOM from 'react-dom';

// function HelloWorld() {
//     return (
//         <div>
//             <Hello />
//             <World /> !
//             <NameCells />
//             <li> raw text no quote</li>
//             raw text no quote
//         </div>
//     );
// }

// function Hello() {
//     return (
//         <span>Hello</span>
//     );
// }

// function World() {
//     return (
//         <span>World!!</span>
//     );
// }

// function NameCells() {
//     return (
//         // do not need the table tag
//         <React.Fragment>
//             <table>
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                 </tr>
//                 <tr>
//                     <td>mike</td>
//                     <td>harding</td>
//                 </tr>
//             </table>
//         </React.Fragment>
//     );
// }

// ReactDOM.render(
//     <HelloWorld />,
//     document.querySelector("#root")
// );

// EXERCISES
import React from 'react';
import ReactDOM from 'react-dom';

// function MyThing() {
//     // ...
//     return (
//         <span>
//             <div className='book'>
//                 <div className='title'>
//                     The Title
//                 </div>
//                 <div className='author'>
//                     The Author
//                 </div>
//                 <ul className='stats'>
//                     <li className='rating'> 5 stars</li>
//                     <li className='isbn'> 12-345678-910</li>
//                 </ul>
//             </div>
//             <div>
//                 Newline
//                          Test
//             </div>
//             <div>
//                 Empty
//                 <span>Newlines</span>

//                 <span>Here</span>
//             </div>
//             <div>
//                 &nbsp;Non-breaking
//                 &nbsp;Spaces&nbsp;
//             </div>
//             <div>
//                 Line1 {' '} Line2
//             </div>
//         </span>
//     );
// }
// ReactDOM.render(
//     <MyThing />, document.getElementById('root')
// );
// *******************************

// const e = React.createElement;

// ReactDOM.render(
//     e('div', null, 'Xxx'),
//     document.getElementById('root')
// );


// function Greeting() {
//     // Try all of these variations: //let username = "root";
//     //let username = undefined; //let username = null;
//     //let username = false;
//     // Fill in the rest:
//     // return (...)
// };

// function Xxx() {
//     let username = undefined;
//     return (
//         <div>
//             username;
//         </div>
//     );
// };

// ReactDOM.render(
//     <Xxx />, document.getElementById('root')
// );


function Data() {
    return (
        <React.Fragment>
            <td>mike</td>
            <td>harding</td>
            <td>12/77</td>
        </React.Fragment>
    );
};

function MyTable() {
    return (
        // do not need the table tag
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Bday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>mike</td>
                        <td>harding</td>
                        <td>12/7</td> */}
                        <Data />
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};


ReactDOM.render(
    <MyTable />, document.getElementById('root')
);