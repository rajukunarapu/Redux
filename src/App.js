import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {

  let state = useSelector((state)=>state)
  let dispatch = useDispatch()

  return (
    <>
      <h1>Counter1:{state.counter1}</h1>
      <h1>Counter2:{state.counter2}</h1>
      <button onClick={()=>dispatch({type:"Inc"})} >Increment</button>
      <button onClick={()=>dispatch({type:"Dec"})} >Decrement</button>
      <button onClick={()=>dispatch({type:"Reset"})} >Reset</button>
    </>
  )
}

export default App