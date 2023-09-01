import React from 'react'
import Navbar1 from '../components/Navbar1'
import Footer1 from '../components/Footer1'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    
    <div>
        <div>
            <Navbar1/>  
        </div>
        <div>
          <Carousal/>
        </div>
        <div className='m-3'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div><Footer1/></div>
        </div>
  )
}
