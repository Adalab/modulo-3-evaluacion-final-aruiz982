import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { translateSpecies } from '../Utils/translateSpecies'

const CharacterItem = ({character}) => {
    return(
        <>
          <Link to={`/detail/${character.id}`} className="card-link">
            <img src={character.image ? character.image : `https://via.placeholder.com/300x300/ffffff/666666/?text=${character.name}`} alt="" className="card__element--img" />
            <div className="card__element--character--info">
              <h3 className="card__element--name">{character.name}</h3>
              <p className="card__element--species">{translateSpecies(character.species)}</p>
            </div>
          </Link>
        </>
    )
}

CharacterItem.propTypes = {
    character: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
};

export default CharacterItem;