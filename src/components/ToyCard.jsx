import React, { } from 'react';

const ToyCard =( props )=> {

  const { name, image, likes } = props.toy

  return (
    <div className="card">
      <h2>{ name /* Toy's Name */}</h2>
      <img src={ image /* Toy's Image */} alt={'' /* Toy's Name */} className="toy-avatar" />
      <p>{ likes /* Toy's Likes */} Likes </p>
      <button className="like-btn"
        onClick = { () => props.increaseLikes( props.toy ) }
      >Like {'<3'}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );

}

export default ToyCard;
