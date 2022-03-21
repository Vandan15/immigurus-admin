import React from 'react'
import './index.scss';
const PrimaryBtn = (props) => {
  return (
    <button className='btn-primary'>{props.text}</button>
  )
}
const AddBtn = (props) => {
  return (
    <button className='btn-rounded'>{props.text}</button>
  )
}
const FilterButton = (props) => {
  return (
    <div className='btn__primary'>
      <button className='d-flex align-items-center ' >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M14 12v7.883a.999.999 0 01-1.7.83l-2.015-2.016a.998.998 0 01-.285-.832V12h-.026L4.21 4.622A1 1 0 015 3.007V3h14v.007a1 1 0 01.79 1.616L14.026 12H14z"></path></svg>
      <span>Filters</span>
    </button>
    </div>
  )
}

const  AddStudent = (props) => {
  return (
    <div className='btn__primary'>
      <button className='d-flex align-items-center ' >
      <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12a1 1 0 01-1 1h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 112 0v6h6a1 1 0 011 1z" fill="current"></path></svg>
      <span>Add Student</span>
    </button>
    </div>
  )
}

const Cancelbtn = (props) =>{
  return(
    <>
     <button className='cancelebtn'>Back</button>
    </>
  )
}

const  CreateStudent = (props) => {
  return (
    <div >
       <button className='cancelebtn'> Create student</button>
    </div>
  )
}
export {
  PrimaryBtn,
  AddBtn,
  FilterButton,
  AddStudent,
  Cancelbtn,CreateStudent
}