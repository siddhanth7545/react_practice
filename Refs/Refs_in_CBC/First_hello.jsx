import React, { Component, createRef } from 'react'

export default class First_hello extends Component {

    constructor(){
        super()
        this.state={name:"HELLO SIDDHANTH"}
        this.h1Ref= createRef
    }
    componentDidMount(){
        let h1=document.querySelector('h1')
        console.log(h1,"DOM WAY");
        console.log(this.h1Ref.current,"REACT WAY");
    }

  render() {
    return (
      <>
        <h1 ref={this.h1Ref}>{this.state.name}</h1>
      </>
    )
  }
}
