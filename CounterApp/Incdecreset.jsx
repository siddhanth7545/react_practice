import React, { Component } from 'react'
import "./Count.css"

export default class Incdecreset extends Component {
  constructor(){
    super()
    this.state={
        count : 0
    }
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
      <div className='main'>
        <h1>{this.state.count}</h1>
        <div className='but'>
            <button onClick={this.handleIncrement} className='ton'>+ Increment</button>
            <button onClick={this.handleDecrement} className='ton'>- Decrement</button>
            <button onClick={this.handleReset} className='ton'>RESET</button>
        </div>


      </div>
      
    )
  }
}
