import { ALPHABET } from './const';
import DrawChar from './DrawChar';

function AvailableLetters(props) {
  return (
    <>
      <h2> Lettere da estrarre</h2>
      <div id="letters-container">
        {ALPHABET.map((letter) => (
          <div
            key={letter}
            className={`letter letter-${letter} ${
              props.selectedLetters.indexOf(letter) > -1 ? 'extracted' : ''
            }`}
          >
            <DrawChar letter={letter} />
          </div>
        ))}
      </div>
    </>
  );
}
export default AvailableLetters;
