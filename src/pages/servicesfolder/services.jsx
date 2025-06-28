import React, { useState, useEffect,useRef } from "react";
import FadeInUp from "../../fortriggeranimation/fadeinupanimation";
import FadeInRight from "../../fortriggeranimation/fadeinrightanimation";
import FadeInLeft from "../../fortriggeranimation/fadeinleftanimation";
import axios from "axios";

export default function SERVICES(){
    return(
        <section id="services" style={{paddingTop:"50px"}}>
            <SERVICE />
            <CTA />
        </section>
    );
}

export function SERVICE(){
    const service = [
        {
          logo: "phone-in-out",
          headingline1: "CREATIVE",
          headingline2: "CONSULTATION",
          content: "Get expert advice from our experienced designers. We offer consultation services to help you refine your brand's visual direction, ensuring your design elements align perfectly with your business goals.",
        },
        {
          logo: "headset",
          headingline1: "CALL TO",
          headingline2: "ACTION",
          content: "Designing impactful call-to-action graphics that drive engagement.",
        },
        {
          logo: "outbox",
          headingline1: "CREATIVE",
          headingline2: "DESIGN",
          content: "We deliver innovative design solutions tailored to your brand's needs.",
        },
      ];
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/viewServiceImg`);
        setData(response.data.serviceImg || []);
      } catch (error) {
        console.error("Error fetching service images:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

    return(
        <section className="section section-sm section-first bg-default text-center" >
            <div className="container">
                <div className="row row-30 justify-content-center">
                <FadeInUp classname="col-md-7 col-lg-5 col-xl-6 text-lg-left wow fadeInUp">{data.length > 0 && data[0].serviceImage ? (
              <img
                src={`${data[0].serviceImage}`}
                alt="service img"
                style={{ width: "415px", height: "592px", objectFit: "cover" }}
                width={415}
                height={592}
              />
            ) : (
              <p>No service image available</p> // Fallback if image not available
            )}
                </FadeInUp>
                <div className="col-lg-7 col-xl-6">
                    <div className="row row-30">
                    <FadeInRight classname="col-sm-6 wow fadeInRight">
                        <article className="box-icon-modern box-icon-modern-custom">
                        <div>
                            <h3 className="box-icon-modern-big-title">What We Offer</h3>
                            <div className="box-icon-modern-decor" /><a className="button button-primary button-ujarak" href="#modalCta" data-toggle="modal">View All Services</a>
                        </div>
                        </article>
                    </FadeInRight>
                    {
                        service.map((card,index)=>{
                            return(<FadeInRight classname="col-sm-6 wow fadeInRight" data-wow-delay=".1s">
                                <article className="box-icon-modern box-icon-modern-2">
                                <div className={`box-icon-modern-icon linearicons-${card.logo}`} />
                                <h5 className="box-icon-modern-title"><a href="#">{card.headingline1}<br/>{card.headingline2}</a></h5>
                                <div className="box-icon-modern-decor" />
                                <p className="box-icon-modern-text">{card.content}</p>
                                </article>
                            </FadeInRight>);
                        })
                    }
                   </div>
                </div>
                </div>
            </div>

            {/* model */}
              <div className="modal fade" id="modalCta" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h4>Services We Provide</h4>
                              <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          </div>
                          <div className="modal-body" style={{ maxHeight: '500px', overflowX: 'auto',overflowY:'none' }}>
                              <form className="rd-form rd-form-variant-2 rd-mailform">
                                  <div className="row row-14 gutters-14">
                                      <div className="col-12">
                                          <div className="form-wrap">
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Logo</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Pouch Packaging</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Box Packaging</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Container Packaging</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Sticker Design</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Label Design</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Brochure Design</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Catalogue Design</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Flyer Design</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Banner Design</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Stationery Design</h4>
                                              </FadeInLeft>
                                              <hr />
                                              <FadeInRight triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>UI/UX</h4>
                                              </FadeInRight>
                                              <hr />
                                              <FadeInLeft triggeronce={false}>
                                                  <h4 style={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>Website Design</h4>
                                              </FadeInLeft>
                                              <hr />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
    );
}

export function CTA() {
    const [scrollTransform, setScrollTransform] = useState(0); // Initial translate Y value
    const sectionRef = useRef(null); // Reference to the section
    const [isVisible, setIsVisible] = useState(false); // Track visibility of the section
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(`http://localhost:8000/viewServicebgImg`);
          setData(response.data.servicebgImg || []);
        } catch (error) {
          console.error("Error fetching service bg images:", error);
          setData([]);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        if (isVisible) {
          const section = sectionRef.current;
          const rect = section.getBoundingClientRect();
          const scrollY = window.scrollY;
  
          // Start scrolling effect when the top of the section reaches the bottom of the viewport
          const sectionStartAtViewportBottom = scrollY + rect.top - window.innerHeight;
  
          if (scrollY >= sectionStartAtViewportBottom) {
            const offset = Math.max(
              0,
              Math.min(103, (scrollY - sectionStartAtViewportBottom) * 0.1)
            );
            setScrollTransform(offset);
          } else {
            setScrollTransform(0); // Reset transform when not in range
          }
        }
      };
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
      );
  
      const section = sectionRef.current;
      if (section) observer.observe(section);
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (section) observer.unobserve(section);
      };
    }, [isVisible]);
  
    return (
      <section
        className="section section-fluid bg-default"
        ref={sectionRef} // Attach ref to the section
      >
        <div
          className="parallax-container"
          data-parallax-img="images/parallax-1.jpg"
        >
          <div className="material-parallax parallax">
          {data.length > 0 && data[0].servicebgImage ? (
            <img
              src={`${data[0].servicebgImage}`}
              alt="service bg img"
              style={{
                display: "block",
                height:'550px',width:'1770px',
                transform: `translate3d(-50%, ${scrollTransform}px, 0px)`,
                objectFit:'cover'
              }}
            />
          ) : (
            <img
              src="images/parallax-1.jpg"
              alt="service bg img"
              style={{
                display: "block",
                transform: `translate3d(-50%, ${scrollTransform}px, 0px)`,
             
              }}
            /> // Fallback if image not available
          )}
          </div>
          <div className="parallax-content section-xl context-dark bg-overlay-68 bg-mobile-overlay">
            <div className="container">
              <div className="row row-30 justify-content-end text-right">
                <div className="col-sm-7">
                  <FadeInLeft classname="wow fadeInLeft"><h3>Let’s Bring Your Vision to Life!</h3></FadeInLeft>
                  <p>
                  Looking for a unique design solution to elevate your brand? Let us help you stand out with creativity and precision!
                  </p>
                  <div className="group-sm group-middle group justify-content-end">
                    <a
                      className="button button-primary button-ujarak"
                      href="#contacts"
                    >
                      Get in Touch
                    </a>
                    <a
                      className="button button-white-outline button-ujarak"
                      href="#aboutus"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  