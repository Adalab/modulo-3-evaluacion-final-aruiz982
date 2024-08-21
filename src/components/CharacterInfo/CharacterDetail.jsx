import { Link, useParams } from "react-router-dom";

import propTypes from 'prop-types';

import Header from "../Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faSkullCrossbones, faUser, faGhost, faDog } from '@fortawesome/free-solid-svg-icons'

const CharacterDetail = ({findCharacter}) => {

    const params = useParams();

    const characterToShow = findCharacter( params.id );

    const translateCharacterStatus = (object) =>{
        const useObject = {
            true: <span className="detail__card--slim--text">Vivo <FontAwesomeIcon icon={faHeartPulse}/></span>,
            false: <span className="detail__card--slim--text">Muerto <FontAwesomeIcon icon={faSkullCrossbones}/></span>
        }

        const objectValue = useObject[object];
        return objectValue;
    }

    const translateCharacterSpecies = (object) => {
        const useObject = {
            human: <span className="detail__card--slim--text">Humano <FontAwesomeIcon icon={faUser}/></span>,
            ghost: <span className="detail__card--slim--text">Fantasma <FontAwesomeIcon icon={faGhost}/></span>,
            'half-giant': <span className="detail__card--slim--text">Medio gigante <FontAwesomeIcon icon={faUser}/></span>,
            werewolf: <span className="detail__card--slim--text">Hombre lobo <FontAwesomeIcon icon={faDog}/></span>
        }

        const objectValue = useObject[object];
        return objectValue;

    }

    const translateCharacterGender = (object) => {
        const useObject = {
            male: 'Hombre',
            female: 'Mujer'
        }

        const objectValue = useObject[object];
        return objectValue;

    }

    const translateCharacterHouse = (object) => {
        const useObject = {
            Gryffindor: 'Gryffindor',
            Slytherin: 'Slytherin',
            Hufflepuff: 'Hufflepuff',
            Ravenclaw: 'Ravenclaw'
        };
        
        const objectValue = useObject[object];
        return objectValue;
    };

    return(
        <>
        <Header />
        <Link to="/" className="back__arrow">&lt; Volver</Link>
        <div className={`detail__card ${characterToShow.house}`}>
            <div className="detail__card--houseName">{translateCharacterHouse(characterToShow.house)}</div>
            <div className="col2">
                <img className="detail__card--img" src={characterToShow.image ? characterToShow.image : `https://via.placeholder.com/210x295/ffffff/666666/?text=${characterToShow.name}`} alt="" />
                <div className="detail__card--info">
                    <p className="detail__card--text">{characterToShow.name}</p>
                    <p className="detail__card--text">Estatus: <span className="detail__card--slim--text">{translateCharacterStatus(characterToShow.alive)}</span></p>
                    <p className="detail__card--text">Especie: <span className="detail__card--slim--text">{translateCharacterSpecies(characterToShow.species)}</span></p>
                    <p className="detail__card--text">Género: <span className="detail__card--slim--text">{translateCharacterGender(characterToShow.gender)}</span></p>
                    <p className="detail__card--text">Casa: <span className="detail__card--slim--text">{translateCharacterHouse(characterToShow.house)}</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

CharacterDetail.propTypes = {
    findCharacter : propTypes.func.isRequired
}

export default CharacterDetail;