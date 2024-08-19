import PropTypes from 'prop-types';

import { deleteAccents } from '../Utils/deleteAccents';

const InputCharacterFilter = ({ originalCharacters, setCharacters }) => {

    const handleCharacterFilterName = (ev) => {
        const filteredCharacter = deleteAccents(ev.currentTarget.value);
    
        const filteredCharacters = originalCharacters.filter(character => 
            deleteAccents(character.name).toLowerCase().includes(filteredCharacter.toLowerCase())
        );
    
        setCharacters(filteredCharacters);
    }

    return(
        <label htmlFor="" className="input__label">
          <span className="input__label--text">Buscar por personaje:</span>
          <input type="text" className="text__input" onInput={handleCharacterFilterName} />
        </label>
    )
}

InputCharacterFilter.propTypes = {
    originalCharacters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired,
};

export default InputCharacterFilter;