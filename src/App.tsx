import { useState } from 'react'
import headerImage from './assets/images/bg-header-desktop.svg'
import ListingData from './components/ListingData'

function App() {

  return (
    <div style={{backgroundColor: "hsl(180, 52%, 96%)"}}>
      <div >
        <img className="img-fluid" src={headerImage} alt="" /> 
      </div>
      <div>
        <ListingData/>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/ABCwarrior">John Puckey</a>.
      </div>
    </div>
  )
}

export default App
