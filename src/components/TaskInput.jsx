import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addtodo } from '../redux/todo'


function TaskInput() {
  const[input,setinput]=useState()
  const dispatch=useDispatch()
  
  const handleclick=(e)=>{
    e.preventDefault()
    dispatch(addtodo({title:input}))
    setinput('')

    

  }
  const handlechange=(e)=>{
    setinput(e.target.value)
  }
  return (

    <>
    <div className='flex items-center justify-center h-[70vh]'>
        <input type="text"  className=' outline-none border-none mr-2 bg-slate-100 h-[40px] p-2 rounded-md   0 w-[200px]' placeholder='Add Task here...' onChange={handlechange} value={input}/>
        <Button text='Add' color='green' onClick={handleclick}/>
    </div>



    </>
  )
}

export default TaskInput