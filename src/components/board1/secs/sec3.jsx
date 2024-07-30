
import React,{useState, useEffect} from 'react'
import '../board-1.css'
import './sec3.css'
// import { currentMonthName } from '../../../utils/dates/date.jsx'
import { PieChart } from 'react-minimal-pie-chart';
import { Card4_A1A2_PIE, Card4_A3, Card4_A4, Card4_NEW } from '../../../utils/boards/board1.jsx';
import TableB from '../utils/tableB.jsx'
import queryFormater from './queryFormater.jsx'

// function Level1ProgressBar({percentage}) {
//   const height  = `${percentage.split('.')[0]}%`
//   return (
//      <div className='board1-sec3-level1-progress-progress-track'>
//        <div className='board1-sec3-level1-progress-progress-inner' style={{height}}></div>
//      </div>
//   )
// }

function Level3Bar({percentageOfNotLegal}) {
  const width  = percentageOfNotLegal !== '...' ? `${percentageOfNotLegal.split('.')[0]}` : 0;
   const data = [
  { title: 'LegaL', value:  Number(width) , color: 'var(--colorB)' },
  { title: 'Not Legal', value: 100, color: 'var(--colorD)' }
  ];
  return  (
    <div style={{width: '140px', height:'140px'}}>
    <PieChart data={data} />
    </div>
  )
}

