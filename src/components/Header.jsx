import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <div style={{display:'flex',justifyContent:'center',gap:'20px',alignItems:'center',border:'2px solid red',background:'black',color:'white',height:'15vh',width:'100%'}}>
    <div >
       <Link to={'/'}> Home</Link>

       
       </div>
    <div>
    <Link to={'/about'}> About</Link>
        </div>
  
    <div>Contact</div>
    <div>Kuch bhi</div>
   </div>
   </>
  )
}

export default Header