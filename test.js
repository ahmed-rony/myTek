// import fs from 'node:fs'

// fetch('https://cors-proxy-lgy8.onrender.com/?url=https://bbp.api.rentmanager.com/Reports/78/RunReport?GetOptions=ReturnJSONStream', {
//   headers: {
//       method: 'GET',
//       'Content-Type': 'application/json',
//       'X-RM12Api-ApiToken': 'UvBepmNcr4o7PzM7SDIIu5OwLR7m4ekKeVSwdD3-yTOCSCz5HVmXcuoicEQZd2mBnyBufOEJsBBCVoY6Mt3ylljqMkR4p53Ko3-WlAySVs8='
//   }
// })
// .then((response)=> {
//   return response.json();
// })
// .then((data)=> {
//   const output = JSON.stringify(data, null, 2);
//   fs.writeFileSync('output.json', output);
//   console.log('Output written to output.json');
// })
// .catch(err => console.error(err.message))