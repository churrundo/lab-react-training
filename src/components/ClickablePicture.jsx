function ClickablePicture({ img, clickedImg, glassesOn, toggleGlasses }) {
  return (
    <img
      onClick={toggleGlasses}
      src={glassesOn ? img : clickedImg}
      alt={glassesOn ? 'Maxence' : 'The Cooler Maxence'}
    />
  );
}

export default ClickablePicture;
