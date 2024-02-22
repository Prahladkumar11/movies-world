import React, { useState } from 'react'
import './Search.css'

function Searchbox({props}) {
    const [value,SetValue] =useState('')
    const [type,Settype] =useState('')

    const dataChange=(e)=>{
        const newValue= e.target.value;
        SetValue(newValue);
        props(newValue,type);

        

    }
    const dataChanges=(e)=>{
        e.preventDefault();

        props(value,type)
        

    }


  return (

     <form className="form-wrapper" onSubmit={dataChanges}>
    <input type="text" id="search" placeholder="Search for..." value={value} onChange={dataChange}/>
    <select name="type" id="type" value={type} onChange={(e)=>Settype(e.target.value)}>
      <option value="">Select type</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
    </select>
    <input type="submit" value="go" id="submit"  />

    </form>

  )
}

export default Searchbox