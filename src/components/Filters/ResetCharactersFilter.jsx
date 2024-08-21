import PropTypes from 'prop-types';

const ResetCharactersFilter = ({setCharacters, setOriginalCharacters, setCharacterInput, setCharactersHouse}) => {

    const resetCharacters = (house) => {
                       
        fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((responseData) => {
        setOriginalCharacters(responseData);
        setCharacters(responseData);
      });

      setCharacterInput('');
      setCharactersHouse('Gryffindor');
    }

    return(
        <button className="complementary__filters--btn" onClick={() => resetCharacters('gryffindor')}>Reset</button>
    )
}

ResetCharactersFilter.propTypes = {
    setCharacters: PropTypes.func,
    setOriginalCharacters: PropTypes.func,
    setCharacterInput: PropTypes.func,
    setCharactersHouse: PropTypes.func
}

export default ResetCharactersFilter;