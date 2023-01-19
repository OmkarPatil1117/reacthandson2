import React from 'react'
import { useState } from 'react'

export default function App() {
  const [nam, setnam ] = useState("")
  const [department, setdepartment] = useState("")
  const [rating, setrating ] = useState("")
  const[arr, setarr] = useState([])

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
     const newobj = {
      nam : nam,
      department : department,
      rating : rating
     }
    setarr( [...arr, newobj] )
    console.log(newobj);
    setnam('')
    setdepartment("")
    setrating("")
  }

  const reset = () => {
    setarr( [] )
  }

  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form>
        <label>Name : </label>
        <input type="text" className='name' id="name" onChange={getName} value={nam} /> <br /> <br />
        <label>Department : </label>
        <input type="text" className='department' id="department" onChange={getDepartment} value={department} /> <br /> <br />
        <label>Rating : </label>
        <input type="text" className='rating' id="rating" onChange={getRating} value={rating} /> <br /> <br />
        <input type="submit" value="Submit" onClick={getData} />
      </form> <br /> <br /> <br />

      { arr.map( (item, index) => {
        return (
        <>
        <br />
        <div className='container' >
          Name : {item.nam} <br />
          Department : {item.department} <br />
          Rating : {item.rating} <br /> <br />
          <br />
        </div> 
        <br />
        </>
        )

      })}
      <button onClick={reset} > Reset </button>
    </div>
  )
}
