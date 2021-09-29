import Button from '@mui/material/Button';
import { FaHistory, FaPlay } from 'react-icons/fa';

let randomselection = (selectedLetters, notSelectedLetters) => {
  if (selectedLetters.length === 26) {
    return;
  }
  var item =
    notSelectedLetters[Math.floor(Math.random() * notSelectedLetters.length)];

  notSelectedLetters = notSelectedLetters.filter((e) => e !== item);
  selectedLetters.push(item);
  return [selectedLetters, notSelectedLetters];
};

let undoselection = (selectedLetters, notSelectedLetters) => {
  if (selectedLetters.length === 0) {
    return;
  }
  let item = selectedLetters[selectedLetters.length - 1];
  selectedLetters = selectedLetters.slice(0, selectedLetters.length - 1);
  notSelectedLetters.push(item);
  return [selectedLetters, notSelectedLetters];
};

function Buttons(props) {
  console.log(props.selectedLetters.length);
  return (
    <div id="button-container">
      <Button
        disabled={props.selectedLetters.length === 26}
        onClick={() => {
          let result = randomselection(
            props.selectedLetters,
            props.notSelectedLetters
          );
          props.setSelected(result[0]);
          props.setNotSelectedLetters(result[1]);
        }}
        id="extract"
        variant="contained"
        startIcon={<FaPlay />}
      >
        Estrai
      </Button>
      <Button
        disabled={props.selectedLetters.length === 0}
        onClick={() => {
          let result = undoselection(
            props.selectedLetters,
            props.notSelectedLetters
          );
          props.setSelected(result[0]);
          props.setNotSelectedLetters(result[1]);
        }}
        id="undo"
        variant="outlined"
        endIcon={<FaHistory />}
      >
        Annulla
      </Button>
    </div>
  );
}
export default Buttons;
