import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState('#ffffff')
  let generate = () => {
    setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
    console.log(color)
  }
  return (
    <div className='container'>
        <h1>Color Palette Generator</h1>
        <button onClick={generate}>Generate</button>
        <div className="pallete">
        <div className="box" style={{backgroundColor: color, opacity: '.1'}}></div>
          <div className="box" style={{backgroundColor: color, opacity: '.3'}}></div>
          <div className="box" style={{backgroundColor: color, opacity: '.5'}}></div>
          <div className="box" style={{backgroundColor: color, opacity: '.7'}}></div>
          <div className="box" style={{backgroundColor: color, opacity: '.9'}}></div>
          <div className="box" style={{backgroundColor: color}}></div>
        </div>
      </div>
  );
}

export default App;
