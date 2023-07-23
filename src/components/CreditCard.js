import React from 'react';

function CreditCard({ props }) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    height: '200px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    padding: '20px'
  };

  const lastFourDigits = number.slice(-4);

  const formattedMonth =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;


  return (
    <div style={cardStyle}>
      <div>{type}</div>
      <div>**** **** **** {lastFourDigits}</div>
      <div>
        Expires {formattedMonth}/{expirationYear.toString().slice(2)} {bank}
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
