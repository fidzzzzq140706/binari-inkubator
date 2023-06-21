import React from 'react'
// import { BrowserRouter as Route } from "react-router-dom";
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { Link } from 'react-router-dom'
// import HeroSlider, {Slide} from 'hero-slider'

// const images1 = 'https://images.unsplash.com/photo-1682146258059-6a894a916862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80';

const Beranda = () => {
  return (
    <div>  
    {/* <HeroSlider
    slidingAnimation="left-to-right"
    orientation="Horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log("onBe")} 
    />

    <Slide
     background={{
      backgroundImage: images1,
      backgroundAttachment: "fixed"
     }}
     /> */}

      
<div className="mybg" id='bg'>
<div className='showcase-container' id='Nav'>

<h6 className='binari animated animatedFadeInUp fadeInUp'>Binari</h6>
      <h2 className="title-h2 animated animatedFadeInUp fadeInUp">
        Bergabung Dengan Kami Untuk Gerakan Evolusi,
        <h2 className='content-h2 animated animatedFadeInUp fadeInUp'>
        Buat Perubahan Untuk Indonesia
        </h2>
        <div className="button-container">
        <button className="button-content animated animatedFadeInUp fadeInUp">Tentang</button> 
          <button className="button-content animated animatedFadeInUp fadeInUp"><FontAwesomeIcon icon={faCloud} /> Profil Perusahaan</button>
        </div>
        
      </h2>
      </div>
      </div>

      
<div className='title-container'>
       <p className='title-1'>Binari Jalan Bisnis Anda</p>
       <p className='content-teks'>"Menyediakan Jalan Yang luas Bagi Bisnis Anda"<br/> Bergabunglah Bersama Kami Untuk Evolusi, Buat Perubahan untuk Indonesia, Kembangkan Generasi Pengusaha,<br/>dan Buat Dunia yang Lebih Baik.</p>
    </div>

    <div className="container-card">
      <div className="row">
        <div className="circle">
          <img
            src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2022/09/WhatsApp-Image-2022-09-21-at-12.20.29.jpeg"
            className="img"
            alt="img"
          />
          <p>
            Program Inkubator <br /> Bisnis
          </p>
          <h4>
            Product <br/> Accelerator
          </h4>
        </div>
        <div className="circle">
          <img
            src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2022/06/WhatsApp-Image-2022-06-09-at-13.50.00.jpeg"
            className="img"
            alt="img"
          />

          <p>
            Program Edukasi <br /> Intensif
          </p>
          <h4>
       Founder Bootcamp
          </h4>
        </div>

        <div className="circle">
          <img
            src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2022/06/WhatsApp-Image-2022-06-14-at-15.00.24.jpeg"
            className="img"
            alt="img"
          />
          <p>
           Jaringan Investor
          </p>
          <h4>
           Digital Marketing
          </h4>
        </div>

        <div className="circle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdAC9FfqWG0DM_BbTuYvtMqrkSrJkmybBbQ&usqp=CAU"
            className="img"
            alt="img" />
          <p>
           Manajemen Keuangan
          </p>
          <h4>
          Finance & Tax
          </h4>
        </div>
      </div>
    </div>

    <div>
      <div className="parallax">
        <div className="tentang">
            <p className="title">tumbuh kembangan dengan berkolaborasi, belajar, dan mendapatkan akses ke jaringan strategi binari!</p>
            <p className="description">Jadilah bagian dari Binari dan skalakan bisnis Anda dengan sukses!</p>
            <div className="mt-10">
            </div> 
        </div>
    </div>
    </div>
  </div>
  

  
  )
}

export default Beranda