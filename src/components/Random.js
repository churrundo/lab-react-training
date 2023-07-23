import React from 'react';

function Random({ min, max }) {
    const result = Math.floor(Math.random()*(max-min+1)+min)
  return (
    <div>
      <p>A random number: {result}</p>
    </div>
  );
}

export default Random