import NAVBAR from "./navbarfolder/navbar";
import SWIPER from "./swiperfolder/swiper";

export default function HOME(){
    return(
        <section id="home" style={{paddingBottom:"67px"}}>
            <NAVBAR />
            <SWIPER />
        </section>
    );
}