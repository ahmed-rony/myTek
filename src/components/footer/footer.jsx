
import React from 'react'
import './footer.css'
import logo from '../../assets/svgs/logo.ico'

function Footer({color}) {
  return (
    <div id='app-footer' style={{backgroundColor: color}}>
    <img src={logo} />
    <div> This software is owned by MYTEK. Illegal distribution is prohibited. </div> 
    <div> © [2024] MYTEK. All Rights Reserved. </div>
    <div> Contact MYTEK - <a href='mailto:support@mytek.cloud ' style={{textDecoration:'none', fontFamily:'bold', color:'black'}}>support@mytek.cloud</a> </div>
    </div>
  )
}

export default Footer
