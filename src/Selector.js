import React from "react";
import PropTypes from 'prop-types';

const Selector = ({name, list, value, onChange}) => {
  return <>
    <label><b>{name}</b></label>
    <select className='w3-select w3-border' value={value} onChange={onChange}>
    <option value="" key="none" disabled>Choose currency</option>
      {list.map(item => <option value={item} key={item}>{item}</option>)}
    </select>
  </>
}

Selector.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Selector;