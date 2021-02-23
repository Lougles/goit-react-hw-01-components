import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//=============================================================
// const link = React.createElement(
//   'a',
//   { href: 'reactjs.org', target: '_blank' },
//   'Ссылка'
// );

// const jsxLink = <a href="reactjs.org">Ссылка</a>

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root"));
//=============================================================


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);