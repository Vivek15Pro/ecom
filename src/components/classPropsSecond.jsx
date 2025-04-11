import React, { Component } from 'react'

export default class ClassPropsSecond extends Component {
    constructor(props){
        super(props)
        console.log("child second constructore render")
    }
    componentDidMount(){
        console.log("child second componentDidMount render")
    }
  render() {
    console.log("second child  ui render")
    const {name}=this.props
    return (
      <div>classPropssecond:- {name}</div>
    )
  }
}
