import { Link, useParams } from "react-router-dom";

import PropTypes from 'prop-types';

const CharacterDetail = ({findCharacter}) => {

    const params = useParams();

    const characterToShow = findCharacter( params.id );

    return(
        <div>
            <h2>Página de detalle</h2>
            <div className="col2">
                <img src={characterToShow.image} alt="" />
                <div>
                    <p>Nombre: {characterToShow.name}</p>
                    <p>Estatus: {characterToShow.alive}</p>
                    <p>Especie: {characterToShow.species}</p>
                    <p>Género: {characterToShow.gender}</p>
                    <p>Casa: {characterToShow.house}</p>
                </div>
            </div>
            <Link to="/">Volver</Link>
        </div>
    )
}

CharacterDetail.PropTypes = {
    findCharacter : PropTypes.func.isRequired
}

export default CharacterDetail;