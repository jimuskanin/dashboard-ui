import React, {
    useRef,
    useEffect,
    useState
} from "react";

import "../assets/styles/cartier.css";
import logo from "../assets/images/cartier/logo/dodeal.png";
import logoD from "../assets/images/cartier/logo/parts/Gradient/1x/d-white.png";
import logoO from "../assets/images/cartier/logo/parts/Gradient/1x/o-green.png";

import {
    PiArrowDownLight
} from "react-icons/pi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cartier() {
    const brandLogoRef = useRef(null);
    const oLogoRef = useRef(null);

    const leftCurtainRef = useRef(null);
    const rightCurtainRef = useRef(null);
    const contentAboveRef = useRef(null);
    const contentBelowRef = useRef(null);

    const thirdSectionRef = useRef(null);
    const thirdBackgroundRef = useRef(null);
    const treeImageRef = useRef(null);

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Missing references for curtains.");
            return;
        }

        // console.log('Trigger Element:', contentBelowRef.current);

        // // INITIAL STATES 
        gsap.set(leftCurtainRef.current, { x: "0%" });
        gsap.set(rightCurtainRef.current, { x: "0%" });
        gsap.set(contentAboveRef.current, { opacity: 1 });
        gsap.set(brandLogoRef.current, {
            opacity: 0.1,
            scale: 3,
            top: "0%",
            left: "50%",
            transform: "translate(-50%, 50%)"
        });
        gsap.set(oLogoRef.current, {
            scale: 0.9,
            top: "0%",
            left: "50%",
            transform: "translate(-50%, 50%)"
        });

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentBelowRef.current,
                start: "5% top",
                end: "bottom center",
                scrub: 1, // SMOOTH SCRUBBING OF ANIMATION WITH SCROLL
                markers: true, // TRUE FOR DEBUGGING, FALSE FOR PRODUCTION
                onUpdate: (self) => console.log("Scroll Progress: ", self.progress),
                onEnter: () => console.log("ScrollTrigger Entered"),
                onLeave: () => console.log("ScrollTrigger Left"),
            },
        });
        // ANIMATE THE CURTAINS TO OPEN FROM THE SIDES 
        timeline.to(leftCurtainRef.current, { x: "-100%", duration: 3, ease: "power2.out" });
        timeline.to(rightCurtainRef.current, { x: "100%", duration: 3, ease: "power2.out" }, "<");
        timeline.to(contentAboveRef.current, { opacity: 0, duration: 3 }, "<");
        timeline.to(brandLogoRef.current, {
            opacity: 1,
            scale: 1,
            top: "0%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            duration: 3,
            zIndex: 90,
        }, "<");
        timeline.to(oLogoRef.current, {
            top: "0%",
            left: "50%",
            transform: "translate(30%, 180%)",
            scale: 1,
            duration: 3,
            zIndex: 101
        }, "<");

        // THIRD TIMELINE 
        const thirdTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: thirdSectionRef.current,
                start: "20% top",
                end: "bottom center",
                scrub: 1,
                markers: true,
            },
        });
        thirdTimeline.to("body::before", { opacity: 0, duration: 3 }, 0);
        thirdTimeline.to(thirdBackgroundRef.current, { opacity: 1, duration: 3 }, "<");
        thirdTimeline.to(brandLogoRef.current, { opacity: 0, duration: 3 }, "<");
        timeline.to(oLogoRef.current, {
            top: "0%",
            left: "50%",
            transform: "translate(50%, 50%)",
            scale: 1.2,
            duration: 3,
            zIndex: 101
        }, "<");
        thirdTimeline.fromTo(
            treeImageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3 },
            1
        );

        // CLEAN UP SCROLL TRIGGER ON COMPONENT UNMOUNT 
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-[100vw] h-full">
            {/* HERO FIRST  */}
            <div className="fixed w-[100vw] h-[100vh] flex items-center justify-center">
                {/* O OVERALL */}
                <div
                    ref={oLogoRef}
                    className="absolute"
                    style={{
                        zIndex: 101,
                    }}
                >
                    <img
                        src={logoO}
                        alt="DoDeal"
                        className="h-[90px]"
                    />
                </div>
                {/* D HERO */}
                <div
                    ref={brandLogoRef}
                    className="absolute"
                    style={{
                        zIndex: 90,
                    }}
                >
                    <img
                        src={logoD}
                        alt="DoDeal"
                        className="h-[300px] object-contain"
                        style={{
                            zIndex: 90,
                        }}
                    />
                </div>
            </div>
            {/* CONTENT ABOVE CURTAIN */}
            <div
                ref={contentAboveRef}
                className="content-above fixed top-0 left-0 w-[100vw] h-[100vh]"
                style={{
                    zIndex: 100,
                }}
            >
                <div className="relative w-full h-full flex flex-col gap-5 items-center justify-between py-5">
                    <div className="p-5"></div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="hero-brand grad-anim">
                            DODEAL
                        </div>
                        <div className="uppercase text-xs grad-anim">
                            Scroll to reveal
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="p-2 border border-[var(--gold-3)] rounded-full">
                            <PiArrowDownLight className="grad-anim" size={16} />
                        </div>
                    </div>
                </div>
            </div>
            {/* CURTAINS */}
            <div
                className="fixed w-[100vw] h-[100vh] overflow-hidden"
                style={{
                    zIndex: 99,
                }}
            >
                {/* CURTAIN ANIMATION */}
                <div
                    className="curtainBody absolute top-0 left-0 w-full h-full"
                    style={{
                        zIndex: 99,
                    }}
                >
                    {/* LEFT CURTAIN */}
                    <div
                        ref={leftCurtainRef}
                        className="curtainContainer left-0"
                        style={{
                            transform: "translateX(0%)",
                            zIndex: 99,
                        }}
                    >
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="unCurtain"
                                style={{
                                    animationDelay: `-${index * 0.1}s`
                                }}
                            ></div>
                        ))}
                    </div>
                    {/* RIGHT CURTAIN */}
                    <div
                        ref={rightCurtainRef}
                        className="curtainContainer right-0"
                        style={{
                            transform: "translateX(0%)",
                            zIndex: 99,
                        }}
                    >
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="unCurtain"
                                style={{
                                    animationDelay: `-${index * 0.1}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            {/* SECOND */}
            <div
                ref={contentBelowRef}
                className="w-[100vw] h-[200vh]"
                style={{
                    zIndex: 90,
                }}
            >
            </div>

            {/* THIRD */}
            {/* <div
                ref={thirdSectionRef}
                className="w-full h-[100vh] flex flex-col gap-5 items-center justify-center"
            >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    3rd content:
                    change sky
                    show tree images
                    hide logoD
                </div>
            </div> */}
            <div
                ref={thirdSectionRef}
                className="relative w-full h-[100vh] flex flex-col items-center justify-center"
            >
                <div
                    ref={thirdBackgroundRef}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("../images/bg/tree-bg.jpeg")`, // Add your new background image
                        opacity: 0,
                        zIndex: -1,
                    }}
                ></div>
                <div ref={treeImageRef} className="relative">
                    <img
                        src={logo}
                        alt="Tree"
                        className="w-[300px] h-auto object-contain"
                        style={{ opacity: 0 }}
                    />
                </div>
                <div className="text-white text-lg">Third Content: Show Tree</div>
            </div>


            <div
                className="w-full h-[100vh] flex flex-col gap-5 items-center justify-center"
            >
            </div>

        </div>
    );
}

export default Cartier;
