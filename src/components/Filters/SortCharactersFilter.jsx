import { useState } from "react";

import PropTypes from 'prop-types';

const SortCharactersFilter = ({characters, setCharacters}) => {

    const [currentOrder, setCurrentOrder] = useState('Orden ascendente');

    const sortCharacters = () => {
        let sortedCharacters = [...characters];

        if(currentOrder === 'Orden ascendente'){
            setCurrentOrder('Orden descendente');
            sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            setCurrentOrder('Orden ascendente');
            sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
        }

        setCharacters(sortedCharacters);
    }

    return(
        <button className="complementary__filters--btn" onClick={sortCharacters}>{currentOrder}</button>
    )
}

SortCharactersFilter.propTypes = {
    characters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func
}

export default SortCharactersFilter;