import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from './store/counter.js'
import Burger from './Components/Burger/Burger'
import Product from './Components/Product/Product'

function App() {
  const count = useSelector( store => store.counter.count )
  const dispatch = useDispatch()

  return (

    <div className="App">
      <h1>{count}</h1>
      <button onClick={ () => dispatch( counterSlice.actions.increment() ) }>Increment</button>
      <button onClick={ () => dispatch( counterSlice.actions.decrement() ) }>Decrement</button>
      <button onClick={ () => dispatch( counterSlice.actions.increaseByNumber(5) ) }>Increment by 5</button>
      <button onClick={ () => dispatch( counterSlice.actions.increaseByNumber(10) ) }>Increment by 10</button>
      <hr />
      <Burger />
      <hr />
      <Product />
    </div>
  );
}

export default App;
