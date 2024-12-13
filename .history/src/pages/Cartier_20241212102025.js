import React, {
    useRef,
    useEffect,
    useState
} from "react";

import "../assets/styles/cartier.css";
import logo from "../assets/images/cartier/logo/dodeal.png";

import {
    PiArrowDownLight
} from "react-icons/pi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cartier() {
    const leftCurtainRef = useRef(null);
    const rightCurtainRef = useRef(null);
    const contentAboveRef = useRef(null);
    const contentBelowRef = useRef(null);

    const brandLogoRef = useRef(null);

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Missing references for curtains.");
            return;
        }

        console.log('Trigger Element:', contentBelowRef.current);

        // // INITIAL STATES 
        gsap.set(leftCurtainRef.current, { x: "0%" });
        gsap.set(rightCurtainRef.current, { x: "0%" });
        gsap.set(contentAboveRef.current, { opacity: 1 });
        gsap.set(brandLogoRef.current, { opacity: 0 });

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentBelowRef.current,
                start: "20% top",
                end: "100% bottom",
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
        timeline.to(brandLogoRef.current, { opacity: 1, duration: 3 }, "<");

        // ScrollTrigger.refresh();
        // console.log(leftCurtainRef.current, rightCurtainRef.current, contentAboveRef.current);

        // CLEAN UP SCROLL TRIGGER ON COMPONENT UNMOUNT 
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-[100vw] h-full">
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
            {/* HERO */}
            <div className="fixed w-[100vw] h-[100vh] overflow-hidden">
                {/* CURTAIN ANIMATION */}
                <div
                    className="curtainBody absolute top-0 left-0 w-full h-full"
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
                <div
                    ref={brandLogoRef}
                    className="fixed w-[100vw] h-[100vh] flex items-center justify-center"
                >
                    <img src={logo} alt="DoDeal" />
                </div>
                {/* <div className="w-full h-full flex flex-col items-center justify-center">
                    2nd content: moon and text
                </div> */}
            </div>

            {/* THIRD */}
            <div className="w-full h-[100vh] container container-fluid py-5">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    3rd content: change sky and show tree
                </div>
            </div>
        </div>
    );
}

export default Cartier;