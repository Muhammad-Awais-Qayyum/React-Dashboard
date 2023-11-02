import React from 'react'
import './MainDash.css'
import Card from '../Card/Card';
import Table from '../table/Table'
const MainDash = () => {
  return (
    <div className="mainDash">
      <h1>Dashboard</h1>
      <Card/>
    
      <Table />
    </div>
  )
}

export default MainDash;
