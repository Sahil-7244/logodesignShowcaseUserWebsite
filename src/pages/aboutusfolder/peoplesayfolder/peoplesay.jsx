import FadeInRight from "../../../fortriggeranimation/fadeinrightanimation"

export default function PEOPLESAY(){
    return(
        <>
            {/* What people Say*/}
            <section className="section section-sm section-bottom-70 section-fluid bg-default">
            <div className="container-fluid">
                <h2 style={{textAlign:"center"}}>What people Say</h2>
                <div className="row row-50 row-sm">
                <FadeInRight classname="col-md-6 col-xl-4 wow fadeInRight">
                    {/* Quote Modern*/}
                    <article className="quote-modern quote-modern-custom">
                    <div className="unit unit-spacing-md align-items-center">
                        <div className="unit-left"><a className="quote-modern-figure" href="#"><img className="img-circles" src="images/user.jpg" alt width={75} height={75} /></a></div>
                        <div className="unit-body">
                        <h4 className="quote-modern-cite"><a href="#">Catherine Williams</a></h4>
                        <p className="quote-modern-status">Regular client</p>
                        </div>
                    </div>
                    <div className="quote-modern-text">
                        <p className="q">JVgraphics provides exceptional design services, offering creative branding and visual solutions. Their team has consistently delivered high-quality designs that truly represent our vision. We've been working with them for several years, and they’ve become integral to our brand development.</p>
                    </div>
                    </article>
                </FadeInRight>
                <FadeInRight classname="col-md-6 col-xl-4 wow fadeInRight" data-wow-delay=".1s">
                    {/* Quote Modern*/}
                    <article className="quote-modern quote-modern-custom">
                    <div className="unit unit-spacing-md align-items-center">
                        <div className="unit-left"><a className="quote-modern-figure" href="#"><img className="img-circles" src="images/user.jpg" alt width={75} height={75} /></a></div>
                        <div className="unit-body">
                        <h4 className="quote-modern-cite"><a href="#">Rupert Wood</a></h4>
                        <p className="quote-modern-status">Regular client</p>
                        </div>
                    </div>
                    <div className="quote-modern-text">
                        <p className="q">jvgraphics's design team brought our branding to life with innovative logo designs and marketing materials. Their expertise in understanding client needs and meeting deadlines has been crucial in creating successful design projects that fit our business perfectly.</p>
                    </div>
                    </article>
                </FadeInRight>
                <FadeInRight classname="col-md-6 col-xl-4 wow fadeInRight" data-wow-delay=".2s">
                    {/* Quote Modern*/}
                    <article className="quote-modern quote-modern-custom">
                    <div className="unit unit-spacing-md align-items-center">
                        <div className="unit-left"><a className="quote-modern-figure" href="#"><img className="img-circles" src="images/user.jpg" alt width={75} height={75} /></a></div>
                        <div className="unit-body">
                        <h4 className="quote-modern-cite"><a href="#">Samantha Brown</a></h4>
                        <p className="quote-modern-status">Regular client</p>
                        </div>
                    </div>
                    <div className="quote-modern-text">
                        <p className="q">JVgraphics's team has an impressive range of design skills and creative approaches. From website design to branding, their work has been consistently top-notch, and we've achieved great success in every project we’ve collaborated on together.</p>
                    </div>
                    </article>
                </FadeInRight>
                </div>
            </div>
            </section>

        </>
    );
}