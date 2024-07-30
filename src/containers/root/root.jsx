
import React, {useState, useEffect} from 'react'
import '../../assets/stylsheets/root.css'
import logo from '../../assets/svgs/local_1 (2) copy.svg'
import hello from '../../assets/svgs/hello.svg'
import handleLogout from '../../utils/auth/handleLogout.jsx'
import validateUser from '../../utils/user/validateUser.jsx'
import {Loader}  from '../../components/loader/loader.jsx'
import Footer from '../../components/footer/footer.jsx'

function Root() {
  const [wasAuthenticated, setwasAuthenticated] = useState(null);
  const [userData, setuserData] = useState('');
  const [loading, setisloading] = useState(true);
  const [isLogoutloading, setisLogoutloading] = useState(false);

  useEffect(() => {
    const states = [setwasAuthenticated, setuserData, setisloading]
    validateUser(states);
  }, []);

  return (
    <>
    <div id='body-root'>
     {loading ? (<Loader color={'var(--colorB)'} />) : (
      <>
      {wasAuthenticated && (
       <>
        <div id='root-header'>
         <img src={logo} onClick={()=> window.location.reload()} />
         <button onClick={async ()=> await handleLogout(setisLogoutloading)}>
          {isLogoutloading ? 'Signing out....' : 'Sign out'}
         </button>
        </div>
        <div>
         <img src={hello} id='root-svg'/>
         <h2 id='root-heading'>Welcome to myTek</h2>
         <p id='root-paragraph'>You are signed in with token <span id='root-paragrah-span'>{userData}</span></p>
         <button id='root-btn' onClick={()=> window.location.href = '/dashboard/1'}>Go to Dashboard</button>
        </div>
      </>
      )}
      </>
     )}
    </div>
    <Footer  color={'var(--colorC)'} />
    </>
  )
}

export default Root
