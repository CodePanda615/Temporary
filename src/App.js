import React from 'react'
import { useState } from 'react';
//example of use of React form using onChange and onSubmit method
export default function App() {
  const [data,setData] = useState([]);
  const [name,setName] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    const person = {name};
    setData((data)=>{
      return [...data, person];
    })
  }
  return (
    <div className='grocery-form' >
      <div className='form-action'> 
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={(e)=>{setName((name) =>{ return e.target.value})}}></input>
        <button type='submit' className='submit-btn' onClick={handleSubmit}>Add Item</button>
      </div>
      {
        data.map((item)=>{
          const {name} = item;
          return (
            <div className='grocery-item'>{name}</div>
          )
        })
      }
    </div>
  )
}
