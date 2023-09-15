import {useState} from "react";
import './App.css';

function App() {

  const bottles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const time = new Array(24).fill(null).map((_,i) => i+1)
  const [weight,setWeight] = useState(0)
  const [gender, setGender] = useState()
  const [result, setResult] = useState(0)
  
  const calculate = () => {
    let promilles = 0
    if (gender === "0") {
        promilles = (((bottles * 0.33) * 8 * 4.5)-((weight/10)*time))/(weight*0.7)
    } else {
        promilles = (((bottles * 0.33) * 8 * 4.5)-((weight/10)*time))/(weight*0.6)
    }
    setResult(promilles)
    }
  
  return (
    <div id="container">
      <div>
      <h2> Beerometer </h2>
      </div>
      <div>
      <label> Bottles </label>
        <select>
        {
        bottles.map(bottle => (
          <option value={bottle}>{bottle} pulloa </option>
        ))
        }
        </select>
      <label> Time </label>
        <select>
        {  
        time.map(time => (
          <option value={time}>{time} tuntia </option>
        )) 
        }
        </select>
      <div>
      <label> Weight </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>  
      <label> Gender </label>
        <input type="radio" name="gender" value="0" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="1" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <label> Promilles </label>
        <output>{result.toFixed(0)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}> Calculate </button> 
      </div>
    </div>
  );
}

export default App;
