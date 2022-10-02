import React from 'react'
import GroupExample from './Cardgroup'
import DefaultExample from './Hotdeals'
import './Navbar.css'
import About from './About'
function Home() {
  return (
    <div>
        <GroupExample/>
        <p></p>
        <h1 className='newarr'>NEW ARRIVALS</h1>
        <DefaultExample/>
        <About/>
    </div>
  )
}

export default Home