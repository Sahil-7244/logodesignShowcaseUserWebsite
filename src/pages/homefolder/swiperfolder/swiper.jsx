import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import FadeInLeft from "../../../fortriggeranimation/fadeinleftanimation";
import FadeInRight from "../../../fortriggeranimation/fadeinrightanimation";
import FadeInUp from "../../../fortriggeranimation/fadeinupanimation";
import "./swiper.css";
import axios from "axios";

export default function SWIPER() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  // Update active slide when Swiper changes slides
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex); // Use `realIndex` for the actual slide index in looped slides
  };

  // Handle bullet clicks
  const handleBulletClick = (index) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index); // Use `slideToLoop` for looped slides
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", handleSlideChange);
      }
    };
  }, []);
  
const [slides, setSlide] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/getBanner`);
      setSlide(response.data.banners);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSlide([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="section swiper-container swiper-slider-classic">
        <Swiper
          modules={[Pagination, Autoplay]}
          direction="vertical"
          loop={true}
          autoplay={{ delay: 4859 }}
          ref={swiperRef}
          style={{ width: "100%", height: "100vh" }}
          className="swiper-wrapper text-center"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${slide.bannerImg})`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <div className="swiper-slide-caption section-md">
                <div
                  className="container"
                  style={
                    window.innerWidth < 939
                      ? { marginTop: "30px" }
                      : { marginTop: "170px" }
                  }
                >
                  <FadeInLeft triggeronce={false}>
                    <h1 style={{}}>{slide.bannerTitle}</h1>
                  </FadeInLeft>
                  <br />
                  <FadeInRight triggeronce={false}>
                    <p style={{ paddingRight: "15%", paddingLeft: "15%" }}>
                      {slide.bannerDesc}
                    </p>
                  </FadeInRight>
                  <br />
                  <FadeInUp triggeronce={false}>
                    <a className="button button-primary button-ujarak" href="#contacts">
                        Get in touch
                    </a>
                  </FadeInUp>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination__module">
          <div className="swiper-pagination__divider"></div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`swiper-pagination-bullet ${
                  activeSlide === index ? "swiper-pagination-bullet-active" : ""
                }`}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
