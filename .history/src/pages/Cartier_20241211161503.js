import React, {
    useRef,
    useEffect,
    useState
} from "react";

import "../assets/styles/cartier.css";

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

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentBelowRef.current,
                start: "top top",
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

        // ScrollTrigger.refresh();
        // console.log(leftCurtainRef.current, rightCurtainRef.current, contentAboveRef.current);

        // CLEAN UP SCROLL TRIGGER ON COMPONENT UNMOUNT 
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="w-full h-[100vh]">
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
            <div className="relative w-[100vw] h-[100vh] overflow-hidden">
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
                        style={{ transform: "translateX(0%)" }}
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
                        style={{ transform: "translateX(0%)" }}
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
            <div className="w-full h-[100vh] container container-fluid py-5">
                <div className="w-full h-full flex items-center justify-center">
                    HELLO
                </div>
            </div>
        </div>
    );
}

export default Cartier;
