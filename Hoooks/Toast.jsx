import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {

    let handleSubmit=()=>{
        toast.success("LOGGED IN SUCCESS",{
            position: toast.POSITION.TOP_RIGHT
        })
    }

    let handleerror=()=>{
        toast.error("LOGGED IN FAILED",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    let handleown=()=>{
        toast.success("Siddhanth Toast",{
            position: toast.POSITION.TOP_CENTER
        })
    }


  return (
    <div>
        <ToastContainer/>
        <button onClick={handleSubmit}>Click Siddhanth for logged in</button><br /><br />
        <button onClick={handleown}> Click for Own Toast </button> <br /><br />
        <button onClick={handleerror}>Failed toast</button>
    </div>
  )
}

export default Toast