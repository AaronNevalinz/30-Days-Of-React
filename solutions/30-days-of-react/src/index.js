import React from 'react';
import ReactDOM from 'react-dom';

const welcome = 'Welcome to 30 Days of React';
const title = 'Getting Started React';
const subTitle = 'Javascript Library';
const author = {
  firstName:'Aaron',
  lastName:'Nevalinz'
};

const date = 'Oct 22, 1998';

const header =(
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
);

// jsx, elements --- main
const techs = ['HTML', 'CSS', 'JAvascript']
const teahsFormatted = techs.map(tech=><li>{tech}</li>);

const main = (
  <main>
    <div className="main-wrapper">
      <p>Prerequiste to get started with Reactjs:</p>
      <ul>{teahsFormatted}</ul>
    </div>
  </main>
);


const footer = (
  <footer>
   <div className="footer-wrapper">
      <p>Copyright 2023</p>
   </div>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);