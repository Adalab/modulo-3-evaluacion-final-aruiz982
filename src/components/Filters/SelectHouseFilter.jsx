import PropTypes from 'prop-types';

const SelectHouseFilter = ({setCharactersHouse}) => {

    const handleCharacterFilterHouse = (ev) => {
        const filteredHouse = ev.currentTarget.value;
        setCharactersHouse(filteredHouse.toLowerCase());
    }

    return (
        <label htmlFor="" className="input__label">
          <span className="input__label--text">Selecciona la casa:</span>
          <select name="" id="" className="select__input" onClick={handleCharacterFilterHouse}>
            <option value="gryffindor" className="select__option">Gryffindor</option>
            <option value="slytherin" className="select__option">Slytherin</option>
            <option value="ravenclaw" className="select__option">Ravenclaw</option>
            <option value="hufflepuff" className="select__option">Hufflepuff</option>
          </select>
        </label>
    )
}

SelectHouseFilter.propTypes = {
    setCharactersHouse: PropTypes.func,
};

export default SelectHouseFilter;