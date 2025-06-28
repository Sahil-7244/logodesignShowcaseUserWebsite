import axios from "axios";
import { useEffect, useState } from "react";

export default function INFO(){
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
    return(
        <>
            <section className="section section-sm bg-default">
            <div className="container">
                <div className="row row-30 justify-content-center">
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <article className="box-contacts">
                    <div className="box-contacts-body">
                        <div className="box-contacts-icon fl-bigmug-line-cellphone55" />
                        <div className="box-contacts-decor" />
                        <p className="box-contacts-link"><a href={`tel:${data.length? `+91 ${data[0].phone}`:''}`}>{data.length? `+91 ${data[0].phone}`:''}</a></p>
                        {/* <p className="box-contacts-link"><a href="tel:#">+1 323-888-4554</a></p> */}
                    </div>
                    </article>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <article className="box-contacts">
                    <div className="box-contacts-body">
                        <div className="box-contacts-icon fl-bigmug-line-up104" />
                        <div className="box-contacts-decor" />
                        <p className="box-contacts-link"><a href="#">{data.length? `${data[0].address}`:''}</a></p>
                    </div>
                    </article>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <article className="box-contacts">
                    <div className="box-contacts-body">
                        <div className="box-contacts-icon fl-bigmug-line-chat55" />
                        <div className="box-contacts-decor" />
                        <p className="box-contacts-link"><a href={`mailto:${data.length? `${data[0].email}`:''}`}>{data.length? `${data[0].email}`:''}</a></p>
                        {/* <p className="box-contacts-link"><a href="mailto:#">info@demolink.org</a></p> */}
                    </div>
                    </article>
                </div>
                </div>
            </div>
            </section>

        </>
    );
}