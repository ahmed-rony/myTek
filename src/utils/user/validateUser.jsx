
import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER, AuthorizeToken } from '../../variable.jsx';

export default async function validateUser(states) {
  const token = Cookies.get()

  const setwasAuthenticated = bool => states[0](bool)
  const setuserData = data => states[1](data)
  const loading = bool => states[2](bool)

  setTimeout(() => {
  if (token['x-x-TOKEN-user']) {
        fetch(PROXYSERVER + BASENDPOINT + AuthorizeToken + token['x-x-TOKEN-user'], {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        })
        .then(response => {
        if (!response.ok) {
        // Check if the response status is not OK (in the range 200-299)
        throw { response, message: `HTTP error! Status: ${response.status}` };
        }
        return response.json();
        })
       .then(data => {
       if (data) {
         loading(false)
         setwasAuthenticated(true)
         setuserData(data.split('').slice(0, 9).join('').toLowerCase() + '...')
        }
       }) 
       .catch(error => {
        if (error.response) {
        // Check the status code and handle errors accordingly
        window.location.href = '/signin'
        setwasAuthenticated(false)
        loading(false)
        }
      });
  } else {
     window.location.href = '/signin'
     setwasAuthenticated(false)
     loading(false)
  }
  }, 1000)
}