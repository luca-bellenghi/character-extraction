import { ALPHABET } from './const';
import { FaTrashAlt } from 'react-icons/fa';

function ResetButton(props) {
  return (
    <div className="reset">
      <button
        className="reset-link"
        onClick={() => {
          if (window.confirm('Vuoi azzerare le estrazioni?')) {
            props.setSelected([]);
            props.setNotSelectedLetters(ALPHABET);
          }
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default ResetButton;
