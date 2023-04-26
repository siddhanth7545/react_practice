import React,{useState, useEffect} from 'react'
import axiosInstance from './axiosInstance'
import {Link} from "react-router-dom"
const ViewPost = () => {
    let [data, setData] = useState([])
    useEffect(()=>{
            let fetchData = async()=>{
                let {data} = await axiosInstance.get('/posts')
                setData(data)
            }
            fetchData()
    },[])

    let deleteData = async(id)=>{
        await axiosInstance.delete(`/posts/${id}`)
        window.location.assign('/viewposts')

    }

  return (
    <div  style={{display : "flex" ,  }}>
        {data.map((x)=>{
            return (

            <div style={{border : "2px solid black" , width :"40%" ,display:"flex"
            ,flexDirection: "column" , justifyContent:"center"

            , alignItems:"center" , }}>
                <h1>{x.coursename}</h1>
                <h2> {x.authorname}</h2>
                <Link to={`/updateposts/${x.id}`}>UPDATE</Link>
                <button onClick={()=>{
                    deleteData(x.id)
                }}>DELETE</button>
            </div>

            )
        })}
    </div>
  )
}

export default ViewPost
