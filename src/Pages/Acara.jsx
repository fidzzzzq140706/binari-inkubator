import React from 'react'
import NavigationBar from "../components/NavigationBar";
import ButtonAcara from './ButtonAcara';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; 
import FooterAcara from '../components/FooterAcara';

function Acara() {
  return (
    <div>
      <NavigationBar/>
     <div>  
      <div>
      <div className="parallax-acara" id="Nav">
        <div className="tentang">
            <h1 className="title-acara">Acara Binari</h1>
            <div className="mt-10">
            </div>
        </div>
    </div>
    </div>
    </div>  
    <div className='img-acara'>
          <img src='http://binari.lskk.co.id/images/events/SrqPQJ22YNmsBptqRqYM8oqRpYPSv4uY6E69ztW4.jpeg'/>
        </div>
        <div className='showcase-title'>
          <h3 className='title-description'>Binari STARTUP INCUBATOR WEB 3.0 SERIES</h3>
          <p className='description-acara'>Binari STARTUP INCUBATOR WEB 3.0 SERIES "NFT Sebagai Potensi Ekonomi Kreatif Baru" Ingin buat NFT tapi<br/> bingung bagaiamana caranya?Bingung bagaiamana membangun hype...</p>
          <div className='icon-font'>
          <Link to="/eror"><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray", marginLeft: "190px", width: "30px"}} className="arrow-right-icon"/> </Link>
          </div>
          
          </div> 

        <div className='img2-acara'>
          <img src='http://binari.lskk.co.id/images/events/NnOi0mdrcuuOHHORcjeaCNN8AB4Z24wLjpu7M0BQ.jpeg' />
        </div>
        <h2 className='title-dev'>Microsoft Dev//Verse</h2>
        <div className='img3-acara'>
          <img src='http://binari.lskk.co.id/images/events/PwOboaswkypLqSWu1DjrSHFSVeFT0vgE90uM2dQK.png'/>
        </div>
        <div className='showcase-openbatch'>
          <h3 className='title-batch'>Open Batch Program Pendampingan Startup, UMKM, dan <br/> Koperasi</h3>
          <p className='description-batch'>Halo sobat Entrepereneur Binari Inkubator Bisnis membuka program pendampingan untuk startup, UMKM dan<br/> koperasi. Program pendampingan ini bertujuan untuk meningkatkan...</p>
          <div className='icon-font'>
          <Link to="/eror"><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray", marginLeft: "190px", width: "30px"}} className="arrow-right-icon"/> </Link>
          </div>
        </div>
    

        <div className='img4-acara'>
          <img src='http://binari.lskk.co.id/images/events/aqI1gPxaVYZKTAG5slKsGXbYIip9gj2PHOau0nET.jpg'/>
          <div className='showcase-talkstartup'>
          <h3 className='title-start'>Startup Talk "How to start a Startup in 2020"</h3>
          <p className='description-start'>CALLING ALL STARTUP GOOD NEWS FOR YOU! Binari akan menyelenggarakan startup talk & mentoring bersama <br/> Achmad Zaky*"How to Start a...</p>
          <div className='icon-font'>
          <Link to="/eror"><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray", marginLeft: "190px", width: "30px"}} className="arrow-right-icon"/> </Link>
          </div>
          </div>
         

       <div className='img5-acara'>
        <img src='http://binari.lskk.co.id/images/events/6aiYde0t7qwYLgZSJCV39VOarT0jMwMbpn8XOYQ8.jpg'/>
       </div>
       <div className='showcase-startupchallenge'>
        <h3 className='title-startupchallenge'>NTT STARTUP CHALLENGE 2019</h3>
      <p className='description-startupchallenge'>Coming back for its third year, NTT Startup Challenge will be supporting startup ecosystem in Indonesia! By just <br/> submitting your...</p>
      <div className='icon-font'>
          <Link to="/eror"><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray", marginLeft: "190px", width: "30px"}} className="arrow-right-icon"/> </Link>
          </div>
       </div>
       
        </div>
        <div className='img6-acara'>
          <img src='http://binari.lskk.co.id/images/events/AlW8DmYSO9rwvBKCGvll58Oe2y44ylPsLpoxmT8X.jpg'/>
        </div>
        <div className='showcase-bdg'>
          <h3 className='title-bdg'>Bandung startup market day</h3>
          <p className='description-bdg'>Hi Startups! Binari adalah startup incubator yang konsisten  berkontribusi dalam pengembangan ekosistem <br/> startup dan telah mendampingi puluhan startup di Indonesia. Acara...</p>
          <div className='icon-font'>
          <Link to="/eror"><FontAwesomeIcon icon={faArrowRightLong} style={{ color: "gray", marginLeft: "190px", width: "30px"}} className="arrow-right-icon"/> </Link>
          </div>
        </div>
    
        <ButtonAcara/>
   <FooterAcara/>
          </div>
  )
}

export default Acara