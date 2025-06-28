import { useEffect, useState } from "react";
import FadeInLeft from "../../fortriggeranimation/fadeinleftanimation";
import FadeInRight from "../../fortriggeranimation/fadeinrightanimation";
import axios from "axios";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function PROJECT(){
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isactive, setIsactive] = useState('all');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const toggleFilterVisibility = () => {
      setIsFilterVisible((prevState) => !prevState);
  };

  const fetchData = async () => {
    try {
        const response = isactive === "all"
            ? await axios.get(`https://logodesignshowcasebackend-5.onrender.com/user/getproducts`)
            : await axios.post(`https://logodesignshowcasebackend-5.onrender.com/user/getProductByCategory`, { category: isactive });
        setData(response.data.products);
    } catch (error) {
      setData([]);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [isactive]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.length>0 ? data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ):[];

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    return(
        <section className="section section-sm section-fluid bg-default text-center" id="projects" style={{paddingTop:"100px"}}>
        <div className="container-fluid">
            <FadeInLeft><h2 className="wow fadeInLeft">Latest Design Projects</h2></FadeInLeft>
            <FadeInRight><p className="quote-jean wow fadeInRight" data-wow-delay=".1s" style={{backgroundImage:'url(jcvlogo.png)'}}>Explore our portfolio to discover cutting-edge designs crafted for diverse industries. Our expert team of graphic designers is dedicated to delivering unique and impactful visual solutions tailored to your needs.</p></FadeInRight>
            <div className="isotope-filters isotope-filters-horizontal">
            <button className={`isotope-filters-toggle button button-md button-icon button-icon-right button-default-outline button-wapasha ${isFilterVisible?'active':''}`} data-custom-toggle="#isotope-3" data-custom-toggle-hide-on-blur="true" data-custom-toggle-disable-on-blur="true" onClick={toggleFilterVisibility}><span className="icon fa fa-caret-down" />Filter</button>
                        <ul className={`isotope-filters-list ${isFilterVisible?'active':''}`} id="isotope-3">
                            <li><a className={isactive=='all'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="*" data-isotope-group="gallery" onClick={()=>setIsactive('all')}>All</a></li>
                            <li><a className={isactive=='Logo Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 1" data-isotope-group="gallery" onClick={()=>setIsactive('Logo Design')}>Logo Design</a></li>
                            <li><a className={isactive=='Pouch Packaging'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 2" data-isotope-group="gallery" onClick={()=>setIsactive('Pouch Packaging')}>Pouch Packaging</a></li>
                            <li><a className={isactive=='Box Packaging'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 3" data-isotope-group="gallery" onClick={()=>setIsactive('Box Packaging')}>Box Packaging</a></li>
                            <li><a className={isactive=='Container Packaging'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Container Packaging')}>Container Packaging</a></li>
                            <li><a className={isactive=='Sticker Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Sticker Design')}>Sticker Design</a></li>
                            <li><a className={isactive=='Label Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Label Design')}>Label Design</a></li>
                            <li><a className={isactive=='Brochure Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Brochure Design')}>Brochure Design</a></li>
                            <li><a className={isactive=='Catalogue Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Catalogue Design')}>Catalogue Design</a></li>
                            <li><a className={isactive=='Flyer Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Flyer Design')}>Flyer Design</a></li>
                            <li><a className={isactive=='Banner Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Banner Design')}>Banner Design</a></li>
                            <li><a className={isactive=='Stationery Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Stationery Design')}>Stationery Design</a></li>
                            <li><a className={isactive=='UI/UX'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('UI/UX')}>UI/UX</a></li>
                            <li><a className={isactive=='Website Design'?'active':''} style={{cursor:'pointer'}} data-isotope-filter="Type 4" data-isotope-group="gallery" onClick={()=>setIsactive('Website Design')}>Website Design</a></li>
                        </ul>
            </div>
            <FadeInRight classname="row row-30 isotope isotope--loaded" data-isotope-layout="fitRows" data-isotope-group="gallery" data-lightgallery="group" style={{display:'flex'}}>
            {loading ? (
              <p className="h3 text-center">Loading...</p>
            ) : currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <FadeInRight classname="col-sm-6 col-lg-4 col-xxl-3 isotope-item wow fadeInRight">
                        {/* Thumbnail Classic*/}
                        <article className="thumbnail thumbnail-classic thumbnail-md">
                        <div className="thumbnail-classic-figure"><img src={`${item.productImage}`} alt={item.productImage} style={{width:'420px',height:'350px',objectFit:'cover'}} width={420} height={350} />
                        </div>
                        <div className="thumbnail-classic-caption">
                            <div className="thumbnail-classic-title-wrap">
                                <h5 className="thumbnail-classic-title"><a href="#">{item.category}</a></h5>
                            </div>
                            <p className="thumbnail-classic-text">{item.productDesc}</p>
                        </div>
                        </article>
                    </FadeInRight>
              ))
            ) : (
              <p className="h3 text-center">No Products</p>
            )}
            </FadeInRight>
            <br/>
            <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <Pagination
                      current={currentPage}
                      total={data.length}
                      pageSize={productsPerPage}
                      onChange={handlePageChange}
                      hideOnSinglePage={true}
                    />
                  </ul>
                </nav>
              </div>
        </div>
        </section>
    );
}