import React, { useState } from 'react'
import Header from './Header'

/*

 Quando um html esta escrito dentro de um arquivo js nós dizemos que esse arquivo é:
 
 JSX (JavaScript + XML)

 */

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
    <Header title = "Semana omnistack">Contador: { count }</Header>
    <button onClick={increment}> Incrementar </button>
    </div>
  );
}

export default App;
