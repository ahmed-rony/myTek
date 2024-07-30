
import React, {useState, useEffect} from 'react'
import '../../assets/stylsheets/boards.css'
import DashboardHeader from '../../components/dashboard-header/dashboardHeader.jsx'
import Board1Component from '../../components/board1/board-1.jsx'
import validateUser from '../../utils/user/validateUser.jsx'
import {Loader}  from '../../components/loader/loader.jsx'
import Footer from '../../components/footer/footer.jsx'

function Board1({active = 1}) {
  const [wasAuthenticated, setwasAuthenticated] = useState(null);
  const [userData, setuserData] = useState('');
  const [loading, setisloading] = useState(true);

  useEffect(() => {
    const states = [setwasAuthenticated, setuserData, setisloading]
    validateUser(states);
  }, []);

  return (
    <div id='body-boards'>
      <DashboardHeader active={active} />
      {loading ? (
      <>
        <div style={{marginTop: '20em'}}>
          <Loader color={'var(--colorB)'} />
        </div>
      </>
      ) : (
      <>
      {wasAuthenticated &&  <Board1Component /> }
     <Footer color={'var(--colorA)'} />
      </>
     )
     }
    </div>
  )
}

export default Board1 
