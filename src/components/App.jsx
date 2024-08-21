import '../styles/App.scss';

import CharacterDetail from './CharacterInfo/CharacterDetail';
import Landing from './Landing';

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [originalCharacters, setOriginalCharacters] = useState([]);

  const [characters, setCharacters] = useState(originalCharacters);

  const [charactersHouse, setCharactersHouse] = useState('gryffindor');

  const [characterInput, setCharacterInput] = useState('');

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${charactersHouse}`)
      .then((response) => response.json())
      .then((responseData) => {
        setOriginalCharacters(responseData);
        setCharacters(responseData);
      });
  }, [charactersHouse]);

  const findCharacter = (id) => {
    const characterToShow = characters.find(
      (character) => character.id === id
    );
    return characterToShow;
  };

  return (
    <>
      <Routes>
        <Route
            path="/"
            element={
              <Landing
                originalCharacters={originalCharacters}
                setCharacters={setCharacters}
                setCharactersHouse={setCharactersHouse}
                characters={characters}
                characterInput={characterInput}
                charactersHouse={charactersHouse}
                setCharacterInput={setCharacterInput}
              />
            }
        />

        <Route
          path="/detail/:id"
          element={<CharacterDetail findCharacter = {findCharacter}/>}
        />
      </Routes>
    </>
  )
}

export default App;
