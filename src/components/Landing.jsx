import Header from "./Header";
import InputCharacterFilter from "./Filters/InputCharacterFilter";
import SelectHouseFilter from "./Filters/SelectHouseFilter";
import CharactersList from "./CharacterInfo/CharactersList";
import SortCharactersFilter from "./Filters/SortCharactersFilter"
import ResetCharactersFilter from "./Filters/ResetCharactersFilter";

import PropTypes from 'prop-types';

const Landing = ({setOriginalCharacters, originalCharacters, setCharacters, setCharactersHouse, characters, characterInput, setCharacterInput, charactersHouse}) => {

    return(
        <>
            <Header/>
            <form className='form' action="" onSubmit={ev => {ev.preventDefault();}}>
                <InputCharacterFilter originalCharacters={originalCharacters} setCharacters={setCharacters} characterInput={characterInput} setCharacterInput={setCharacterInput} />
                <SelectHouseFilter setCharactersHouse = {setCharactersHouse} charactersHouse = {charactersHouse} setCharacterInput={setCharacterInput}/>
            </form>
            <div className="complementary__filters">
                <ResetCharactersFilter setCharacters={setCharacters} setOriginalCharacters={setOriginalCharacters} setCharacterInput={setCharacterInput} setCharactersHouse={setCharactersHouse}/>
                <SortCharactersFilter characters={characters} setCharacters={setCharacters}/>
            </div>
            <CharactersList characters = {characters} />

        </>
    )
}

Landing.propTypes = {
    setOriginalCharacters: PropTypes.func.isRequired,
    originalCharacters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func,
    setCharactersHouse: PropTypes.func,
    characters: PropTypes.array.isRequired,
    characterInput: PropTypes.string.isRequired,
    setCharacterInput: PropTypes.func,
    charactersHouse: PropTypes.string.isRequired
};

export default Landing;