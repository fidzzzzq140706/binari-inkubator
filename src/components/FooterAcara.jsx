import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterAcara = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowScrollTop = scrollTop > 80;
      setShowScrollTop(shouldShowScrollTop);
    };

    let prevScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScrollDirection = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowScrollTop =
        currentScrollPos > 90 && currentScrollPos > prevScrollPos;
      setShowScrollTop(shouldShowScrollTop);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-footer">
      <div className="bg-footer">
        <img src="http://binari.lskk.co.id/images/home/footer.png" />

        <div className="main-footer">
          <div className="logo-container">
            <div className="logo-footer">
              <img
                src="http://binari.lskk.co.id/images/logo/logo.png"
                style={{ width: "100px", height: "auto" }}
              ></img>
              <h4>admin@Binari.id</h4>
            </div>
          </div>
          <div className="Tautan">
            <h4>Tautan Berguna</h4>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-list-acara">
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="beranda-footer">
                    › Beranda
                  </a>
                </li>
                <li>
                  <a href="/tentang" className="tentang-footer">
                    › Tentang
                  </a>
                </li>
                <li>
                  <a href="/layanan" className="layanan-footer">
                    › Layanan
                  </a>
                </li>
                <li>
                  <a href="/startup" className="startup-footer">
                    › Startup
                  </a>
                </li>
                <li>
                  <a href="/acara" className="acara-footer">
                    › Acara
                  </a>
                </li>
                <li>
                  <a href="/kontak" className="kontak-footer">
                    › Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="kontak">
            <h4>Hubungi Kami</h4>
            <ul className="list-unstyled">
              <li>
                Jl. Pelajar Pejuang 45 No, 65 <br />
                Bandung
              </li>
            </ul>
          </div>
          <div className="Tentang">
            <h4>Tentang Binari</h4>
            <ul className="tentang-footer list-unstyled">
              <li
                className="footer-binari"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h7 style={{ textAlign: "justify" }}>
                  Binari adalah inkubator startup yang berlokasi di Bandung yang
                  mengasuh berbagai startup berbasis teknologi menggunakan
                  konsep "People-Process-Technology"
                </h7>
              </li>
              <a href="/tentang">Selengkapnya ›</a>
            </ul>
            <div className="icons-footer">
              <a
                href="https://facebook.com/lskk_id/"
                target="_blank"
                className="trans"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/lskk_id/"
                target="_blank"
                className="trans"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-date">
            <p className="text-last col-sm">
              &copy;{new Date().getFullYear()}{" "}
              <span style={{ color: "#e20782" }}>Binari</span>. All rights
              reserved
            </p>
          </div>
        </div>
        <div className="button-scroll-top">
          <a href="#Nav">
            <button
              className={`scroll-top-tran3s ${showScrollTop ? "show" : ""}`}
              onClick={scrollToTop}
            >
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterAcara;
