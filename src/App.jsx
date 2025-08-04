import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [datas, setData] = useState([])
 const setAxio=()=>{
  axios.get('http://localhost:4001/user')
  .then(res=>{
    console.log(res)
    setData(res.data)

  })
  .catch(err=>{
    console.log(err)
  })
 }
 const[state,setState]=useState([])
 useEffect(()=>{
     axios.get('http://localhost:4001/user')
     .then(resp=>{
      setState(resp.data.slice(0,2))
     })
     .catch(error=>{
      error
     })
 },[])

 
  return (
    <div>
<h1>hello</h1>
<p>{JSON.stringify(datas)}</p>
<button onClick={setAxio}>click</button>


<div>
 <ul>
   {
    state.map((fillter)=>(
      <div className='box'>
      <li>ID:{fillter.id}</li>
      <li>TITLE:{fillter.title}</li>
      <li>BODY:{fillter.body}</li>
      </div>
    ))
  }
 </ul>
</div>
    </div>
  )
}


export default App
