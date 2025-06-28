import EXPERIENCE from "./experiencefolder/experience";
import GETMOREWITHUS from "./getmorewithusfolder/getmorewithus";
import PEOPLESAY from "./peoplesayfolder/peoplesay";
import PRICING from "./pricingfolder/pricing";
import TEAM from "./teamfolder/team";

export default function ABOUTUS(){
    return(
        <section id="aboutus" style={{paddingTop:"20px"}}>
            <EXPERIENCE />
            {/* <TEAM /> */}
            <GETMOREWITHUS />
            <PEOPLESAY />
            {/* <PRICING /> */}
        </section>
    );
}