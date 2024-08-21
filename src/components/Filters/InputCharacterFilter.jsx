import PropTypes from 'prop-types';

import { deleteAccents } from '../Utils/deleteAccents';

const InputCharacterFilter = ({ originalCharacters, setCharacters, characterInput, setCharacterInput }) => {

    const handleCharacterFilterName = (ev) => {
        const filteredCharacter = deleteAccents(ev.currentTarget.value);
    
        const filteredCharacters = originalCharacters.filter(character => 
            deleteAccents(character.name).toLowerCase().includes(filteredCharacter.toLowerCase())
        );
        setCharacterInput(ev.currentTarget.value);
        setCharacters(filteredCharacters);
    }

    return(
        <label htmlFor="" className="input__label">
          <span className="input__label--text">Buscar por personaje:</span>
          <input type="text" className="text__input" onInput={handleCharacterFilterName} value={characterInput} />
        </label>
    )
}

InputCharacterFilter.propTypes = {
    originalCharacters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired,
    characterInput:PropTypes.string,
    setCharacterInput: PropTypes.func
};

export default InputCharacterFilter;