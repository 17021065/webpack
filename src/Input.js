import React from "react";
import './w3.css';
import database from './currency';
import Selector from "./Selector";
import Converter from './converter';

const Input = () => {
  const currencyList = database().getCurrencyList();

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [input, setInput] = React.useState("");

  const [data, setData] = React.useState({});

  const handleFromChange = e => setFrom(e.target.value);

  const handleToChange = e => setTo(e.target.value);

  const handleSwap = () => {
    const temp = from;
    setFrom(to)
    setTo(temp);
  }

  const handleInputChange = e => setInput(e.target.value)

  const handleConvert = () => {
    from === "" || to === "" ? 
    alert("please choose currency!") 
    :
    input==="" || input < 0 ? 
    alert("invalid value!") 
    : 
    setData({from: from, to: to, value: input,});
  }

  return <div>
    <fieldset>
      <legend>INPUT</legend>

      <div className='w3-row-padding'>
        <div className='w3-third'>
          <Selector name="From" value={from} list={currencyList} onChange={handleFromChange} />
        </div>
        
        <div className='w3-third'>
          <Selector name="To" value={to} list={currencyList} onChange={handleToChange} />
        </div>

        <div className='w3-third'>
          <br></br>
          <button type='button' className='w3-button w3-blue w3-block' onClick={handleSwap}>Swap</button>
        </div>
      </div>

      <div className='w3-container w3-margin-top'>
        <label><b>Face value:</b></label>
        <input type="number" min='0' className='w3-input w3-border' value={input} onChange={handleInputChange}/>
      </div>
    </fieldset>
    <Converter data={data} doConvert={handleConvert}/>
  </div>
}

export default Input;