import { useState } from 'react'


function App() {
  const [color , setColor] = useState("black")
  const redColor = () =>{
       setColor("red")
  }
  const blueColor = ()=>{
    setColor("blue")
  }
  const blackColor = ()=>{
    setColor("black")
  }

  return (
    <>
    <div className={`${color} ==='black' ? bg-${color} h-[100vh] w-[100vw] ? bg-${color}-500 h-[100vh] w-[100vw]`}>
    
    <div className='bg-red-500 text-white text-center text-2xl flex flex-row justify-center'>
      <button className='bg-red-500' onClick={redColor}>red</button>
      <button className='bg-blue-500' onClick={blueColor}>blue</button>
      <button className='bg-black' onClick={blackColor}>blue</button>
    </div>
   

    </div>
    </>
  )
}

export default App
