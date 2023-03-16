import React,{useState} from 'react'
import { faker } from '@faker-js/faker'

const Fakers = () => {
  let [username,setUsername] = useState(faker.internet.userName())
  let [email,setEmail] = useState(faker.internet.email())
  let [img,setImg] = useState(faker.image.avatar())

  let handleusername =()=>{
    setUsername(faker.internet.userName())
  }
  let handleemail =()=>{
    setEmail(faker.internet.email())
  }
  let  handleChange =()=>{
    setImg(faker.image.avatar())
  }

  return (
    <div>
        <h3>{username}</h3>
        <h3>{email}</h3>
        <img src={img} alt="" /> <br /><br />
        <button onClick={handleusername}>Change name</button><br /><br />
        <button onClick={handleemail}>Change email</button> <br /><br />
        <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Fakers