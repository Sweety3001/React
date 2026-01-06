import { useState } from 'react'
import './App.css'
/*
function App() {
 const [count, setCount] = useState(10)
 return(
  <>
    <h1>Counter Value: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Add Value {count}</button>
    <br />
    <button onClick={() => setCount(count - 1)}>Remove Value {count}</button>
  </>
 )
}
*/

function App() {
  const[count, setCount]=useState(0);
  const addValue=()=>{
    if(count<20){
      setCount(count+1)
      //if you want to use setCount with previous value
      //setCount((prevCount)=>prevCount+1)
      //setCount((prevCount)=>prevCount+1)
      //setCount((prevCount)=>prevCount+1)
      //In this case, the count will be increased by 3

    }
  }
  const removeValue=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  return(
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

// function App() {

//   let counter =5;

//   const addValue = () => {
//     counter += 1;
//     console.log(counter);
//   }

//   return (
//     <>
//     <h1>Counter Value: {counter}</h1>
//     <button onClick={addValue}>Add Value</button>
//     <br />
//     <button>Remove Value</button>
//     </>
//   )
// }
/* what is wrong with the above code?
The counter variable is not part of the component's state, so changes to it will not trigger a re-render of the component. As a result, the displayed counter value will not update when the addValue function is called.
To fix this, we should use the useState hook to manage the counter state.
*/


export default App
