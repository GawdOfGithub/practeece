import React from 'react'
import useStore from './todoStore'
const App = () => {
  const {bears,increasePopulation,removeAllBears} = useStore()
  return (
    <>
    <div>{bears} bears around here</div>
    <button onClick={increasePopulation}>Increase bear count</button>
    <button onClick={removeAllBears}>Decrease bear count</button>
  </>
  )
}

export default App