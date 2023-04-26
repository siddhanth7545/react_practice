import React, { Component } from 'react'

export default class NonSyntheticEvent extends Component {
    constructor(){
        super()
        this.state={
            username: "Samarth"
        }
    }

    componentDidMount(){
        let btn=document.querySelector('button')
        btn.addEventListener('click',()=>{
            this.setState({username:this.state.username="Vedu"})
        })
    }

  render() {
    return (
      <>
        <div>{this.state.username}</div><br /><br />
        <button>Change Name</button>
        
      </>
    )
  }
}
