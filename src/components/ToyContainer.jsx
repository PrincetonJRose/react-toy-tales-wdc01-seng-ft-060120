import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer =( props )=> {

  const renderToys = props.toys.map( toy => 
    <ToyCard
      key = { toy.id }
      toy = { toy }
      increaseLikes = { props.increaseLikes }
    />
  )

  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */
        renderToys
      }
    </div>
  );
}

export default ToyContainer;
