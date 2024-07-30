import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER, DeAuthorizeToken } from '../../variable.jsx';

export default async function handleLogout(loading) {
 loading(true)
 const token = Cookies.get()

 fetch(PROXYSERVER + BASENDPOINT + DeAuthorizeToken + token['x-x-TOKEN-user'], {
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
     Cookies.remove('x-x-TOKEN-user')
     //deauthenticate user
     window.location.href = '/signin'
   }
  }) 
  .catch(error => {
   if (error.response) {
   // Check the status code and handle errors accordingly
   loading(false)
   }
 });
}