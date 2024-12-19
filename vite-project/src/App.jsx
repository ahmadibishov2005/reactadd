import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  let [data, setData] = useState([])
  let [addData,setaddData]=useState("")
  let [addstock,setaddstock]=useState(0)


  function getData() {
    axios.get("https://northwind.vercel.app/api/products")
    .then(res=>{
      setData(res.data)
    })
  }

  useEffect(()=>{
    getData()
  },[])


  async function handleDelete(id){
    await axios.delete("https://northwind.vercel.app/api/products/"+id)
    let filtered = data.filter(element=>element.id!==id)
        setData(filtered)
  }

        


       function handleSubmit(e) {
        
        e.preventDefault()
        let NewaddData={
            name: addData,
            unitsInStock:addstock
        }

        axios.post("https://northwind.vercel.app/api/products/",NewaddData)
        .then(res=>{
          setData([...data,res.data])
        })

       
}
  return (
    <>
    <div>
    <form onSubmit={(e)=>handleSubmit(e)}>
                  <h1>Add</h1>
                    <input type="text" value={addData} onChange={(e)=>setaddData(e.target.value)}/>
                    <input type="number" value={addstock} onChange={(e)=>setaddstock(e.target.value)} />
                    <button>Add</button>
                </form>
    <table>
      <tr>
        <th>name</th>
        <th>unitsInStock</th>
        <th>unitPrice</th>
      </tr>
     { 
        data.map(elem=>(
          <tr>
       <td>{elem.name}</td>
       <td style={{backgroundColor: elem.unitsInStock > 10 ? "green" : "red"}}>{elem.unitsInStock}</td>
       <td style={{backgroundColor: elem.unitsInStock > 10 ? "red" : "green"}} >{elem.unitPrice}</td>
       <td key={elem?.id}> <button style={{backgroundColor: "white"}} onClick={()=>handleDelete(elem?.id)}>Delete</button></td>
        </tr>
        ))
     }
    </table>
    </div>
    </>
  )
}

export default App
