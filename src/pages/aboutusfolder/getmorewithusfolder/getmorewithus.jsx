import FadeInLeft from "../../../fortriggeranimation/fadeinleftanimation"
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FadeInUp from "../../../fortriggeranimation/fadeinupanimation";
import { useEffect, useState } from "react";
import axios from "axios";


export default function GETMOREWITHUS(){
    const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://logodesignshowcasebackend-5.onrender.com/viewCarouselImg`);
      setdata(response.data.carouselImg);
    } catch (error) {
      setdata([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
    return(
        <>
            {/* You dream — we embody*/}
            <section className="section section-sm bg-default text-md-left">
            <div className="container">
                <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
                <FadeInLeft classname="col-lg-6 col-xl-5 wow fadeInLeft">
                    <h2>Get More With Us</h2>
                    {/* Bootstrap tabs*/}
                    <div className="tabs-custom tabs-horizontal tabs-line tabs-line-big text-center text-md-left" id="tabs-6">
                    {/* Nav tabs*/}
                    <ul className="nav nav-tabs">
                        <li className="nav-item" role="presentation"><a className="nav-link nav-link-big active" href="#tabs-6-1" data-toggle="tab">01</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link nav-link-big" href="#tabs-6-2" data-toggle="tab">02</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link nav-link-big" href="#tabs-6-3" data-toggle="tab">03</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link nav-link-big" href="#tabs-6-4" data-toggle="tab">04</a></li>
                    </ul>
                    {/* Tab panes*/}
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs-6-1">
                        <h5 className="font-weight-normal">INNOVATIVE DESIGN SOLUTIONS</h5>
                        <p>Our team offers innovative and custom design solutions to help you stand out in the market. Whether it's a logo, a banner, or a complete branding suite, we focus on creating designs that perfectly reflect your brand identity.</p>
                        <div className="group-sm group-middle"><a className="button button-secondary button-pipaluk" href="#contacts">Get in touch</a><a className="button button-default-outline button-wapasha" href="#">Learn More</a></div>
                        </div>
                        <div className="tab-pane fade" id="tabs-6-2">
                        <h5 className="font-weight-normal">GET SOCIAL</h5>
                        <p>Every design we create is optimized for sharing, allowing your brand to stay connected on all major social platforms, including Facebook, Instagram, Twitter, and more. We make sure your visual content shines across every network!</p>
                        <div className="group-sm group-middle"><a className="button button-secondary button-pipaluk" href="#contacts" >Get in touch</a><a className="button button-default-outline button-wapasha" href="#">Learn More</a></div>
                        </div>
                        <div className="tab-pane fade" id="tabs-6-3">
                        <h5 className="font-weight-normal">CUSTOMER SERVICE</h5>
                        <p>We are ready to assist you with any design inquiries or requests. Whether it’s through chat or phone, we’re here to help you create the perfect design for your brand!</p>
                        <div className="group-sm group-middle"><a className="button button-secondary button-pipaluk" href="#contacts" >Get in touch</a><a className="button button-default-outline button-wapasha" href="#">Learn More</a></div>
                        </div>
                        <div className="tab-pane fade" id="tabs-6-4">
                        <h5 className="font-weight-normal">GREAT DESIGN AND USABILITY</h5>
                        <p>All our designs, including logos, banners, and branding materials, are created with great attention to usability and visual appeal. Our work is celebrated for its seamless integration with your brand identity, earning high praise and numerous awards.</p>
                        <div className="group-sm group-middle"><a className="button button-secondary button-pipaluk" href="#contacts" >Get in touch</a><a className="button button-default-outline button-wapasha" href="#">Learn More</a></div>
                        </div>
                    </div>
                    </div>
                </FadeInLeft>
                <FadeInUp classname="col-lg-6 text-center wow fadeInUp" data-wow-delay=".1s">
                    <OwlCarousel
                                className="owl-carousel owl-style-1 owl-loaded owl-drag"
                                items= {2}              // Number of items to display
                                stagePadding= {0}      // Padding between items
                                loop= {true}           // Enable looping
                                margin= {0}            // Margin between items
                                mouseDrag= {true}      // Enable mouse drag functionality
                                autoplay= {true}
                                dots={false} 
                                >
                                    
                        {data.map((item,index)=>{
                            return(
                                <a className="box-device" href="#">
                                    <img src={`${item.carouselImage}`} alt={item.carouselImage} style={{height:'470px',width:'290px',objectFit:'cover'}} width={313} height={580} />
                                </a>
                            );
                        })}
                    </OwlCarousel>
                </FadeInUp>
                </div>
            </div>
            </section>
        </>
    );
}