
import React,{useState, useEffect} from 'react'
import '../board-1.css'
import './sec2.css'
import Tables from '../utils/tables'
import { Card1_A2, Card1_A3, Card1_A4, Card1_B2, Card1_B3, Card1_B4, Card1_C2, Card1_C3, Card1_C4, Card1_D1, Card1_D3, Card2_A1, Card2_A2, Card2_A3, Card2_A4, Card2_A7, Card3_D1 } from '../../../utils/boards/board1'
import { currentMonthName, getCurrentFormattedDateAndTime } from '../../../utils/dates/date.jsx'
import queryFormater from './queryFormater.jsx'
import TableC from '../utils/tableC.jsx'
import TableD from '../utils/tableD.jsx'

function Level1Card({arr}) {
  const color = arr[0] === 'Charged' ? 'white' : 'orange' 
  const bgClass = arr[0] === 'Charged' ? 'board1-sec2-level1card b1-s2-l1c-charged' : 
   'board1-sec2-level1card' 
  return (
     <div className={bgClass}>
       <div className='board1-sec2-level1card-title'>Total Amount {arr[0]}</div>
       <div className='board1-sec2-level1card-text'>For Month of {arr[1]}</div>
       <div className='board1-sec2-level1card-value' style={{color}}>${arr[2]}</div>
       <button className='board1-sec2-level1card-btn' onClick={() => arr[3](true)}>More</button>
     </div>
  )
}

function Level2Progress({percentage}) {
  const width  = percentage !== '...' ? `${percentage.split('.')[0]}%` : '0%'
  return (
    <div id='board1-sec2-level2-progress-cont'>
      <div id='board1-sec2-level2-progress-progress-body'>
         <div id='board1-sec2-level2-progress-progress-inner' style={{width}}></div>
      </div>
      <span>{percentage}%</span>
    </div>
  )
}

function Level3Cards({data,color,openTable,otInstructions}) {
  const borderTop = `10px solid ${color}`
  return (
    <div className='board1-sec2-level13-body-children-body' style={{borderTop, color}}>
      <div className='board1-sec2-level13-body-children-text1'>{data[0]}</div>
      <div className='board1-sec2-level13-body-children-text2'>{data[1]} Tenants</div>
      <div> 
        <div>Total Balance:</div>
        <div className='board1-sec2-level13-body-children-text2'>${data[2]}</div>
      </div>
      {/* <div>
        <div>Average Balance:</div>
        <div className='board1-sec2-level13-body-children-text2'>${data[3]}</div>
      </div> */}
      <button className='board1-sec2-level13-body-children-btn' onClick={()=> { openTable(), otInstructions()}}>More</button>
    </div>
  )
}

