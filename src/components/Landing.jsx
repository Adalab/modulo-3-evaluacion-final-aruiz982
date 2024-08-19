import Header from "./Header";
import InputCharacterFilter from "./Filters/InputCharacterFilter";
import SelectHouseFilter from "./Filters/SelectHouseFilter";
import CharactersList from "./CharacterInfo/CharactersList";

const Landing = ({originalCharacters, setCharacters, setCharactersHouse, characters}) => {
    return(
        <>
            <Header/>
            <form className='form' action="">
                <InputCharacterFilter originalCharacters={originalCharacters} setCharacters={setCharacters} />
                <SelectHouseFilter setCharactersHouse = {setCharactersHouse} />
            </form>

            <CharactersList characters = {characters} />

        </>
    )
}

export default Landing;