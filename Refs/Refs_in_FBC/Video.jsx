import React,{useState,useRef} from 'react'
import VIDEO from "./clgvideo.mp4.mp4"

const Video = () => {

    let [video,setVideo] = useState(VIDEO)
    let [loading,setLoading] = useState(false)
    let videoRef=useRef()
    let playorpause=()=>{
        if(!loading){
            setLoading(true)
            videoRef.current.play()
        }
        else{
            setLoading(false)
            videoRef.current.pause()
        }
    }
  return (
    <div>
        <video src={video} onClick={playorpause} ref={videoRef} height="400px" width="500px"></video>
    </div>
  )
}

export default Video