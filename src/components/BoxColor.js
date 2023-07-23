import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div>
      <span style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        RGB{`(${r}, ${g}, ${b})`}
      </span>
    </div>
  );
}

export default BoxColor;
