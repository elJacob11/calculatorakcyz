import { useState } from 'react'
import './App.css'


function App() {

  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState(0.1);
  const [result, setResult] = useState('')

  const calculateResult = () => {
    const calculatedResult = parseFloat(value) * percentage;
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <div className=' text-lg '>
      <h1 className=' text-2xl '>Kalkulator dla obliczania akcyzy od wartości auta</h1>
      <input className='  border-solid border-gray-500 rounded-lg' type="number" value={value} onChange={(e) => setValue(e.target.value)} required/>
      <form>
        <select id="percentage-select" value={percentage} onChange={(e) => setPercentage(parseFloat(e.target.value))}>
          <option value={0.031}>Auto osobowe (do 2000ccm)</option>
          <option value={0.186}>Auto osobowe (powyżej 2000ccm)</option>
          <option value={0.00}>Auto osobowe (elektryczne)</option>
          <option value={0.00}>Hybryda plug-in(do 2000ccm)</option>
          <option value={0.093}>Hybryda plug-in(od 2000ccm do 3500ccm)</option>
          <option value={0.0155}>Klasyczna hybryda(do 2000ccm)</option>
          <option value={0.093}>Klasyczna hybryda(od 2000ccm do 3500ccm)</option>
          <option value={0.186}>Klasyczna hybryda(powyżej 3500ccm)</option>
        </select>
      </form>
      <button className=' bg-blue-700 rounded-3xl px-2 py-1 text-2xl' type="submit" onClick={calculateResult}>Oblicz</button>
      <p>Opłata akcyzy wynosi: {result}</p>
    </div>
  )
}

export default App
