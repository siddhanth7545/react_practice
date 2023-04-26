import React from "react";
import JSON from "./User.json";
import UserProfiles from "./UserProfiles";
import  "./Task.css"

const Team = () => {
  return (
    <div>
        <UserProfiles payload={JSON}/>
    
    </div>
  )
}

export default Team;