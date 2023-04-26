import React from 'react'

const UserProfiles = (props) => {
    console.log(props);
  return (
    <>
    <center><h1>IPL Team list</h1></center>
    <div className='parentblock'>
        <div className='mainblock'>
            <img src={props.payload[0].TeamLogo} alt="" />
            <h2>{props.payload[0].TeamName}</h2>
            <h2>{props.payload[0].TeamCaptain}</h2>
            <h2>{props.payload[0].TeamHometown}</h2>
            <h2>{props.payload[0].TeamMembers}</h2>
        </div>
    </div>
    </>
  )}

  export default UserProfiles