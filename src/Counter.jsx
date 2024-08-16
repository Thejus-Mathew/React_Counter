import React, { useState } from 'react'

function Counter() {

    const[counter,setCounter] = useState(0)

    function inc() {
        setCounter(counter+1)
    }
    function res() {
        setCounter(0)
    }
    function dec() {
        if(counter > 0) {
            setCounter(counter-1)
        }
    }
  return (
    <>
        <div className="container">
            <h1 className='text-center mt-5 text-primary'>Counter -App</h1>
            <h2 className='text-center m-3'>{counter}</h2>
            <div className="buttons text-center">
                <button className='btn btn-dark m-3' onClick={inc}>Increment</button>
                <button className='btn m-3' onClick={res}>Reset</button>
                <button className='btn btn-dark m-3' onClick={dec}>Decrement</button>
            </div>
        </div>
    </>
  )
}

export default Counter
