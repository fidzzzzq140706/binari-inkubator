import React from "react";
import NavigationBar from "../components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Footer from "../components/Footer";

function Kontak() {
  return (
    <div>
      <NavigationBar />
      <div>
        <div>
          <div className="parallax-kontak" id="Nav">
            <div className="tentang">
              <h1 className="title-kontak">Kontak Binari</h1>
              <div className="mt-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="kontak-alamat-wrapper">
        <div className="whole-kontak">
          <div className="col-lg-7 col-md-6 col-xs-12">
            <div className="contact-us-form">
              <form
                action=""
                method="POST"
                className="form-validation"
                autoComplete="off"
                novalidate="novalidate"
              >
                <input type="hidden" name="_token" value="" className="nama-depan"></input>
                <input
                  type="text"
                  placeholder="Nama Depan"
                  name="firstname"
                ></input>
                <input type="text" placeholder="Nama Belakang"></input>
                <input
                  type="email"
                  placeholder="Alamat email*"
                  name="email"
                ></input>
                <select name="ask_about">
                  <option value="Ihave a partneship proposal">
                    Saya memiliki proposal kerja sama
                  </option>
                  <option value="Saya ingin berkolaborasi dengan Cubic">
                    Saya ingin berkolaborasi dengan Binari
                  </option>
                  <option value="Saya mau bergabung dalam program Cubic">
                    Saya mau bergabung dalam program Binari
                  </option>
                </select>
                <textarea
                  placeholder="Pesan Anda*"
                  name="message"
                  className="eror"
                ></textarea>
                 <button className="button-kontak">
        <h6>Kirim Pesan</h6>
      </button>
              </form> 
            </div>
          </div>
          
          <div className="alamat-binari">
            <h2 className="paragraf-h2">
              Jangan ragu untuk  mengontak kami untuk mendapatkan
              informasi tentang Binari
            </h2>
            <p className="paragraf-kontak">Kontak Kami untuk segera mendapat bantuan</p>
            <h3 className="h3-kontak">admin@binari.id</h3>
            <h2 className="h2-kontak">Jl. Pelajar Pejuang 45 NO, 65 Bandung</h2>
            <div className="social-media-icons">
              <a href="https://facebook.com/lskk_id" target="_blank" clasName= "tran3s">
              <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a href="https://instagram.com/lskk_id/" target="_blank" className="tran3s">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
             <a href="https://whatsapp.com/lskk_id/" target="_blank" clasName="tran3s">
           <FontAwesomeIcon icon={faWhatsapp}/>
             </a>
            </div>
          </div>
        </div>
      </div>

     

      <Footer />
    </div>
  );
}

export default Kontak;
