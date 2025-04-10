import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const clicked = ()=>{
        navigate('/')
    }

    
  return (
    <>
    <div>About</div>
    <button onClick={clicked}>Click meee </button>
    </>
  )
}

export default About