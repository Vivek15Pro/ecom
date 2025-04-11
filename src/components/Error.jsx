import React, { useState } from 'react'

const Error = ({prop}) => {
  const [list,setList]= useState('')


  useEffect(async() => {
  data = await fetch('')
  const newData=data.json()
  setList(newData)
     // var timer =setTimeInterval(()=>{

    // },2000)

  return()=>{
clearInterval(timer)
  }
  }, [list,prop])
  
  return (
    <div>Page nor found</div>
  )
}

export default Error