import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [pausebtn, setPausebtn] = useState(false)
  const [disable, setDisable] = useState(false)

  function changeInput(e) {
    setInputValue(parseInt(e.target.value));
  }





  const runcounter=()=>{
    let id = setInterval(() => {
      console.log("vinay jain", id);
      setInputValue((prevValue) =>
      prevValue > 0 ? prevValue - 1 :
      myStop(prevValue)
      );
    }, 1000);

    return id
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue > 0) {
      setDisable(true);
      runcounter()
    }
    else if (inputValue === 0) {
      setDisable(false);
      console.log("VINAY")
      clearInterval(runcounter());
     
    }
  }
  function myStop(prevValue) {
    if (prevValue == '0') {
      setDisable(false);
      console.log('abhimanyu', prevValue)
      clearInterval(runcounter);
    }
    return false;
  }


  function handlePause() {
    if (!pausebtn) {
      clearInterval(intervalId);
      setPausebtn(true);
      console.log("resume")
    } else if (inputValue > 0 && pausebtn) {
      const id = setInterval(() => {
        setInputValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
      }, 1000);
      setIntervalId(id);
      setPausebtn(false);
      console.log("pause")
    }
  }


  // useEffect(() => {
  //   return () => {
  //     console.log("akash")
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, [intervalId]);



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