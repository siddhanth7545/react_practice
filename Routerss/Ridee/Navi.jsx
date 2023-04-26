 import React from 'react'
import { Link } from 'react-router-dom'

 
 const Navi = () => {
   return (
     <div>
        <div>Logo</div>
        {/* <div>
            <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ol>
        </div> */}
        <div>
              <nav class Name="navbar navbar-inverse">
                  <ul class Name="nav navbar-nav">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/Login'>LOGIN</Link></li>
                  </ul>
                  <p class="navbar-text">Some text</p>
                </nav>
        </div>
                        
     </div>
   )
 }
 
 export default Navi