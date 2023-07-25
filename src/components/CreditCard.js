import React from 'react';

function CreditCard(props) {
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

  const lastFourDigits = number.slice(-4);

  const formattedMonth =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '317px',
    height: '200px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
  };

  const cardNumberStyle = {
    fontSize: '1em',
    letterSpacing: '0.5em',
  };

  return (
    <div style={cardStyle}>
      <div style={{ alignSelf: 'flex-end' }}>{type}</div>
      <div style={cardNumberStyle}>**** **** **** {lastFourDigits}</div>
      <div>
        <div>
          Expires {formattedMonth}/{expirationYear.toString().slice(2)} {bank}
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
