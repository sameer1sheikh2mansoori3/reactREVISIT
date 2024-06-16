import React, { useState ,useRef} from 'react'


const App = () => {
  const [password, setPassword] = useState("");
  const [count , setCount] = useState(6);
  const [number , setNumber] = useState(false);
  const [characters , setCharacters] = useState(false);
const passwordRef = useRef(null)

  const passwordGenerator = () =>{
  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (number) charSet += '0123456789';
  if (characters) charSet += '!@#$%^&*()_+~`';

  let newPassword = '';
  for (let i = 0; i < count; i++) {
    newPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }
  setPassword(newPassword)

}
  return (
   <>
    <h1 className='bg-gray'>password</h1>
    <div className='flex flex-col text-white bg-gray-400 h-[100vh] w-[100vw]'>
     
     <input type="text" name="" id="" value={password}  ref={passwordRef} className='bg-gray-500'/>
     <div className='flex flex-row'>
     <input type="range" name="" id="" min={6} max={100} value={count} onChange={(e)=>{
      setCount(e.target.value)
      passwordGenerator()
     }} />
     <button onClick={()=>{
      passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
    
     }}>copy</button>
     </div>
     <button onClick={()=>{
      setNumber((prev)=>!prev)
      passwordGenerator()

     }}>numbers</button>
     <button onClick={()=>{
      setCharacters((prev) =>!prev)
      passwordGenerator()
     }}>characters</button>
    </div>
   </>
  )
}

export default App