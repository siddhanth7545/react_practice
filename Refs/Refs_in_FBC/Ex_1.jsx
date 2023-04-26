import React,{useState} from 'react'
import { useRef } from 'react'
import IMG from "./sidimage.jpg"

const Ex_1 = () => {

    let h1Ref= useRef()
    let handleChange=()=>{
        h1Ref.current.style.color="red"
    }

    let [photo,setPhoto]=useState(IMG)
    let [loading,setLoading]=useState(true)
    let imgRef=useRef()
    let handleimgChange=()=>{
        if(loading==true){
            setLoading(!true)
            imgRef.current.style.borderRadius ="25%"
            imgRef.current.style.border="2px solid purple"
        }
        else{
            setLoading(!false)
            imgRef.current.style.borderRadius ="0"
            imgRef.current.style.border="none"
        }
    }

  return (
    <div>
        <h1 ref={h1Ref}>Bhunna</h1>
        <button onClick={handleChange}>Change</button>
        <br /><br /><br /><br />
        <img src={photo} alt="sidd" ref={imgRef} height="200px" width="200px" />
        <button onClick={handleimgChange}>{loading? "ON" : "OFF"}</button>
    </div>
  )
}

export default Ex_1