import {useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [pausebtn , setPausebtn] = useState(false)
  const [disable , setDisable] = useState(false)

  function changeInput(e) {
    setInputValue(parseInt(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!intervalId && inputValue > 0 ) {
      setDisable(true)
      const id = setInterval(() => {
        console.log("vinay jain")
        setInputValue((prevValue) => (prevValue > 0 ? prevValue - 1 :  clearInterval(intervalId)));
      }, 1000);
      setIntervalId(id);
      console.log(id)
    }
    else  if( inputValue === 0){
      setDisable(false)
      
      // clearInterval(inputValue)
      clearInterval(id)

    }
    
  }
  function handlePause() {
    if (intervalId && !pausebtn) { 
      clearInterval(intervalId);
      setPausebtn(true);
    } else if (inputValue > 0 && pausebtn) { 
      const id = setInterval(() => {
        setInputValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
      }, 1000);
      setIntervalId(id);
      setPausebtn(false);
    }
  }

    useEffect(() => {
      return () => {
        if(intervalId){
          clearInterval(intervalId ,inputValue);
        }
       
      };
    }, [intervalId]);



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter Number'
          value={inputValue}
          onChange={changeInput}
        />
        <button disabled={disable} type='submit'>Submit</button>
        <button onClick={handlePause}>{
          pausebtn ? "Resume" : "pause"
        }</button>
      </form>
    </>
  );
}

export default App;