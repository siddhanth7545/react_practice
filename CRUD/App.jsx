import React from 'react'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import ViewPost from './ViewPost'

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<CreatePost />}/>
              <Route path="/viewposts" element={<ViewPost />}/>
              <Route path="/updateposts/:id" element={<UpdatePost/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App