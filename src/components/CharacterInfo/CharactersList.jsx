import PropTypes from 'prop-types';

import CharacterItem from './CharacterItem';

const CharactersList = ({characters}) => {

    const characterListLength = (characters) => {
        if(characters.length === 0){
            return <li>Ningún personaje coincide con ese nombre</li> 
        } else {
            return characters.map(character => (
                <li key={character.id} className="card__element">
                    <CharacterItem character={character} />
                </li>
            ));
        }
    }

    

    return (
        <ul className="cards">

            {characterListLength(characters)}
        
        </ul>

    )
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharactersList;