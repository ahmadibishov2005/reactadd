import { useEffect, useState } from "react";
import axios from "axios";

function Add() {
    let [addData, setaddData]=useState("")
    
    function postData() {
        axios.post("https://northwind.vercel.app/api/products")
        .then(res=>{
            setData(res.data)
        })
        
    }

    useEffect(()=>{
        postData()
       },[])

       function handleSubmit(e) {
        
        e.preventDefault()
        let NewaddData={
            id: data.length+1,
            name: addData
        }
        setData([...data,NewaddData])
        setaddData("")}

        return (

            <div>
                <form action="">
                    <h1>Add</h1>
                    <input type="text" /><input type="text" />
                    <button></button>
                </form>
            </div>


        )


}


   
   



export default Add


