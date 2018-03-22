import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';




// const paint = () => {
//   const time = React.createElement('time', null, `Time is ${new Date().toLocaleTimeString()}`);
//   const component = React.createElement('h1', null, 'Hello, react easycode! ', time);
//   ReactDom.render(component, document.getElementById('app'));
// };
//
// setInterval(paint, 500);



const component = (
  <React.Fragment>
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);
ReactDom.render(component, document.getElementById('app'));
