import Header from "./Header";
import InputCharacterFilter from "./Filters/InputCharacterFilter";
import SelectHouseFilter from "./Filters/SelectHouseFilter";
import CharactersList from "./CharacterInfo/CharactersList";

import PropTypes from 'prop-types';

const Landing = ({originalCharacters, setCharacters, setCharactersHouse, characters, characterInput, setCharacterInput, charactersHouse}) => {
    return(
        <>
            <Header/>
            <form className='form' action="" onSubmit={ev => {ev.preventDefault();}}>
                <InputCharacterFilter originalCharacters={originalCharacters} setCharacters={setCharacters} characterInput={characterInput} setCharacterInput={setCharacterInput} />
                <SelectHouseFilter setCharactersHouse = {setCharactersHouse} charactersHouse = {charactersHouse} />
            </form>

            <CharactersList characters = {characters} />

        </>
    )
}

Landing.propTypes = {
    originalCharacters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func,
    setCharactersHouse: PropTypes.func,
    characters: PropTypes.array.isRequired,
    characterInput: PropTypes.string.isRequired,
    setCharacterInput: PropTypes.func,
    charactersHouse: PropTypes.string.isRequired
};

export default Landing;