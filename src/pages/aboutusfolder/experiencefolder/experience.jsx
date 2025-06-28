import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FadeInUp from "../../../fortriggeranimation/fadeinupanimation";
import FadeInRight from "../../../fortriggeranimation/fadeinrightanimation";
import FadeInLeft from "../../../fortriggeranimation/fadeinleftanimation";
import axios from "axios";

export default function EXPERIENCE() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // When 10% of the component is visible
  });

  const [experience, setExperience] = useState(0);
  const [appsDeveloped, setAppsDeveloped] = useState(0);
  const [consultants, setConsultants] = useState(0);
  const [awards, setAwards] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [data, setData] = useState({experience: 0,
    appsdeveloped: 0,
    consultants: 0,
    awards: 0,
    employees: 0,});

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://logodesignshowcasebackend-5.onrender.com/getexperience`);
      setData(response.data.experience);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setData([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //const aboutexperience={};

  // Function to animate numbers
  const animateValue = (setter, target, duration) => {
    const stepTime = Math.abs(Math.floor(duration / parseInt(target)));
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setter(current);
      if (current >= parseInt(target)) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (inView && data.length > 0) {
      animateValue(setExperience, data[0].experience, 1000); // Animate "Years of Experience" to 10 in 2 seconds
      animateValue(setAppsDeveloped, data[0].appsdeveloped, 1000); // Animate "2k apps developed"
      animateValue(setConsultants, data[0].consultants, 1000); // Animate "Consultants"
      animateValue(setAwards, data[0].awardswon, 1000); // Animate "Awards won"
      animateValue(setEmployees, data[0].employee, 1000); // Animate "Employees"
    }else{
      animateValue(setExperience, 0, 1000); // Animate "Years of Experience" to 10 in 2 seconds
      animateValue(setAppsDeveloped, 0, 1000); // Animate "2k apps developed"
      animateValue(setConsultants, 0, 1000); // Animate "Consultants"
      animateValue(setAwards, 0, 1000); // Animate "Awards won"
      animateValue(setEmployees, 0, 1000); // Animate "Employees"
    }
  }, [inView]);

  return (
    <section className="section section-sm bg-default" ref={ref}>
      <div className="container">
        <div className="row row-30 row-xl-24 justify-content-center align-items-center align-items-lg-start text-left">
          <div className="col-md-6 col-lg-5 col-xl-4 text-center">
            <a className="text-img" href="#">
              <div id="particles-js"><canvas class="particles-js-canvas-el" style={{width: '100%', height: '100%',}} width="450" height="450"></canvas></div>
              <span className="counter">{experience}</span>
            </a>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <FadeInUp classname="text-width-extra-small offset-top-lg-24 wow fadeInUp">
              <h3 className="title-decoration-lines-left">Years of Experience</h3>
              <p className="text-gray-500">
              JVgraphics is a team of highly experienced graphic designers and creative professionals who specialize in logo designs, banners, promotional graphics, and more. We work closely with you to bring your brand’s visual identity to life.
              </p>
              <a className="button button-secondary button-pipaluk" href="#contacts">
                Get in touch
              </a>
            </FadeInUp>
          </div>
          <FadeInRight
            classname="col-sm-10 col-md-8 col-lg-6 col-xl-4 wow fadeInRight"
            data-wow-delay=".1s"
          >
            <div className="row justify-content-center border-2-column offset-top-xl-26">
              <div className="col-9 col-sm-6">
                <div className="counter-amy">
                  <div className="counter-amy-number">
                    <span className="counter">{appsDeveloped}</span>
                    <span className="symbol">k</span>
                  </div>
                  <h6 className="counter-amy-title">projects completed</h6>
                </div>
              </div>
              <div className="col-9 col-sm-6">
                <div className="counter-amy">
                  <div className="counter-amy-number">
                    <span className="counter">{consultants}</span>
                  </div>
                  <h6 className="counter-amy-title">Consultants</h6>
                </div>
              </div>
              <div className="col-9 col-sm-6">
                <div className="counter-amy">
                  <div className="counter-amy-number">
                    <span className="counter">{awards}</span>
                  </div>
                  <h6 className="counter-amy-title">Awards won</h6>
                </div>
              </div>
              <div className="col-9 col-sm-6">
                <div className="counter-amy">
                  <div className="counter-amy-number">
                    <span className="counter">{employees}</span>
                  </div>
                  <h6 className="counter-amy-title">Employees</h6>
                </div>
              </div>
            </div>
          </FadeInRight>
          <div className="col-lg-6 col-xl-12 align-self-center">
            <div className="row row-30 justify-content-center">
              <FadeInLeft classname="wow fadeInLeft">
              <img
                    src="sung-jin-woo.png"
                    alt='clients'
                    style={{width:'100%',height:'auto',objectFit:'contain'}}
                  />{/* <a className="clients-classic" href="#">
                  <img
                    src="images/clients-9-270x117.png"
                    alt
                    width={270}
                    height={117}
                  />
                </a>
              </FadeInLeft>
              <FadeInLeft
                classname="col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <a className="clients-classic" href="#">
                  <img
                    src="images/clients-10-270x117.png"
                    alt
                    width={270}
                    height={117}
                  />
                </a>
              </FadeInLeft>
              <FadeInLeft
                classname="col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <a className="clients-classic" href="#">
                  <img
                    src="images/clients-3-270x117.png"
                    alt
                    width={270}
                    height={117}
                  />
                </a>
              </FadeInLeft>
              <FadeInLeft
                classname="col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <a className="clients-classic" href="#">
                  <img
                    src="images/clients-11-270x117.png"
                    alt
                    width={270}
                    height={117}
                  />
                </a> */}
              </FadeInLeft>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
