import React, { Component } from 'react'

export default class ClassProps extends Component {
    constructor(props){
        super(props)
        console.log("child constructore render")
    }
    componentDidMount(){
        console.log("child componentDidMount render")
    }
  render() {
    console.log("child ui render")
    const {name}=this.props
    return (
      <div>classProps:- {name}</div>
    )
  }
}
