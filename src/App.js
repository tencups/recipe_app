import React, {useEffect, useState} from 'react';
import './App.css';
//uwu
const App = () => {
  
  const APP_ID = '2394fb79';
  const APP_KEY = '2c632db3ecfe13444cb0d794fdcf58bb';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [counter, setCounter] = useState(0);


  useEffect(()=> {
    console.log('effect has been run');
  }, []);
 
  return(
    <div className="App">
    <form className="search-form">
      <input className ="search-bar" type="text"/>
      <button className ="search-button" type="submit">Search</button>
    </form>
    <h1 onClick ={()=> setCounter(counter+1)}>{counter}</h1>
    </div>
  );
}

export default App;
