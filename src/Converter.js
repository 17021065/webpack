import React from "react";
import database from "./currency";
import PropTypes from 'prop-types';

const Converter = ({data, doConvert}) => {
  const result = data && Object.keys(data).length === 0 && Object.getPrototypeOf(data) === Object.prototype ? 
  "" 
  : 
  database().convert(data.from, data.to, data.value) ; 

  return <fieldset>
    <legend>RESULT</legend>
    <button type='button' className='w3-button w3-indigo w3-block w3-wide w3-margin-bottom' onClick={doConvert}>Convert</button>
    <label><b>Result:</b></label>
    <div>
      {result !== "" ? result : ""}
    </div>
  </fieldset>
}

Converter.propTypes = {
  data: PropTypes.object,
  doConvert: PropTypes.func,
}

export default Converter;