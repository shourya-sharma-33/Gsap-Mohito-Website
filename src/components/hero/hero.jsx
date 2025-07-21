import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from 'react-responsive';


// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    // hero split me store kia text split ko 
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    // paragraph split me paraghraph ki lines to apply animation
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    // hero split ke character me har ek charater par har ek charater ki classlist me text gradient class add karo

    gsap.from(heroSplit.chars, {
        // hero split ke har character par apply
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    //   ye sari properties
    });

    gsap.from(paragraphSplit.lines, {
        // yahi para par
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    gsap.from("video", {
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 1.5,
        });
    
    gsap.timeline({
        scrollTrigger: {
            trigger : '#hero',
            start: 'top top',
            end : 'bottom top',
            scrub: true
        }
    })
    .to('.right-leaf', {y:200},0)
    .to('.left-leaf', {y:-200},0) 
    // #hero ko scroll karne par trigger hoga, aur hamne end aur start define kia
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: startValue, 
            end: endValue,
            scrub: true,
            pin: true,
            },
        });
    videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
            currentTime: videoRef.current.duration
        });
    };
});

  return (
    <>
        <section
            id="hero"
            className="noisy"
            // style={{
            //     backgroundImage: "url(/images/colorchangegal (1))",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     backgroundRepeat: "no-repeat",
            // }}
        >
        <h1 className="title">MOJITO</h1>
        {/* yahan par main apna naam likh liunga */}
        <img src="/images/hero-left-leaf.png" alt="" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />
        <div className="body">
            <div className="content">
            <div className="space-y-5 hidden md:block">
                <p>Cool, Crisp, Classic</p>
                <p className="subtitle">
                Sip the Spirit <br /> of Summer
                </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">
                Every Cocktail on our menu is a blend of premium ingredient,
                creative flair and timeless recipes, designed to delight your
                senses
                </p>
                <a href="#cocktails">View Cocktails</a>
            </div>
            </div>
        </div>
        </section>
        <div className="
            video absolute inset-0
        ">
            <video src="/videos/output.mp4"
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                
            ></video>
        </div>
  </>
  );
};

export default Hero;
