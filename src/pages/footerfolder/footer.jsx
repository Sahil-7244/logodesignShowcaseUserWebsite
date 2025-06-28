import axios from "axios";
import { useEffect, useState } from "react";
import "./footer.css";

export default function FOOTER() {
    const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`https://logodesignshowcasebackend-5.onrender.com/user/getContactDetail`);
            setData(response.data.contactDetail || []);
          } catch (error) {
            console.error("Error fetching contactDetail:", error);
            setData([]);
          }
        };
    
        fetchData();
      }, []);
    return (
      <>
        <footer className="section section-fluid footer-minimal context-dark" style={{ backgroundColor: "#222", color: "#fff", padding: "30px 0" }}>
          <div className="container-fluid">
          <div className="footer-minimal-inset oh" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
  {/* Left Section */}
  <div style={{ flex: "1 1 30%", padding: "10px" }}>
    <a className="brand" href="#" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
      <img
        src="jcvlogo.png"
        alt="logo"
        style={{ height: "50px", width: "auto", objectFit: "contain", marginRight: "15px" }}
      />
      <h4 style={{ margin: 0, color: "#fff" }}>JV Graphics</h4>
    </a>
    <p style={{ lineHeight: "1.6", fontSize: "14px", color: "#aaa" }}>
      We are a creative graphic design company dedicated to crafting stunning logos, banners, and branding solutions. 
      Our team transforms ideas into visually compelling designs that leave a lasting impact. 
      Let us bring your vision to life with innovation and style.
    </p>
  </div>

  {/* Middle Section */}
  <div style={ window.innerWidth>608 ? {float:'left',flex: "1 1 40%", padding: "10px",  borderLeft: "1px solid #444",borderRight: "1px solid #444"}: {float:'left',flex: "1 1 40%", padding: "10px",  borderLeft: "1px solid #444" }}>
    <h4 style={{ marginBottom: "15px", fontSize: "18px", color: "#fff" }}>Services</h4>
    <ul style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      listStyleType: "none",
      padding: 0,
      margin: 0,
      fontSize: "14px"
    }}>
      <li><a href="#projects">Logo</a></li>
      <li><a href="#projects">Pouch Packaging</a></li>
      <li><a href="#projects">Box Packaging</a></li>
      <li><a href="#projects">Container Packaging</a></li>
      <li><a href="#projects">Sticker Design</a></li>
      <li><a href="#projects">Label Design</a></li>
      <li><a href="#projects">Brochure Design</a></li>
      <li><a href="#projects">Catalogue Design</a></li>
      <li><a href="#projects">Flyer Design</a></li>
      <li><a href="#projects">Banner Design</a></li>
      <li><a href="#projects">Stationery Design</a></li>
      <li><a href="#projects">UI/UX</a></li>
      <li><a href="#projects">Website Design</a></li>
    </ul>
  </div>
  {/* Right Section */}
  <div style={window.innerWidth>608 ?{ flex: "1 1 30%", padding: "10px" }:{ flex: "1 1 30%", padding: "10px",borderTop: "1px solid #444" }}>
    <h4 style={{ margin: "0 0 15px", fontSize: "18px", color: "#fff" }}>Contact Us</h4>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0, fontSize: "14px", color: "#aaa" }}>
      <li>
        <i className="fa-solid fa-phone fa-shake fa-sm"  style={{color:'white',fontSize:'16px'}}></i>&nbsp;
        <a href={`tel:${data.length? `+91 ${data[0].phone}`:''}`}>{data.length? `+91 ${data[0].phone}`:''}</a>
      </li>
      <li>
        <i className="fa-solid fa-envelope fa-beat fa-sm" style={{color:'white',fontSize:'16px'}}></i>&nbsp;
        <a href={`mailto:${data.length? `${data[0].email}`:''}`}>{data.length? `${data[0].email}`:''}</a>
      </li>
      <li>
        <i className="fa-solid fa-map-marker fa-bounce fa-sm" style={{ color:'white',fontSize:'16px'}}></i>&nbsp;
        <a href="#">{data.length? `${data[0].address}`:''}</a>
      </li>
    </ul>
  </div>
</div>

  
            {/* Bottom Panel */}
            <div className="footer-minimal-bottom-panel" style={{ marginTop: "5px", borderTop: "1px solid #444", paddingTop: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                {/* Rights Section */}
                <div style={{ flex: "1 1 33%", textAlign: "left", fontSize: "12px", color: "#aaa" }}>
                  <p>© 2016-{new Date().getFullYear()} JV Graphics. All rights reserved.</p>
                </div>
  
                {/* Social Icons */}
                <div style={{ flex: "1 1 33%", textAlign: "center" }}>
                  <ul style={{ display: "inline-flex", listStyleType: "none", padding: 0, margin: 0 }}>
                    <li style={{ margin: "0 10px" }}><a href="#" target="_blank" style={{ fontSize: "18px" }}><i className="fa fa-facebook"></i></a></li>
                    <li style={{ margin: "0 10px" }}><a href="#" target="_blank" style={{ fontSize: "18px" }}><i className="fa fa-twitter"></i></a></li>
                    <li style={{ margin: "0 10px" }}><a href="#" target="_blank" style={{ fontSize: "18px" }}><i className="fa fa-google-plus"></i></a></li>
                    <li style={{ margin: "0 10px" }}><a href="#" target="_blank" style={{ fontSize: "18px" }}><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
  
                {/* Developer Info */}
                <div style={{ flex: "1 1 33%", textAlign: "right", fontSize: "12px", color: "#aaa" }}>
                  <span>Developed by <span className="linkedin"><a href="https://www.linkedin.com/in/sahilchauhan7244" target="_blank" style={{fontSize:'14px'}}>Sahil Chauhan</a></span></span>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </footer>
      </>
    );
  }
  