function Sec2({currentPropertyId, shouldStartQuery}) {
  const [showTable, setShowTable] = useState(false)
  const [showTableC, setShowTableC] = useState(false)
  const [showTableD, setShowTableD] = useState(false)

  const [tableData, setTableData] = useState(null)
  const [Lastupdated, setLastupdated] = useState('...')
  const [level3_A2, setlevel3_A2] = useState('...')
  const [level3_A3, setlevel3_A3] = useState('...')
  const [level3_A4, setlevel3_A4] = useState('...')
  const [level3_B2, setlevel3_B2] = useState('...')
  const [level3_B3, setlevel3_B3] = useState('...')
  const [level3_B4, setlevel3_B4] = useState('...')
  const [level3_C2, setlevel3_C2] = useState('...')
  const [level3_C3, setlevel3_C3] = useState('...')
  const [level3_C4, setlevel3_C4] = useState('...')
  const [level3_D1, setlevel3_D1] = useState('...')
  const [level3_D2, setlevel3_D2] = useState('...')
  const [level3_D3, setlevel3_D3] = useState('...')


  const [level1_A1, setlevel1_A1] = useState('...')
  const [level1_A2, setlevel1_A2] = useState('...')
  const [level2_A3, setlevel2_A3] = useState('...')
  const [level2_A4, setlevel2_A4] = useState('...')
  const [level2_A7, setlevel2_A7] = useState('...')


  useEffect(() => {
   if (shouldStartQuery) {
    console.log('from section 2 = ')
    setLastupdated(getCurrentFormattedDateAndTime())
    Card1_A2(queryFormater(currentPropertyId), setlevel3_A2)
    Card1_B2(queryFormater(currentPropertyId), setlevel3_B2)
    Card1_C2(queryFormater(currentPropertyId), setlevel3_C2)
    Card1_A3(queryFormater(currentPropertyId), setlevel3_A3)
    Card1_B3(queryFormater(currentPropertyId), setlevel3_B3)
    Card1_C3(queryFormater(currentPropertyId), setlevel3_C3)
    Card1_A4(queryFormater(currentPropertyId), setlevel3_A4)
    Card1_B4(queryFormater(currentPropertyId), setlevel3_B4)
    Card1_C4(queryFormater(currentPropertyId), setlevel3_C4)
    Card1_D3(queryFormater(currentPropertyId), setlevel3_D3)
    Card1_D1(queryFormater(currentPropertyId), setlevel3_D1)

    Card2_A1(currentPropertyId, setlevel1_A1)
    Card2_A2(currentPropertyId, setlevel1_A2) 
    
    Card2_A3(queryFormater(currentPropertyId), setlevel2_A3)
    Card2_A4(queryFormater(currentPropertyId), setlevel2_A4)
    Card2_A7(currentPropertyId, setlevel2_A7)

    Card3_D1(currentPropertyId, setlevel3_D1)
   }
  }, [shouldStartQuery]); 
   
  return (
    <div id='board1-sec2'>
      <div id='board1-sec2-header'>
        <div id='board1-sec2-header-t1'>Collections </div>
        <div id='board1-sec2-header-t2'>Last updated - {Lastupdated}</div>
      </div>
      {/* header */}

      <div id='board1-sec2-level1-body'>
        <Level1Card arr={['Charged', currentMonthName(), level1_A1, setShowTableC]} />
        <Level1Card arr={['Collected', currentMonthName(), level1_A2, setShowTableD]} />
      </div>
      {/* level1 */}

      <div className='perc_1' style={{marginTop : '1em'}}>
        {/* <div className='board1-sec2-level2-children'>Current Month Residential Collected <Level2Progress percentage={level2_A3} /> </div>
        <div className='board1-sec2-level2-children'>Current Month Commercial Collected <Level2Progress percentage={level2_A4} /> </div> */}
        <div className='board1-sec2-level2-children'>Current Month Collected <Level2Progress percentage={level2_A7} /> </div>
      </div>
      {/* level2 */}

      <div id='board1-sec2-level13-body'>
        <div id='board1-sec2-level3-header-child1-top'>Tenant Breakdown</div>
        <div id='board1-sec2-level1-body'>
           <div className='board1-sec2-level3-header-child-cont'> 
              <div>Contacted This Week : <span style={{color:'orange'}}>{level3_D1}</span></div>
              {/* <div>Attention : <span style={{color:'tomato'}}>{level3_D2}</span></div> */}
           </div>
           <div className='board1-sec2-level3-header-child-cont'>
              <div id='board1-sec2-level3-header-child2-top'>Total Tenant Balances</div>        
              <div id='board1-sec2-level3-header-child1-bottom'>{level3_D3}</div>
           </div>
        </div>

        <div id='board1-sec2-level13-body-body'>
          <Level3Cards data={['<$1,000', level3_A2, level3_A3, level3_A4]} color={'green'} openTable={()=> setShowTable(true)} otInstructions={()=> setTableData(1)} />       
          <Level3Cards data={['$1,000-$10,000', level3_B2, level3_B3, level3_B4]} color={'orange'} openTable={()=> setShowTable(true)} otInstructions={()=> setTableData(2)} />           
          <Level3Cards data={['>$10,000', level3_C2, level3_C3, level3_C4]} color={'grey'} openTable={()=> setShowTable(true)} otInstructions={()=> setTableData(3)} />       
        </div>
      </div>
      {/* level3 */}
      
      {showTable && <Tables closeNav={()=>setShowTable(false)} PropertyId={currentPropertyId} Index={tableData} />}
      {showTableC && <TableC closeNav={()=>setShowTableC(false)} PropertyId={currentPropertyId} />}
      {showTableD && <TableD closeNav={()=>setShowTableD(false)} PropertyId={currentPropertyId} />}
    </div>
  )
}

export default Sec2 