
import React, {useState, useEffect} from 'react'
import '../board2/board-2.css'
import {ChevronDown} from 'react-feather'


function Board3Component() {
  // const [currentPropertyId, setcurrentPropertyId] = useState(lvl1Data[0].lists[0].PropertyID)
  // const [shouldStartQuery, setshouldStartQuery] = useState(true)
  return (
    <>
     <div id='board-2-component'> 

     {/* header */}
     <div id='board2-header-container'>
       <div id='board2-header-bushburg'>BUSHBURG</div>
       <div id='board2-header-heading-cont'>
          <div id='board2-header-heading'>Operations</div>
          <div id='board2-header-updated'>last updated 03/09/2024 at 8:37PM</div>
       </div>
       <div id='board2-header-btn-cont'>
          <button id='board2-header-btn-cont-property'>Property</button>
          <button id='board2-header-btn-cont-property-drpdwn'> <ChevronDown fill={'var(--colorD)'} width={22} height={22} /> </button>
       </div>
     </div>
     {/* header */}

     </div>
    </>
  )
}

export default Board3Component 