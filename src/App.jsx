import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState(false);

  function changeInput(e) {
    setInputValue(parseInt(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();


    // let timer;
    // if (counter > 0 && !paused) {
    //   timer = setInterval(() => {
    //     setCounter((prevCounter) => {
    //       const newCounter = prevCounter - 1;
    //       if (newCounter <= 0) {
    //         clearInterval(timer);
    //         return 0;
    //       }
    //       return newCounter;
    //     });
    //   }, 1000);
    // }

    // return () => clearInterval(timer);

    setCounter(inputValue);
    setPaused(false);
  }

  // function handlePause() {
  //   setPaused(!paused); 
  // }

  useEffect(() => {
    let timer;
    if (counter > 0 && !paused) {
      timer = setInterval(() => {
        setInputValue((prevCounter) => {
          const newCounter = prevCounter - 1;
          if (newCounter <= 0) {
            clearInterval(timer);
            return 0;
          }
          return newCounter;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [inputValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter Number'
          value={inputValue}
          onChange={changeInput}
        />
        <button type='submit'>Submit</button>
        {/* <button onClick={handlePause}>{paused ? 'Resume' : 'Pause'}</button> */}
      </form>

      {/* <p>{counter}</p> */}
    </>
  );
}

export default App;













// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [counter, setCounter] = useState(0);

//   function changeInput(e) {
//     setInputValue(e.target.value);
//   }

//   function handleSubmit() {
//     e.preventDefault();
//     setCounter(inputValue);
//     setInputValue();
//   }

  
//   useEffect(() => {
//     let timer;
//     if (inputValue > 0) {
//       timer = setInterval(() => {
//         setCounter((prevCounter) => {
//           const newCounter = prevCounter - 1;
//           if (newCounter <= 0) {
//             clearInterval(timer);
//             return null;
//           }
//           return newCounter;
//         });
//       }, 1000); 
//     }

//     return () => clearInterval(timer);
//   }, []);
//   function handlePause(){
    
//   }

 

//   return (
//     <>
      
//         <input
//           type='number'
//           placeholder='Enter Number'
//           value={inputValue}
//           onChange={changeInput}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//         <button onClick={handlePause}>pause</button>

 

     
//     </>
//   );
// }

// export default App;


