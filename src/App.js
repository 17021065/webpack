import { hot } from 'react-hot-loader/root';
import React from "react";
import './w3.css';
import Input from './Input';
import Header from './Header';

const App = () => {
  return <div className='w3-container'>
    <Header />
    <Input />
  </div>
}
export default hot(App);