
import React, {useState, useEffect} from 'react'
import '../../assets/stylsheets/boards.css'
import DashboardHeader from '../../components/dashboard-header/dashboardHeader.jsx'
import Board3Component from '../../components/board3/board-3.jsx'
import validateUser from '../../utils/user/validateUser.jsx'
import {Loader}  from '../../components/loader/loader.jsx'
import Footer from '../../components/footer/footer.jsx'

function Board3({active = 3}) {
  const [wasAuthenticated, setwasAuthenticated] = useState(null);
  const [userData, setuserData] = useState('');
  const [loading, setisloading] = useState(true);

  useEffect(() => {
    const states = [setwasAuthenticated, setuserData, setisloading]
    validateUser(states);
  }, []);
  
  return (
    <div id='body-boards' style={{backgroundColor:'white'}}>
      <DashboardHeader active={active} />
      {loading ? (
      <>
        <div style={{marginTop: '20em'}}>
          <Loader color={'var(--colorB)'} />
        </div>
      </>
      ) : (
      <>
      {wasAuthenticated &&  <Board3Component /> }
      <Footer color={'var(--colorC)'} />
      </>
     ) 
     }
    </div>
  )
}

export default Board3