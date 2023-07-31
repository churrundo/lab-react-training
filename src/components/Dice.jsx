function Dice(props) {
  return (
    <img
      src={
        props.diceFace ? props.faces['face' + props.diceFace] : props.faceEmpty
      }
      onClick={props.rollDice}
      alt={props.diceFace}
    />
  );
}

export default Dice;
