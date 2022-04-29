import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function HookArray() {
    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 99) + 100
        }])
    }
    const [items, setItems] = useState([])
    return (
        <div className="flex flex-col border border-gray-100 w-screen h-screen justify-center items-center">
            <button onClick={addItem}
                className="flex border-1 w-18 border-gray-100 px-6 py-5 font-medium m-2 ml-8 justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 self-center rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                <span className="flex text-2xl mr-2 justify-center"><AddCircleIcon /></span>
                Random Number 
            </button>
            <ul class="list-square">
                {
                    items.map(item => ( 
                        <li className="text-xl text-red-500" key={item.id}>{item.value}</li> 
                    ))
                }
            </ul>
        </div>
    )
}

export default HookArray