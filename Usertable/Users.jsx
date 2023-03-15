import React from 'react'

const Users = (props) => {
    let data=props.data
  return (

    <div >
        <center>
            <h1>Student Details</h1>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>occupation</th>
                    <th>salary</th>
                    <th>photo</th>
                    <th>phone number</th>
                </tr>
                {data.map((x)=>{
                return <tr>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            <td>{x.gender}</td>
                            <td>{x.occupation}</td>
                            <td>{x.salary}</td>
                            <td><img src={x.photo} alt="" style={{height:"80px", width:"110px"}} /></td>
                            <td >
                                <ol>
                                    {x.phone.map((x)=>{
                                        return <li>{x}</li>
                                    })}
                                </ol>
                            </td>
                       </tr>
                } )}
        </table>
        </center>
    </div>
  )
}

export default Users