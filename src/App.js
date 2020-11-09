import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

const baseUrl = `http://localhost:3000/`
const toysUrl = baseUrl + `toys/`


const App =( )=> {

  const [ display, setDisplay ] = useState( false )
  const [ toys, setToys ] = useState( [] )

  useEffect( () => {
    fetch( toysUrl )
    .then( res => res.json() )
    .then( toys => setToys( toys ) )
  }, [] )

  const increaseLikes =( likedToy )=> {
    setToys( toys.map( toy => {
        if ( toy.id === likedToy.id )
          toy.likes += 1
        return toy
      })
    )
  }

  return (
    <>
      <Header/>
      { display ?
        <ToyForm/>
          :
        null
      }
      <div className="buttonContainer">
        <button onClick={ ()=> setDisplay( !display ) }> Add a Toy </button>
      </div>
      <ToyContainer
        toys = { toys }
        increaseLikes = { increaseLikes }
      />
    </>
  );

}

export default App;
