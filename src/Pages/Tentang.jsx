import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';

function Tentang() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div>
      <NavigationBar/>  
     <div>  
      <div>
      <div className="parallax-tentang" id='Nav'>
        <div className="tentang" id='tentang'>
            <h1 className="title-tentang">Tentang Binari</h1>
            <div className="mt-10">
            </div>
        </div>
    </div>
    </div>
    <div className='title-container-tentang'>
       <p className='title-tentang-1'>Selamat datang di binari</p>
       <h6 className='content-tentang'>Binari inkubator merupakan program inkubasi startup<br/>melalui serangkaian seleksi mulai dari bootcamp,<br/>mentoring beasiswa hingga akses funding.</h6>
    </div>
 
    </div>
    <div className='about-tab-wrapper clearfix'>
      <ul className='nav nav-tabs float-left'>
        <li className={activeTab === 'history' ? 'active' : ''}>
          <a className={`cool-link ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>Tentang Kami</a>
        </li>
        <li className={activeTab === 'vision' ? 'active' : ''}>
          <a className={`cool-link ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>Visi</a>
        </li>
        <li className={activeTab === 'contact' ? 'active' : ''}>
          <a className={`cool-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Misi</a>
        </li>
        <li className={activeTab === 'news' ? 'active' : ''}>
          <a className={`cool-link ${activeTab === 'news' ? 'active' : ''}`} onClick={() => setActiveTab('news')}>Nilai Perusahaan</a>
        </li>
      </ul>
      <div className='tab-content float-left'>
        <div id='history' className={`tab-pane fade ${activeTab === 'history' ? 'active in' : ''}`}>
          <p>Binari adalah Inkubator Startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology"</p>
        </div>
        <div id='vision' className={`tab-pane fade ${activeTab === 'vision' ? 'active in' : ''}`}>
          <p>Visi kami adalah menjadi Inkubator terbaik untuk Startups bidang teknologi informasi dan komunikasi di Indonesia.</p>
        </div>
        <div id='contact' className={`tab-pane fade ${activeTab === 'contact' ? 'active in' : ''}`}>
          <ul>
            <li>Mengelola program Inkubator yang berfokus pada solusi dan inovasi berkelanjutan.</li>
            <li>Menyediakan fasilitas yang mendorong Startup untuk menjadi kreatif dan produktif.</li>
            <li>Menjadi penghubung untuk Startup dengan sinergi program dan kolaborasi dengan investor, pemerintah, perusahaan, akademisi, media dan komunitas.</li>
            <li>Mengelola pendanaan yang menguntungkan dan modal pertumbuhan untuk Investor dan Startup.</li>
          </ul>
        </div>
        <div id='news' className={`tab-pane fade ${activeTab === 'news' ? 'active in' : ''}`}>
          <ul>
            <li>People</li>
            <p>Lingkungan kerja yang produktif untuk meningkatkan potensi kerja.</p>
            <li>Process</li>
            <p>Kolaborasi dan jejaring dengan berbagai Stakeholder.</p>
            <li>Technology</li>
            <p>Solusi bisnis untuk masalah yang didukung oleh teknologi inovatif yang akan meningkatkan pertumbuhan ekonomi.</p>
          </ul>
        </div>
      </div>
    <h2 className='h2-team'>Tim Kami</h2>
    </div>
    <div className='team'>
      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Dr%20Yoanes%20Bandung.jpg' className='img-tentang'/>
        <h6>Yoanes Bandung</h6>
        <p>Incubator Manager</p>
      </div>

      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Prof%20Dr%20Armein%20Z%20R%20Langi.jpg' className='img-tentang'/>
        <h6>Armein Z R Langi</h6>
        <p>Chief Of Partnership</p>
      </div>

      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Prof%20Dr%20Dwi%20Hendratmo%20Widyantoro.jpg' className='img-tentang'/>
        <h6>Dwi Hendratmo Widyantoro</h6>
        <p>General Manager Binari</p>
      </div>
    </div>
    <div className='team'>
      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Prof%20Ir%20Mervin%20T.%20Hutabarat.jpg' className='img-tentang'/>
        <h6>Mervin T. Hutabarat</h6>
        <p>Chief Of Marketing</p>
      </div>

      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Mas%20Fahmi.png' className='img-tentang'/>
        <h6>M. Fahmi Nurfadillah</h6>
        <p>IT Staff</p>
      </div>

      <div className='circle-team'>
        <img src='http://binari.lskk.co.id/images/coachs/Mas%20Lana.png' className='img-tentang'/>
        <h6>Mohammad Maulana</h6>
        <p>Busdev. Manager Binari</p>
      </div>
    </div>
    <div className='team-2'>
      <div className='circle-team2'>
        <img src='http://binari.lskk.co.id/images/coachs/Mas%20Vitra.png' className='img-tentang'/>
        <h6>Vitradisa</h6>
        <p>Corporate Secretary</p>
      </div>

      <div className='circle-team2'>
        <img src='http://binari.lskk.co.id/images/coachs/Dr%20Eng%20Asep%20Saepuloh.jpg' className='img-tentang'/>
        <h6>Asep Saepuloh</h6>
        <p>Idventure Manager</p>
      </div>
      </div>
    <Footer/>
      </div>
  )
  }
export default Tentang



