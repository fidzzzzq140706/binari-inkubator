import React from 'react'
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';



function Startup() {
  return (
    <div>
      <NavigationBar/>
     <div>  
      <div> 
      <div className="parallax-startup" id='Nav'>
        <div className="tentang">
            <h1 className="title-startup">Startup Kami</h1>
            <div className="mt-10">
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className='title-container-startup'>
       <h6 className='content-startup'>Startup Kebanggan Kami</h6>
       <p className='title-s'>"Any time is a good time to start a company." -Ron Conway</p>
    </div>

    <div className='card-startup'>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Center%20of%20Gravity.png' className='card-startup-1'></img>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Enviromental%20Sensor.png'  className='card-startup-1'></img>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Home%20Automation.png'  className='card-startup-1'></img>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Smart%20Watering.png'  className='card-startup-1'></img>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Robotic%20Flex%20Sensor.png'  className='card-startup-1'></img>
      <img src='http://binari.lskk.co.id/images/startups/IWK%20Smartcard%20Saga.png'  className='card-startup-1'></img>


    </div>
    <Footer/>
      </div>
  )
}

export default Startup