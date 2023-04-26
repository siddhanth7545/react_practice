import React from 'react'

const Name = (props) => {
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
        <div className='mainblock'>
            <img src={props.payload[1].TeamLogo} alt="" />
            <h2>{props.payload[1].TeamName}</h2>
            <h2>{props.payload[1].TeamCaptain}</h2>
            <h2>{props.payload[1].TeamHometown}</h2>
            <h2>{props.payload[1].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[2].TeamLogo} alt="" />
            <h2>{props.payload[2].TeamName}</h2>
            <h2>{props.payload[2].TeamCaptain}</h2>
            <h2>{props.payload[2].TeamHometown}</h2>
            <h2>{props.payload[2].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[3].TeamLogo} alt="" />
            <h2>{props.payload[3].TeamName}</h2>
            <h2>{props.payload[3].TeamCaptain}</h2>
            <h2>{props.payload[3].TeamHometown}</h2>
            <h2>{props.payload[3].TeamMembers}</h2>
        </div>
    </div>
    <br />
    <div className='parentblock' >
        <div className='mainblock'>
            <img src={props.payload[4].TeamLogo} alt="" />
            <h2>{props.payload[4].TeamName}</h2>
            <h2>{props.payload[4].TeamCaptain}</h2>
            <h2>{props.payload[4].TeamHometown}</h2>
            <h2>{props.payload[4].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[5].TeamLogo} alt="" />
            <h2>{props.payload[5].TeamName}</h2>
            <h2>{props.payload[5].TeamCaptain}</h2>
            <h2>{props.payload[5].TeamHometown}</h2>
            <h2>{props.payload[5].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[6].TeamLogo} alt="" />
            <h2>{props.payload[6].TeamName}</h2>
            <h2>{props.payload[6].TeamCaptain}</h2>
            <h2>{props.payload[6].TeamHometown}</h2>
            <h2>{props.payload[6].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[7].TeamLogo} alt="" />
            <h2>{props.payload[7].TeamName}</h2>
            <h2>{props.payload[7].TeamCaptain}</h2>
            <h2>{props.payload[7].TeamHometown}</h2>
            <h2>{props.payload[7].TeamMembers}</h2>
        </div>
    </div>
    <br />
    <div className='parentblock'>
         <div className='mainblock'>
            <img src={props.payload[8].TeamLogo} alt="" />
            <h2>{props.payload[8].TeamName}</h2>
            <h2>{props.payload[8].TeamCaptain}</h2>
            <h2>{props.payload[8].TeamHometown}</h2>
            <h2>{props.payload[8].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[9].TeamLogo} alt="" />
            <h2>{props.payload[9].TeamName}</h2>
            <h2>{props.payload[9].TeamCaptain}</h2>
            <h2>{props.payload[9].TeamHometown}</h2>
            <h2>{props.payload[9].TeamMembers}</h2>
        </div>
    </div>
    <br />
    <center><h1>Kabbadi Team List</h1></center>
    <div className='parentblock'>
         <div className='mainblock'>
            <img src={props.payload[10].TeamLogo} alt="" />
            <h2>{props.payload[10].TeamName}</h2>
            <h2>{props.payload[10].TeamCaptain}</h2>
            <h2>{props.payload[10].TeamHometown}</h2>
            <h2>{props.payload[10].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[11].TeamLogo} alt="" />
            <h2>{props.payload[11].TeamName}</h2>
            <h2>{props.payload[11].TeamCaptain}</h2>
            <h2>{props.payload[11].TeamHometown}</h2>
            <h2>{props.payload[11].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[12].TeamLogo} alt="" />
            <h2>{props.payload[12].TeamName}</h2>
            <h2>{props.payload[12].TeamCaptain}</h2>
            <h2>{props.payload[12].TeamHometown}</h2>
            <h2>{props.payload[12].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[13].TeamLogo} alt="" />
            <h2>{props.payload[13].TeamName}</h2>
            <h2>{props.payload[13].TeamCaptain}</h2>
            <h2>{props.payload[13].TeamHometown}</h2>
            <h2>{props.payload[13].TeamMembers}</h2>
        </div>
    </div>
    <br />
    <div className='parentblock'>
         <div className='mainblock'>
            <img src={props.payload[14].TeamLogo} alt="" />
            <h2>{props.payload[14].TeamName}</h2>
            <h2>{props.payload[14].TeamCaptain}</h2>
            <h2>{props.payload[14].TeamHometown}</h2>
            <h2>{props.payload[14].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[15].TeamLogo} alt="" />
            <h2>{props.payload[15].TeamName}</h2>
            <h2>{props.payload[15].TeamCaptain}</h2>
            <h2>{props.payload[15].TeamHometown}</h2>
            <h2>{props.payload[15].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[16].TeamLogo} alt="" />
            <h2>{props.payload[16].TeamName}</h2>
            <h2>{props.payload[16].TeamCaptain}</h2>
            <h2>{props.payload[16].TeamHometown}</h2>
            <h2>{props.payload[16].TeamMembers}</h2>
        </div>
        <div className='mainblock'>
            <img src={props.payload[17].TeamLogo} alt="" />
            <h2>{props.payload[17].TeamName}</h2>
            <h2>{props.payload[17].TeamCaptain}</h2>
            <h2>{props.payload[17].TeamHometown}</h2>
            <h2>{props.payload[17].TeamMembers}</h2>
        </div>
    </div>



    </>
  )
}

export default Name