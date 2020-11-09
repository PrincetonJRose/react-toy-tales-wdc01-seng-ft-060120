import React, { useEffect, useState } from 'react';

const ToyForm =( props )=> {

  const setNewToy = props.setNewToy
  const newToy = props.newToy

  const changeToy =( e )=> {
    setNewToy( {...newToy, [e.target.name]: e.target.value } )
  }

  return (
    <div className="container">
      <form className="add-toy-form"
        onSubmit = { (e) => {
          e.preventDefault()
          props.createToy()
        }}
      >
        <h3>Create a toy!</h3>
        <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"
          onChange = { changeToy } required
        />
        <br/>
        <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"
          onChange = { changeToy } required
        />
        <br/>
        <input type="submit" name="submit" value="Create New Toy" className="submit"/>
      </form>
    </div>
  );

}

export default ToyForm;
