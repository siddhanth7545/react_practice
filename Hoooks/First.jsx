import React,{useState} from 'react'

const First = () => {

  let [username,setUsename] =useState("SIDD")
  let [phone,setPhone]= useState("8660247662")

  let handleusername = ()=>{
    setUsename("Puma")
  }
  
  let handlephone =()=>{
    setPhone("9019656555")
  }

  return (
    <div>
        <h1>{username}</h1>
        <h1>{phone}</h1>
        <button onClick={handleusername}>Change name</button><br /><br />
        <button onClick={handlephone}>Change Ph.No</button>
    </div>
  )
}

export default First