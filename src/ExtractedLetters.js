import DrawChar from './DrawChar';

function ExtractedLetters(props) {
  return (
    <div id="extracted-letters-containers">
      <h2> Lettere estratte</h2>
      <div
        id="last"
        className={`${props.selectedLetters.length > 0 ? 'extracted' : 'text'}`}
      >
        <span className="extracted-letter">
          {props.selectedLetters.length > 0
            ? props.selectedLetters[props.selectedLetters.length - 1]
            : 'Nessuna estrazione effettuata'}
        </span>
      </div>
      <div id="extracted-letters">
        {props.selectedLetters.length !== 0
          ? props.selectedLetters.map((letter) => (
              <div
                key={letter}
                className={`letter letter-${letter}`}
                //id={'letter-' + letter}
              >
                <DrawChar letter={letter} />
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}

export default ExtractedLetters;
