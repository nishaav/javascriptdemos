import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Mukesh from './App';
// import Edu from './demo';
import JS from './ClassDemo';
import reportWebVitals from './reportWebVitals';
import same from './SameandDifferent.png';
//var comp=require('./SameandDifferent.png');
//import <aliasname> from <filename>
ReactDOM.render(
  <React.StrictMode>
   <JS name='Abarna'></JS>
  </React.StrictMode>,
  document.getElementById('root')
);
//render(whattorender,where to render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
