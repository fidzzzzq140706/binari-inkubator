import React from 'react'
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Layanan() {
  return (
    <div>
      <NavigationBar/>
     <div>  
      <div>
      <div className="parallax-layanan" id='Nav'>
        <div className="tentang">
            <p className="title-layanan">Program Binari</p>
            <p className="description"></p>
            <div className="mt-10">
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className='teks-program'>
      <h1>Kami menyediakan berbagai macam layanan bisnis.</h1>
    </div>
    <div className='main'>
      <ul className='cards-layanan'>
        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/incubatorProgram.png'/>
      <div className='card-bg'>
      <h2 className='card-title'>Program Inkubasi Startup</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Satu tahun program Inkubator dengan kesempatan <br/> pendanaan sampai 350 juta rupiah / perusahaan.</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

      </div>
    </div>
    </div>
        </li>

        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/workshop.png'/>
      <div className='card-bg'>
      <h2 className='card-title'>Kegiatan Workshop</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Perdalam ilmu melalui Binari Startup Class dan Binari Startup Talk.</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

      </div>
    </div>
    </div>
        </li>

        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/investorNetwork.png'/>
      <div className='card-bg'>
      <h2 className='card-title'>Jaringan Investor</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Berkesempatan Networking dan Business Matching bersama Investor.</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

      </div>
    </div>
    </div>
        </li>

        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/w53.jpg'/>
      <div className='card-bg'>
      <h2 className='card-title'>Workspace</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Daptakan Ekosistem kerja nyaman di coworking space (Workspace 53).</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

      </div>
    </div>
    </div>
        </li>


        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/consulting.png'/>
      <div className='card-bg'>
      <h2 className='card-title'>Konsultasi Event</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Rencanakan eventmu dengan Binari sebagai Event Organizernya.</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

      </div>
    </div>
    </div>
        </li>

        <li className='cards_item'>
          <div className='card-layanan'>
    <div className='card-image'>
      <img src='http://binari.lskk.co.id/images/programs/research.png '/>
      <div className='card-bg'>
      <h2 className='card-title'>Lab Penelitian</h2>
      <p className='card-text' style={{textAlign: "justify"}}>Binari Lab Penelitian fokus dalam penelitian pada UMKM dan Startup.</p>
      <button type='button' className='btn' data-toggle="modal" data-target="#programModal">Read More</button>

    
      </div>
    </div>
    </div>
        </li>
      </ul>
      <div className='btn-wa'>
<Link to='/layanan'>
  <a className='btn-target'>
        <img src='http://binari.lskk.co.id/images/programs/whatsapp.png
'></img>
      </a>
</Link>
</div>
    </div>
    
    <Footer/>
      </div>
  )
}

export default Layanan