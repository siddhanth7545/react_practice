import React, { Component } from 'react'

export default class StoreArray extends Component {

  state={
    Subject : "Reactjs",
    Skills : ["HTML","CSS","JS"]
  }
  render() {
    return (
      <>
      <h1>{this.state.Subject}</h1>
      <ul>
        {this.state.Skills.map((x) =>{
            return <li>{x}</li>
        })}
      </ul>
      </>
    )
  }
}
