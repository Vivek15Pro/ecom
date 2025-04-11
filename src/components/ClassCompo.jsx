import React, { Component } from 'react'
import ClassProps from './classProps'
import ClassPropsSecond from './classPropsSecond';

export default class ClassCompo extends Component {
    constructor(props){
        super(props);
            this.state={
                count:0,
                count2:1
            }
            console.log("parent constructore render")
    }


   async componentDidMount(){
    data = await fetch('')
    const newData=data.json()
    this.setState({count:newData})
        console.log("parent componentDidMount render")
         // this.setTimeInterval(()=>{

    // },2000)
    }
//    componentDidUpdate(prevProps,prevState){
//     this.state.count !==this.prevState ||
//     this.state.count2 !==this.prevState
//    }

// componentWillUnmount(){
//     clearInterval()
// }


  render() {
    console.log("parent ui render")
    return (
        <>
      <div>classCompo : -</div>
        <ClassProps name="iron man"></ClassProps>
        <ClassPropsSecond name="thor"></ClassPropsSecond>
        </>
    )
  }
}
