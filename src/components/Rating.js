import React from 'react';

function Rating({ children }) {
  let rating = Math.round(children);
  let stars = '';
  
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return <div>{stars}</div>;
}

export default Rating;