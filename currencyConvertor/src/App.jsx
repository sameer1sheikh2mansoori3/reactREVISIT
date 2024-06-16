import { useState ,  useEffect} from 'react'




function App() {
  const [optArr , setOptArr] = useState([]);
  const [myAmmount , setmyAmmount] = useState(0);
  const [currency , setCurrency] = useState("usd");
  const [ammount , setAmmount] = useState("inr")
  const [data , setData] = useState(0);
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
  useEffect(() => {
    fetch(url).then((res)=>{
      return res.json()
    }).then((res)=>{
      setOptArr(Object.keys(res[currency]))
      
    }).catch((err)=>{
      console.log(`error while fetching api ${err}`)
    })
  
}, [currency])
    


const submitHandler = ()=>{
  fetch(url).then((res)=>{
return res.json()
  }).then((res)=>{
 let multiply = res[currency]


  setData(multiply[ammount]*myAmmount)
  })
}


  return (
    <>
<div className='flex bg-blue-200 items-center justify-center h-[100vh] w-[100vw]'>
<div className='flex flex-col text-black'>
{/* {  optArr.map((value , index)=>{
    return <>
    <h1 key={index}>{value}</h1>
  </>
  })
}  */}
<div className='flex flex-row h-[40vh] items-center bg-blue-500'>
<input type="text" name="" id="" value={myAmmount} onChange={(e)=>{
   setmyAmmount(e.target.value)
}}/>
<label  htmlFor="from" >kis value me paisa hai</label>
<select name="" id="from" onChange={(e)=>{

  setCurrency(e.target.value)
}}>
  {
    optArr.map((value , index)=>{
      return <>
        <option key={index} value={value}>{value}</option>
      </>
    })
  }
</select>

<label htmlFor="to">kis value me paisa chahte ho</label>
<select name="" id="to">
{
  optArr.map((value , index)=>{
    return <>
      <option key={index} value={value}>{value}</option>
    </>
  })
}
</select>
<input type="text" value={data} readOnly/>
</div>
<button className='text-white bg-blue-500' onClick={submitHandler}>convert</button>
</div>   
</div>   
    </>
  );
}
export default App;