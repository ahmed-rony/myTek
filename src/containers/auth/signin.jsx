import React, {useState} from 'react';
import '../../assets/stylsheets/auth.css'
import { Loader } from '../../components/loader/loader.jsx';
import handleLogin from '../../utils/auth/handleLogin.jsx';
import { Info } from 'react-feather';
import logo from '../../assets/svgs/logo.ico'

function Signin() {
  const [loading, setisLoading] = useState(false)
  const [isnotSuccessfull, setisnotSuccessfull] = useState(false)
  const [responseMessage, setresponseMessage] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    const newUser = e.target.value;
    setUsername(newUser);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const states = [setisLoading, setisnotSuccessfull, setresponseMessage, {username,password}]

  return (
   <div id='body-auth'>
    <div id='auth-box' >
       <img src={logo} id='auth-logo' />
       <section className='auth-cap'>
         <div className='auth-caplabel'>Username</div>
         <input type={'text'} placeholder={'Your username'} className='auth-input' name="email" value={username} onChange={handleUsernameChange} />
       </section>
       <section className='auth-cap'>
         <div className='auth-caplabel'>Password</div>
         <input type={'password'} placeholder={'12345678'} className='auth-input' name="password" value={password} onChange={handlePasswordChange} />
       </section>
       {isnotSuccessfull && <div id='auth-message-box'> <Info width={20} height={20} strokeWidth={1.5} />{responseMessage}</div>}
       <button className={loading ? 'auth-btn auth-btn-loading' : 'auth-btn'} 
         disabled={loading ? true : false} onClick={async () => await handleLogin(states)}>
         {loading ? <Loader color='white' /> : 'Sign in'}
      </button>
    </div>
   </div>
  );
}

export default Signin;
