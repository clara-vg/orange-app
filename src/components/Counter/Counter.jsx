import React, { useState } from 'react'

const Counter = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    } 

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

  return (
    <div >
        <div className="inline-flex">
            <button className="bg-gray-300 m-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={decrement}>
                -
            </button>
            <b>
                <p className='m-8'> {count} </p>
            </b>
            <button className="bg-gray-300 m-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={increment}>
                +
            </button>
        </div>
        <div>
            <button className="bg-gray-300 m-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => onAdd(count)}>
                <span>Add to Cart</span>
            </button>
        </div>
    </div>
  )
}

export default Counter
