import React, { Component } from 'react'
import { createRef } from 'react'

export default class Jspider extends Component {
    constructor(){
        super()
        this.state={
            company:"MOTOVERSE"
        }
        this.spanRef = createRef()
        this.btnRef  =  createRef()
    }
  render() {
    return (
      <>
        <span ref={this.spanRef}>{this.state.company}</span> <br /><br />
        <button ref={this.btnRef} onClick={()=>{
            this.setState({company:"MOTOVERSE"})
            this.spanRef.current.style.color="red"
            this.spanRef.current.style.border="2px solid black"
            this.spanRef.current.style.padding="5px"
            this.btnRef.current.style.color="blue"
            this.btnRef.current.style.background="orange"
            this.btnRef.current.style.borderRadius="50%"
        }}>Change Company</button>


      </>
    )
  }
}
