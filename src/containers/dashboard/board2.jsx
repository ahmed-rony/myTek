
import React, {useState, useEffect} from 'react'
import '../../assets/stylsheets/boards.css'
import DashboardHeader from '../../components/dashboard-header/dashboardHeader.jsx'
import Board2Component from '../../components/board2/board-2.jsx'
import validateUser from '../../utils/user/validateUser.jsx'
import {Loader}  from '../../components/loader/loader.jsx'
import Footer from '../../components/footer/footer.jsx'

function Board2({active = 2}) {
  // const [wasAuthenticated, setwasAuthenticated] = useState(null);
  // const [userData, setuserData] = useState('');
  // const [loading, setisloading] = useState(true);
  const [wasAuthenticated, setwasAuthenticated] = useState(true);
  const [userData, setuserData] = useState('');
  const [loading, setisloading] = useState(false);

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
      {wasAuthenticated &&  <Board2Component /> }
      <Footer color={'var(--colorC)'} />
      </>
     )
     }
    </div>
  )
}

export default Board2