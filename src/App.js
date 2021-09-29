import './App.css';
import { useState } from 'react';
import ResetButton from './ResetButton';
import AvailableLetters from './AvailableLetters';
import Buttons from './Buttons';
import ExtractedLetters from './ExtractedLetters';
import { ALPHABET } from './const';

function App() {
  const [selectedLetters, setSelected] = useState([]);
  const [notSelectedLetters, setNotSelectedLetters] = useState(ALPHABET);

  return (
    <div className="App">
      <ResetButton
        setSelected={setSelected}
        setNotSelectedLetters={setNotSelectedLetters}
      />
      <AvailableLetters selectedLetters={selectedLetters} />
      <Buttons
        selectedLetters={selectedLetters}
        notSelectedLetters={notSelectedLetters}
        setSelected={setSelected}
        setNotSelectedLetters={setNotSelectedLetters}
      />
      <ExtractedLetters selectedLetters={selectedLetters} />
    </div>
  );
}

export default App;
