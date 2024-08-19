import PropTypes from 'prop-types';

import CharacterItem from './CharacterItem';

const CharactersList = ({characters}) => {
    return (
        <ul className="cards">
            {characters.map(character => (
            <li key={character.id} className="card__element">
                <CharacterItem character = {character}/>
            </li>
            ))}
        
        </ul>

    )
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharactersList;