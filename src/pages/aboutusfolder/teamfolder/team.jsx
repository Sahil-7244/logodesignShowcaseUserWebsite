import { useEffect, useState } from "react";
import FadeInRight from "../../../fortriggeranimation/fadeinrightanimation"
import axios from "axios";

export default function TEAM(){
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://logodesignshowcasebackend-5.onrender.com/viewTeam`);
        setData(response.data.team);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    return(
        <>
        {/* Meet The Team*/}
        <section className="section section-sm section-fluid bg-default">
        <div className="container-fluid">
            <h2 style={{textAlign:"center"}}>Meet The Team</h2>
            <div className="row row-sm row-30 justify-content-center">
            {data.length > 0 ? (
              data.map((item) => (
                <FadeInRight classname="col-md-6 col-lg-5 col-xl-3 wow fadeInRight">
                            {/* Team Classic*/}
                            <article className="team-classic team-classic-lg"><a className="team-classic-figure" href="#"><img src={`${item.teammemberImage}`} alt='member' style={{width:'420px', height:'424px',objectFit:'cover'}} width={420} height={424} /></a>
                            <div className="team-classic-caption">
                                <h4 className="team-classic-name"><a href="#">{item.teammemberName}</a></h4>
                                <p className="team-classic-status">{item.teammemberrole}</p>
                            </div>
                            </article>
                        </FadeInRight>
              ))
            ) : (
              <p className="h3 text-center">No team members</p>
            )}
            </div>
        </div>
        </section>
        </>
    );
}