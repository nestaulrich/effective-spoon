// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from 'react';
import ReactDom from 'react-dom';
import './Style.css';

// Some Examples of Styling JSX elements
const listStyle = {
    color: 'blue',
    fontSize: '12px'
}

function MyInfo() {
    return<div>
      <h1>Greg Ulrich</h1>
      <p>I'm learning to code with React. I am still not sure how it's used
         but I'm sure that will become apparent in time.</p>
      <br></br>
      <h2 style={{color:'green'}}>Places I've been</h2>
      <ul style={listStyle}>
          <li>Argentina</li>
          <li>Bali</li>
          <li>Vietnam</li>
      </ul>
    </div>
}
ReactDom.render(<MyInfo />, document.getElementById("root"))