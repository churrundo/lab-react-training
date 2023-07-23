import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <h2>{lastName}, {firstName}</h2>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toDateString()}</p>
      <img src={picture} alt={`${firstName} ${lastName}`} />
    </div>
  );
}

export default IdCard;