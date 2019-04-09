import React from 'react';

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

export default MyInfo