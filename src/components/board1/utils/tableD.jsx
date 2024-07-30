import React, { useState, useEffect } from 'react';
import './tables.css';
import {  Card2_A6 } from '../../../utils/boards/board1.jsx';
import numeral from 'numeral';
import { getThisOneandTwoMonthBack } from '../../../utils/dates/date.jsx';


const formatNumber = num => numeral(Math.floor(num)).format("0,0");

function TableD({ closeNav, PropertyId }) {
  const [responseState, setResponseState] = useState(null);
  useEffect(() => {
   Card2_A6(PropertyId, setResponseState);
  }, []);

  let response = []
  const nullresponse = [
      { '#' : 0,  "Property Name": "Wait", [`Amount Collected ${getThisOneandTwoMonthBack()[0]}`]: "Wait"},
  ];

  if (typeof responseState === 'object') {
    response = responseState;
  }  else if (responseState === '0') {
    response = [
       { '#' : 0,  "Property Name": "N/A", [`Amount Collected ${getThisOneandTwoMonthBack()[0]}`]: "N/A"},
    ];
  } else {
    response = [
       { '#' : 0,  "Property Name": "Error", [`Amount Collected ${getThisOneandTwoMonthBack()[0]}`]: "Error"}
    ];
  }

  return (
    <div id='show-table-boards-11'>
      <div id='show-table-boards-11-header'>
        <button onClick={() => closeNav()}>Close</button>
      </div>
      <div id='table-boards-11-tablecontainer-before-long'>
        <table className='tab_01' id='table-boards-11-tablecontainer'>
          <thead>
            <tr>
              <th className='table-boards-11-tablecontainer-thtd'>#</th>
              <th className='table-boards-11-tablecontainer-thtd'>Property Name</th>
              <th className='table-boards-11-tablecontainer-thtd'>{`Amount Collected ${getThisOneandTwoMonthBack()[0]}`}</th>
            </tr>
          </thead>
          <tbody>
            {responseState !== null ? response.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.PropertyName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Amount)}</td>
              </tr>
            )) : nullresponse.map((item, index) => (
              <tr key={index}>
                <td className='table-boards-11-tablecontainer-thtd'>{index + 1}</td>
                <td className='table-boards-11-tablecontainer-thtd'>{item.PropertyName}</td>
                <td className='table-boards-11-tablecontainer-thtd'>${formatNumber(item.Amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableD;
