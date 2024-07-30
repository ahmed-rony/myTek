
import React, {useState, useEffect} from 'react'
import './board-2.css'
import {ChevronDown} from 'react-feather'

function ProgressBar({title, shouldBeLarge, percentage}) {
  return (
    <div className='board2-levels-container-big-box-f3-cont' style={{fontSize: shouldBeLarge ? '22px' : '15px'}}> 
      {title} 
      <div className='board2-levels-container-big-box-f3-progress-bd' style={{borderRadius: shouldBeLarge ? '13px' : '9px' }}>
       <div className='board2-levels-container-big-box-f3-progress-inner' style={{borderRadius: shouldBeLarge ? '13px' : '9px', padding: shouldBeLarge ? '9px' : '5px' }}></div>
      </div>
    </div>
  )
}

function Board2Component() {
  // const [currentPropertyId, setcurrentPropertyId] = useState(lvl1Data[0].lists[0].PropertyID)
  // const [shouldStartQuery, setshouldStartQuery] = useState(true)
  return (
    <>
     <div id='board-2-component'> 

     {/* header */}
     <div id='board2-header-container'>
       <div id='board2-header-bushburg'>BUSHBURG</div>
       <div id='board2-header-heading-cont'>
          <div id='board2-header-heading'>LEASING</div>
          <div id='board2-header-updated'>last updated 03/09/2024 at 8:37PM</div>
       </div>
       <div id='board2-header-btn-cont'>
          <button id='board2-header-btn-cont-property'>Property</button>
          <button id='board2-header-btn-cont-property-drpdwn'> <ChevronDown fill={'var(--colorD)'} width={22} height={22} /> </button>
       </div>
     </div>
     {/* header */}
    

     {/* level1 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Vacancies</div>
         <div className='board2-levels-container-big-box-f2-cont'>
           <div className='board2-levels-container-big-box-f2-text'>25</div>
         </div>
         <div>
           <ProgressBar title={'0-30 Days'} shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'30-60 Days'}  shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'60+ Days'}  shouldBeLarge={false} percentage={'50'} />
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'>Monthly Rent Loss: <span style={{color:'var(--colorD)', marginLeft: 10}}>23,000$</span></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>

       <div className='board2-levels-container-big-box'>
        <div className='board2-levels-container-big-box-header'>Upcoming Renewals</div>
        <div className='board2-levels-container-big-box-ur-cont-subc'>
          <div style={{width:'33.3%'}}>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>{'>'}30 days</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>50</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Renewed</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>35</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Moving</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>10</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>HNH</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>7</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>RR</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>67%</div></div>
          </div>
          {/*  */}
          <div style={{width:'33.3%'}}>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>{'>'}60 days</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>50</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Renewed</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>35</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Moving</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>10</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>HNH</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>7</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>RR</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>67%</div></div>
          </div>
          {/*  */}
          <div style={{width:'33.3%'}}>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>{'>'}90 days</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>50</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Renewed</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>35</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>Moving</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>10</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>HNH</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>7</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1'>RR</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2'>67%</div></div>
          </div>
        </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>

       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Upcoming Vacancies</div>
         <div style={{marginTop:'1em'}}>
           <div className='board2-levels-container-big-box-uv-subcont'><div className='board2-levels-container-big-box-uv-subcont-t1'>30 Days</div><div className='board2-levels-container-big-box-uv-subcont-t2'>12</div></div>
           <div className='board2-levels-container-big-box-uv-subcont'><div className='board2-levels-container-big-box-uv-subcont-t1'>60 Days</div><div className='board2-levels-container-big-box-uv-subcont-t2'>26</div></div>
           <div className='board2-levels-container-big-box-uv-subcont'><div className='board2-levels-container-big-box-uv-subcont-t1'>90 Days</div><div className='board2-levels-container-big-box-uv-subcont-t2'>26</div></div>
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>
     </div>
     {/* levlel1 */}



     {/* level2 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Expired Leases</div>
         <div className='board2-levels-container-big-box-f2-cont'>
           <div className='board2-levels-container-big-box-f2-text'>47</div>
         </div>
         <div>
           <ProgressBar title={'0-30 Days'} shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'30-60 Days'}  shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'60+ Days'}  shouldBeLarge={false} percentage={'50'} />
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>
       
       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Rent Charged this month</div>
         <div className='board2-levels-container-big-box-f2-cont' style={{flexDirection:'column'}}>
           <div className='board2-levels-container-big-box-f2-text' style={{fontSize:'26px', textAlign:'center'}}>$210,000  / $300,000</div>
           <div style={{fontSize:'20px', fontFamily:'regular'}}>Future Rent</div>
         </div>
         <div className='board2-levels-container-big-box-googlereviews-cont' style={{marginTop: 0}}>
           <ProgressBar title={'30 Days'} shouldBeLarge={true} percentage={'50'} />
           <ProgressBar title={'60 Days'}  shouldBeLarge={true} percentage={'50'} />
           <ProgressBar title={'90 Days'}  shouldBeLarge={true} percentage={'50'} />
         </div>
       </div> 

       <div className='board2-levels-container-big-box board2-levels-container-big-box-seperate'>
       <div className='board2-levels-container-big-box-seperate-1'>
         <div className='board2-levels-container-big-box-header'>Units Leased</div>
         <div style={{marginTop:'1em', marginBottom:'1em'}}>
           <div className='board2-levels-container-big-box-uv-subcont' style={{justifyContent: 'flex-start'}}><div className='board2-levels-container-big-box-uv-subcont-t1'>30 Days</div><div className='board2-levels-container-big-box-uv-subcont-t2' style={{fontSize: '37px'}}>12</div></div>
           <div className='board2-levels-container-big-box-uv-subcont' style={{justifyContent: 'flex-start'}}><div className='board2-levels-container-big-box-uv-subcont-t1'>60 Days</div><div className='board2-levels-container-big-box-uv-subcont-t2' style={{fontSize: '37px'}}>26</div></div>
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>
       <div className='board2-levels-container-big-box-seperate-2'>
         <div className='board2-levels-container-big-box-header'>Prospects</div>
         <div style={{marginTop:'1em', marginBottom:'3.8em'}}>
           <div className='board2-levels-container-big-box-uv-subcont-t2' style={{fontSize: '45px', textAlign:'center'}}>145</div>
         </div>
         <div className='board2-levels-container-big-box-f4-cont'> 
           <div className='board2-levels-container-big-box-f4-txt'></div>
           <button className='board2-levels-container-big-box-f4-btn'>More {'>'} </button>
         </div>
       </div>
       </div>
     </div>
     {/* levlel2 */}



     {/* level3 */}
     <div className='board2-levels-container'>
       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Google Reviews</div>
         <div className='board2-levels-container-big-box-googlereviews-cont'>
           <ProgressBar title={'0-30 Days'} shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'30-60 Days'}  shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'60+ Days'}  shouldBeLarge={false} percentage={'50'} />
         </div>
       </div>

       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Commercial Walt</div>
           <div className='board2-levels-container-big-box-googlereviews-cont' style={{visibility:'hidden'}}>
           <ProgressBar title={'-'} shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'-'}  shouldBeLarge={false} percentage={'50'} />
           <ProgressBar title={'-'}  shouldBeLarge={false} percentage={'50'} />
         </div>    
       </div>

       <div className='board2-levels-container-big-box'>
         <div className='board2-levels-container-big-box-header'>Average Price Per Unit</div>
         <div className='board2-levels-container-big-box-appu-cont-subc'>
            <div className='board2-levels-container-big-box-ur-cont-subc-s board2-levels-container-big-box-appu-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1 blcbbappu-css1'>Studio</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2 blcbbappu-css2'>$1,000</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s board2-levels-container-big-box-appu-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1 blcbbappu-css1'>1 BD</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2 blcbbappu-css2'>$1,000</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s board2-levels-container-big-box-appu-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1 blcbbappu-css1'>2 BD</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2 blcbbappu-css2'>$1,000</div></div>
            <div className='board2-levels-container-big-box-ur-cont-subc-s board2-levels-container-big-box-appu-cont-subc-s'><div className='board2-levels-container-big-box-ur-cont-subc-s-1 blcbbappu-css1'>3 BD</div><div className='board2-levels-container-big-box-ur-cont-subc-s-2 blcbbappu-css2'>$1,000</div></div>
          </div>
       </div>
     </div>
     {/* levlel3 */}

     </div>
    </>
  )
}

export default Board2Component 