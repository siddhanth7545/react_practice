import React, { Component } from 'react'

export default class StatesApp extends Component {

  state ={
    username:"Siddhanth"
  }
  render() {
    return (
      <>
      <h1>{this.state.username}</h1>
      </>
    )
  }
}
