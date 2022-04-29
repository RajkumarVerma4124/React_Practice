import React, { useState } from 'react'

function HookCounter() {
    const [name, setName]= useState({firstName: '', lastName: ''})
    return (
        <div className="flex items-center h-screen w-4/12 justify-center">
            <form className=" flex flex-col border border-slate-300 items-center p-20 m-10 justify-between w-9/12 transition duration-1000 transform hover:scale-105 hover:shadow-2xl rounded-lg">
                <h1 className='text-2xl text-red-500 mb-10'>Name Form</h1>
                <input className="mb-10 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm" 
                    placeholder="Enter FirstName..."
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input className="mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
                    placeholder="Enter LastName..."
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />
                <h2 className='text-xl p-5 text-red-500'>Your First Name Is : {name.firstName}</h2>
                <h2 className='text-xl p-5 text-gray-500'>Your Last Name Is : {name.lastName}</h2>
            </form>
        </div>
        
    )
}

export default HookCounter