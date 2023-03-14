import React from "react";
import JSON from "./Userdata.json";
import Name from "./Name";
import "./ipl.css"

const Team = () => {
  return (
    <div>
        <Name payload={JSON}/>
    </div>
  )
}

export default Team;