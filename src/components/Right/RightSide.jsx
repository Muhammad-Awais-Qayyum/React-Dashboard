import React from 'react'
import './RightSide.css'
import Update from '../Update/Update';
import Customer from '../Customer/Customer';
const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Update/>
        </div>
        <div className='cs'>
            <h3>Customer Review</h3>
            <Customer/>
        </div>
    </div>
  )
}

export default RightSide;