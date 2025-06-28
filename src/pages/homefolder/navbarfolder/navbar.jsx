import React, { useState, useEffect } from "react";
import "./navbrochere.css";

export default function Navbar() {
  const [isStatic, setIsStatic] = useState(window.innerWidth >= 992);
  const [toggleisActive, settoggleIsActive] = useState(false);
  const [shareisActive, setshareIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isAtTop, setIsAtTop] = useState(true);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      setIsStatic(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //to see if we are on top or not
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update active item based on section visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.getAttribute("id"));
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  const handleDownload = () => {
    // Replace with the actual path to your brochure
    const brochureUrl = '/brochure.pdf';
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'brochure.pdf'; // The name of the file when downloaded
    link.click();
  };

  return (
    <header className="section page-header">
      <div className="rd-navbar-wrap">
        <nav
          className={`rd-navbar rd-navbar-classic rd-navbar-original ${
            !isStatic ? "rd-navbar-fixed" : `rd-navbar-static ${isAtTop?"":"rd-navbar--is-stuck"}`
          }`}
          data-layout="rd-navbar-fixed"
        >
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              <div className="rd-navbar-panel">
                {/* Navbar Toggle */}
                <button
                  className={`rd-navbar-toggle toggle-original ${
                    toggleisActive ? "active" : ""
                  }`}
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  onClick={() => settoggleIsActive(!toggleisActive)}
                  aria-expanded={toggleisActive}
                  aria-label="Toggle Navigation"
                >
                  <span />
                </button>
                {/* Navbar Brand */}
                <div className="rd-navbar-brand">
                  <a className="brand" href="#">
                    <img
                      src="JCV LOGO.png"
                    //   src="jcvlogo.png"
                      alt="logo"
                      width={223}
                      height={50}
                      style={{height:'80px', width:'110px',objectFit:'contain',marginBottom:'5px'}}
                    />
                  </a>
                </div>
              </div>
              <div className="rd-navbar-main-element">
                <div
                  className={`rd-navbar-nav-wrap toggle-original-elements ${
                    toggleisActive ? "active" : ""
                  }`}
                >
                  {/* Navbar Share */}
                  <div
                    className={`rd-navbar-share fl-bigmug-line-share27 ${
                      shareisActive ? "active" : ""
                    }`}
                    data-rd-navbar-toggle=".rd-navbar-share-list"
                    onMouseEnter={() => setshareIsActive(true)}
                    onMouseLeave={() => setshareIsActive(false)}
                  >
                    <ul
                      className={`list-inline rd-navbar-share-list ${
                        shareisActive ? "active" : ""
                      }`}
                    >
                      <li className="rd-navbar-share-list-item">
                        <a className="icon fa fa-facebook" href="https://www.google.com" target="_blank" />
                      </li>
                      <li className="rd-navbar-share-list-item">
                        <a className="icon fa fa-twitter" href="#"  target="_blank"/>
                      </li>
                      <li className="rd-navbar-share-list-item">
                        <a className="icon fa fa-google-plus" href="#"  target="_blank"/>
                      </li>
                      <li className="rd-navbar-share-list-item">
                        <a className="icon fa fa-instagram" href="#"  target="_blank"/>
                      </li>
                    </ul>
                  </div>
                  {/* Navbar Links */}
                  <ul className="rd-navbar-nav">
                  <li
                      className={`rd-nav-item co`} style={{padding:'10px',backgroundColor:'hsl(0, 3%, 12%)'}}
                    >
                      <a onClick={handleDownload}>
                       <span className="icon fa fa-download"></span> Download Brochur
                      </a>
                    </li>
                    <li
                      className={`rd-nav-item ${
                        activeItem === "home" ? "active" : ""
                      }`}
                    >
                      <a className="rd-nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li
                      className={`rd-nav-item ${
                        activeItem === "services" ? "active" : ""
                      }`}
                    >
                      <a className="rd-nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li
                      className={`rd-nav-item ${
                        activeItem === "projects" ? "active" : ""
                      }`}
                    >
                      <a className="rd-nav-link" href="#projects">
                        Projects
                      </a>
                    </li>
                    <li
                      className={`rd-nav-item ${
                        activeItem === "aboutus" ? "active" : ""
                      }`}
                    >
                      <a className="rd-nav-link" href="#aboutus">
                        About Us
                      </a>
                    </li>
                    <li
                      className={`rd-nav-item ${
                        activeItem === "contacts" ? "active" : ""
                      }`}
                    >
                      <a className="rd-nav-link" href="#contacts">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
