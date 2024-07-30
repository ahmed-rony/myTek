import React, { useState, useEffect } from 'react';
import './tables.css';
import { Card4_A5 } from '../../../utils/boards/board1';
import numeral from 'numeral';
import queryFormater from '../secs/queryFormater.jsx'


function Tables({ closeNav, PropertyId }) {
  const [responseState, setResponseState] = useState(null);
  const formatNumber = num => numeral(Math.floor(num)).format("0,0");

  useEffect(() => {
    Card4_A5(queryFormater(PropertyId), setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  Tenant: 'Wait', Balance: 'Wait', Note: 'Wait' },
    ];

  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
      { '#' : 0,  Tenant: 'N/A', Balance: 'N/A', Note: 'N/A' },
    ];
  } else {
    response = [
      { '#' : 0,  Tenant: 'Error', Balance: 'Error', Note: 'Error' },
    ];
  }

  return (
    <div id='show-table-boards-11'>
      <div id='show-table-boards-11-header'>
        <button onClick={() => closeNav()}>Close</button>
      </div>
      <div id='table-boards-11-tablecontainer-before'>
        <table id='table-boards-11-tablecontainer'>
          <thead>
            <tr>
              <th className='table-boards-11-tablecontainer-thtd'>#</th>
              <th className='table-boards-11-tablecontainer-thtd'>Tenant</th>
              <th className='table-boards-11-tablecontainer-thtd'>Balance</th>
              <th className='table-boards-11-tablecontainer-thtd'>Note</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.slice().sort((a, b) => a.Tenant.localeCompare(b.Tenant)).map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Tenant}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Balance)}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Note}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Tenant}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Balance)}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.Note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