function Sec3({currentPropertyId, shouldStartQuery}) {
  const [showTable, setShowTable] = useState(false)
  const [level3_A1A2_PIE, setlevel3_A1A2_PIE] = useState('...')
  const [level3_A3, setlevel3_A3] = useState('...')
  const [level3_A4, setlevel3_A4] = useState('...')

  const [level3_newA, setlevel3_newA] = useState('...')
  const [level3_newB, setlevel3_newB] = useState('...')
  const [level3_newC, setlevel3_newC] = useState('...')
  const [level3_newD, setlevel3_newD] = useState('...')
  const [level3_newE, setlevel3_newE] = useState('...')


  useEffect(() => {
   if (shouldStartQuery) {
    console.log('from section 3 = ')
    //
    //  
    // 
    Card4_A1A2_PIE(queryFormater(currentPropertyId), setlevel3_A1A2_PIE)
    Card4_A3(currentPropertyId, setlevel3_A3)
    Card4_A4(currentPropertyId, setlevel3_A4)
    Card4_NEW(currentPropertyId, setlevel3_newA, 'LessThan30')
    Card4_NEW(currentPropertyId, setlevel3_newB, 'LessThan60')
    Card4_NEW(currentPropertyId, setlevel3_newC, 'LessThan90')
    Card4_NEW(currentPropertyId, setlevel3_newD, 'GreaterThan90')
    Card4_NEW(currentPropertyId, setlevel3_newE, 'TotalLeft')
   }
  }, [shouldStartQuery]); 

  return (
    <div id='board1-sec3'>
       {/* <div className='board1-sec3-level1-body'>
         <div id='board1-sec3-level1-title'>Charges Breakdown</div>
         <div id='board1-sec3-level1-label'>For Month of {currentMonthName()}</div>
         <div id='board1-sec3-level1-progress-body'>
            <div className='board1-sec3-level1-progress-cont'>
              <div>69.87%</div>
              <Level1ProgressBar percentage={'69.87'} />
              <div className='board1-sec3-level1-progress-label'>Rent</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>37.03%</div>
              <Level1ProgressBar percentage={'37.03'} />
              <div className='board1-sec3-level1-progress-label'>Reimbursement</div>
            </div> 
            <div className='board1-sec3-level1-progress-cont'>
              <div>97.82%</div>
              <Level1ProgressBar percentage={'97.82'} />
              <div className='board1-sec3-level1-progress-label'>Other</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>96.72%</div>
              <Level1ProgressBar percentage={'96.72'} />
              <div className='board1-sec3-level1-progress-label'>Tenant...</div>
            </div>
            <div className='board1-sec3-level1-progress-cont'>
              <div>7.48%</div>
              <Level1ProgressBar percentage={'7.48'} />
              <div className='board1-sec3-level1-progress-label'>Ancillary</div>
            </div>
         </div>

        <div id='board1-sec3-level1-table-body'>
            <table id='board1-sec3-level1-table-table'>
              <thead>
               <tr>
               <th className='board1-sec3-level1-table-thtd'>Category</th>
               <th className='board1-sec3-level1-table-thtd'>Count</th>
               <th className='board1-sec3-level1-table-thtd'>Charged</th>
               <th className='board1-sec3-level1-table-thtd'>Collected</th>
               <th className='board1-sec3-level1-table-thtd'>Ratio</th>
             </tr>
             </thead>
            <tbody>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Rental</td>
              <td className='board1-sec3-level1-table-thtd'>1817</td>
              <td className='board1-sec3-level1-table-thtd'>$4,627,832</td>
              <td className='board1-sec3-level1-table-thtd'>$3,223,397</td>
              <td className='board1-sec3-level1-table-thtd'>69.87%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Reimbursement</td>
              <td className='board1-sec3-level1-table-thtd'>94</td>
              <td className='board1-sec3-level1-table-thtd'>$512,407</td>
              <td className='board1-sec3-level1-table-thtd'>$189,751</td>
              <td className='board1-sec3-level1-table-thtd'>37.03%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Other</td>
              <td className='board1-sec3-level1-table-thtd'>34</td>
              <td className='board1-sec3-level1-table-thtd'>$60,223</td>
              <td className='board1-sec3-level1-table-thtd'>$58,912</td>
              <td className='board1-sec3-level1-table-thtd'>97.82%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Tenant Direct</td>
              <td className='board1-sec3-level1-table-thtd'>2</td>
              <td className='board1-sec3-level1-table-thtd'>$15,500</td>
              <td className='board1-sec3-level1-table-thtd'>$15,000</td>
              <td className='board1-sec3-level1-table-thtd'>96.77%</td>
            </tr>
            <tr>
              <td className='board1-sec3-level1-table-thtd'>Ancillary</td>
              <td className='board1-sec3-level1-table-thtd'>315</td>
              <td className='board1-sec3-level1-table-thtd'>$330,224</td>
              <td className='board1-sec3-level1-table-thtd'>$2,260</td>
              <td className='board1-sec3-level1-table-thtd'>7.48%</td>
            </tr>
           </tbody>
         </table>
        </div>
       </div> */}
      {/* level 1 */}


      <div id='board1-sec3-level2-body' className='board1-sec3-level1-body'>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>0-30 :</div>
          <div className='board1-sec3-level2-children-val' style={{color:'white'}}>${level3_newA}</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>31-60 :</div>
          <div className='board1-sec3-level2-children-val' style={{color:'white'}}>${level3_newB}</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>61-90 :</div>
          <div className='board1-sec3-level2-children-val' style={{color:'white'}}>${level3_newC}</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>91+ :</div>
          <div className='board1-sec3-level2-children-val' style={{color:'white'}}>${level3_newD}</div>
        </div>
        <div className='board1-sec3-level2-children'>
          <div className='board1-sec3-level2-children-title'>Total :</div>
          <div className='board1-sec3-level2-children-val' style={{color:'white'}}>${level3_newE}</div>
        </div>
      </div>
      {/* level 2 */}


      <div id='board1-sec3-level3-body'>
        <div id='board1-sec3-level3-title'>Legal in Action</div>
        <div id='board1-sec3-level3-sec2-body'>
          <div id='board1-sec3-level3-sec2-1'>
            {/* <div id='board1-sec3-level3-bar-title'>{level3_A1A2_PIE}%</div> */}
            <Level3Bar percentageOfNotLegal={level3_A1A2_PIE} />
            <div style={{fontFamily: 'regular',marginTop:'1em'}} >
             Legal: <span className='board1-sec3-level3-bar-progress-label' style={{backgroundColor:'var(--colorB)'}}></span>
             {/* NotLegal: <span className='board1-sec3-level3-bar-progress-label' style={{backgroundColor:'var(--colorD)'}}></span> */}
            </div>
          </div>
          <div id='board1-sec3-level3-sec2-2'>
            <div style={{marginBottom:'0.3em'}}>Total Tenants</div>
            <div>Legal in Action:</div>
            <div id='board1-sec3-level3-sec2-2-boldtxt1'>{level3_A3}</div>
            <div>Total Balance:</div>
            <div id='board1-sec3-level3-sec2-2-boldtxt2'>${level3_A4}</div>
            <button id='board1-sec3-level3-sec2-2-showmebtn' onClick={()=> setShowTable(true)}>More</button>
          </div>
        </div>
      </div>
      {/* level 3 */}

      {showTable && <TableB closeNav={()=>setShowTable(false)} PropertyId={currentPropertyId} />}
    </div>
  )
}

export default Sec3