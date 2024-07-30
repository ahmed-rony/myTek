
import React, {useState} from 'react'
import './board-1.css'
import Sec1 from './secs/sec1.jsx'
import Sec2 from './secs/sec2.jsx'
import Sec3 from './secs/sec3.jsx'
import { lvl1Data } from './secs/dropdown.jsx';

function Board1Component() {
  const [currentPropertyId, setcurrentPropertyId] = useState(lvl1Data[0].lists[0].PropertyID)
  const [shouldStartQuery, setshouldStartQuery] = useState(true)
  return (
    <>
    <div id='board-1-component'> 
      <Sec1 setcurrentPropertyId={setcurrentPropertyId} setshouldStartQuery={setshouldStartQuery} />
      <Sec2 currentPropertyId={currentPropertyId} shouldStartQuery={shouldStartQuery} />
      <Sec3 currentPropertyId={currentPropertyId} shouldStartQuery={shouldStartQuery} />
    </div>
    </>
  )
}

export default Board1Component 