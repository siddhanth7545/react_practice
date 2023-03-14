import React, { Component } from 'react'

export default class ConstructorApp extends Component {
  constructor()
  {
    super()
    this.state={
       username : "SIDD"
    }
  }
  render() {
    return (
      <h1>{this.state.username}</h1>
    )
  }
}
