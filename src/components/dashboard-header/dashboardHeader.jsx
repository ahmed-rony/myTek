
import React,{useState} from 'react'
import './dashboardHeader.css'
import logo from '../../assets/svgs/BushburgSymbol_RGB_Charcoal.png'
import handleLogout from '../../utils/auth/handleLogout.jsx'
import { Link } from 'react-router-dom'

function DashboardHeader({active}) {
  const [isLogoutloading, setisLogoutloading] = useState(false);

  const lists = [
    {title:'Collections' , index:1},
    {title:'Leasing' , index:2},
    {title:'Operations' , index:3},
  ]

  return (
    <div id='dashboard-header'>
      <img src={logo} onClick={()=> window.location.href = '/'} />
      <div id='dashboard-header-tabs'> 
          {lists.map((elem, index ) => (
            <Link key={index} className={elem.index === active ? 
            'dashboard-header-tabs dashboard-header-tabs-active' 
            : 'dashboard-header-tabs'} to={`/dashboard/${elem.index}`}>
             {elem.title}</Link>
          ))}
          <button id='dashboard-header-button' onClick={async ()=> await handleLogout(setisLogoutloading)}>
          {isLogoutloading ? 'Signing out....' : 'Sign out'}
          </button>
       </div>
    </div>
  )
}

export default DashboardHeader