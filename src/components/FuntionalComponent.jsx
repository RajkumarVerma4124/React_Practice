import React, { useState } from 'react'

//ES6
export const FunctionalComponent = () => {
  const [className, setClassName] = useState("Functional Component");
  const [EmpName, setEmpName] = useState("Hello Raj");
  const [ProjName, setProjName] = useState("Fundoo Note");
  const [Day, setDay] = useState(new Date().getDate());

  function clickHandler() {
    setEmpName('Thanks For Confirmation Raj')
  }

   return (
     <div className="flex flex-col text-center justify-around p-10 h-96  transition duration-1000 transform hover:scale-105 hover:shadow-2xl rounded-lg mt-10">
       <h1 className=" text-2xl text-gray-800">
         {className}
       </h1>
       <h1 className="text-xl text-red-500">
          {EmpName} <br/>
          Welcome to {ProjName} Project
       </h1>
       <p className="text-lg text-gray-500">At Day {Day} </p>
       <button onClick={clickHandler} className="border-1 w-32 border-gray-100 p-2 px-4 m-2 bg-gray-200 self-center transition duration-1000 hover:shadow-2xl hover:scale-105 rounded-lg">Confirm</button>
     </div>
   )
}

