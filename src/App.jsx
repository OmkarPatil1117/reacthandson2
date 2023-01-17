import React from 'react'
import { useState } from 'react'

export default function App() {
  const [nam, setnam ] = useState("")
  const [department, setdepartment] = useState("")
  const [rating, setrating ] = useState("")
  const [show, setshow ] = useState(false)

  const getName = (e) => {
    let data =  e.target.value
    setnam(data)
  }

  const getDepartment = (e) => {
    let data = e.target.value
    setdepartment(data)
  }

  const getRating = (e) => {
    let data = e.target.value
    setrating(data)
  }

  const getData = (e) => {
    e.preventDefault()
    setshow(true)
    console.log(nam, department, rating);
  }

  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form>
        <label>Name : </label>
        <input type="text" className='name' id="name" onChange={getName} /> <br /> <br />
        <label>Department : </label>
        <input type="text" className='department' id="department" onChange={getDepartment} /> <br /> <br />
        <label>Rating : </label>
        <input type="text" className='rating' id="rating" onChange={getRating} /> <br /> <br />
        <input type="submit" value="Submit" onClick={getData} />
      </form> <br /> <br /> <br />

      {show && <div className='container' >
        Name : {nam} <br />
        Department : {department} <br />
        Rating : {rating} <br />
      </div> }
    </div>
  )
}
