import React from 'react'
import NavigationBar from '../components/NavigationBar'
import ButtonAcara from './ButtonAcara'
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Acara2 = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="parallax-acara2" id="Nav">
        <div className="tentang">
            <h1 className="title-acara2">Acara Binari</h1>
            <div className="mt-10">
            </div>
        </div>
        </div>
        <div className='our-blog blog-v3' style={{marginTop: "30px"}}>
            <div className='acara2-container'>
               <div className='acarar2-wrapper'>
                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Binari Open Batch 5.0</a></h5>
                    <p>
                    Hello startups!! Binari startup incubator adalah inkubator yang fokus pada pengembangan startup ICT di kota Bandung dan sekitarnya. Sampai saat ini...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{color: "gray"}}/>
                    </a>
                  </div>
                </div>
                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Binari Startup Talk - Design Thinking</a></h5>
                    <p>
                    Hi Startup Enthusiasts,Dalam menciptakan startup yang sustainable dan berdampak sosial, pemilik ide bisnis perlu mengidentifikasi dan memecahkan masalah yang kompleks...ator adalah inkubator yang fokus pada pengembangan startup ICT di kota Bandung dan sekitarnya. Sampai saat ini...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray"}}/>
                    </a>
                  </div>
                </div>

                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Binari STARTUP VISIT</a></h5>
                    <p>
                    Binari STARTUP VISIT
                    Hi Startups!Siapa sih yang enggak tau eFishery dan Agate? Nah kali ini Binari akan mengadakan "Startup Visit" ke startup-startup yang...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray"}}/>
                    </a>
                  </div>
                </div>


                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Binari BUSINESS MATCHING 2019</a></h5>
                    <p>
                    DPMPTSP Kota Bandung x Binari Proudly Present "It's time to accelerate your start-up!" Activities - Meet-up with investors - Pitching...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray"}}/>
                    </a>
                  </div>
                </div>

                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Binari Startup Talk: Digital Marketing</a></h5>
                    <p>
                    Hi Startup Enthusiasts,Di era digital ini kamu banyak bertemu dengan berbagai peluang dalam berbisnis. Salah satu yang harus dilakukan untuk...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray"}}/>
                    </a>
                  </div>
                </div>
                <div className='single-blog'>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  </div>
                  <div className='acara2-text'>
                    <h5><a className='tran3s'>Startup Berbagi “THR untuk Anak Yatim”</a></h5>
                    <p>
                    Startup Berbagi “THR untuk Anak Yatim”Binari telah melaksanakan acara Startup berbagi yang berlangsung pada hari jumat (31/5)di panti asuhan Assabiqunal...
                    </p>
                    <a href='' className='tran3s'>
                    <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray"}}/>
                    </a>
                  </div>
                </div>
               </div>
            </div>
        </div>
        <ButtonAcara/>
    </div>
  )
}

export default Acara2
