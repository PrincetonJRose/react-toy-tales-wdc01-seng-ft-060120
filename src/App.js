import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

const baseUrl = `http://localhost:3000/`
const toysUrl = baseUrl + `toys/`

const requestHeader = {
  'content-type': 'application/json',
  Accepts: 'application/json'
}



const App =( )=> {

  const [ display, setDisplay ] = useState( false )
  const [ toys, setToys ] = useState( [] )
  const [ newToy, setNewToy ] = useState( { likes: 0 } )

  useEffect( () => {
    fetch( toysUrl )
    .then( res => res.json() )
    .then( toys => setToys( toys ) )
  }, [] )

  const increaseLikes =( likedToy )=> {
    likedToy.likes += 1

    const patchRequest = {
      method: 'PATCH',
      headers: requestHeader,
      body: JSON.stringify( likedToy )
    }

    fetch( toysUrl + likedToy.id, patchRequest )
    .then( res => res.json() )
    .then( updatedToy => 
      setToys( toys.map( toy => {
          if ( toy.id === updatedToy.id )
            return updatedToy
          return toy
        })
      )
    )
  }

  const createToy =( )=> {
    const postRequest = {
      method: 'POST',
      headers: requestHeader,
      body: JSON.stringify( newToy ) 
    }

    fetch( toysUrl, postRequest )
    .then( res => res.json() )
    .then( createdToy => setToys( [...toys, createdToy ] ) )
  }

  return (
    <>
      <Header/>
      { display ?
        <ToyForm
          setNewToy = { setNewToy }
          newToy = { newToy }
          createToy = { createToy }
        />
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
