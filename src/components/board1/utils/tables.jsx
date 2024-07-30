import React, { useState, useEffect } from 'react';
import './tables.css';
import { Card1_A1, Card1_B1, Card1_C1 } from '../../../utils/boards/board1';
import queryFormater from '../secs/queryFormater.jsx';


function Tables({ closeNav, PropertyId, Index }) {
  const [responseState, setResponseState] = useState(null);
  useEffect(() => {
     if (Index === 1)  Card1_A1(queryFormater(PropertyId), setResponseState);
     if (Index === 2)  Card1_B1(queryFormater(PropertyId), setResponseState);
     if (Index === 3)  Card1_C1(queryFormater(PropertyId), setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  propertyName: 'Wait', FirstName: 'Wait', LastName: 'Wait', OpenBalance: 'Wait' },
    ];

  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
      { '#' : 0, propertyName: 'N/A', FirstName: 'N/A', LastName: 'N/A', OpenBalance: 'N/A' },
    ];
  } else {
    response = [
      { '#' : 0, propertyName: 'Error', FirstName: 'Error', LastName: 'Error', OpenBalance: 'Error' },
    ];
  }

  return (
    <div id='show-table-boards-11'>
      <div id='show-table-boards-11-header'>
        <button onClick={() => closeNav()}>Close</button>
      </div>
      <div id='table-boards-11-tablecontainer-before'>
        <table className='tab_01' id='table-boards-11-tablecontainer'>
          <thead>
            <tr>
              <th className='table-boards-11-tablecontainer-thtd'>#</th>
              <th className='table-boards-11-tablecontainer-thtd'>propertyName</th>
              <th className='table-boards-11-tablecontainer-thtd'>FirstName</th>
              <th className='table-boards-11-tablecontainer-thtd'>LastName</th>
              <th className='table-boards-11-tablecontainer-thtd'>OpenBalance</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.slice().sort((a, b) => a.FirstName.localeCompare(b.FirstName)).map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.propertyName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.FirstName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.LastName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${item.OpenBalance}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.propertyName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.FirstName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.LastName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.OpenBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
