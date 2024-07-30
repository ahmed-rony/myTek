import React from 'react'
import './loader.css'

export function Loader({color}) {
  const border = `2px solid ${color}`;
  return (
    <div className='loader' style={{border, borderLeftWidth: '2px', borderLeftColor:'transparent'}}>
    </div>
  )
}