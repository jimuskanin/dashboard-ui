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

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current || !contentAboveRef.current) {
            console.error("Missing references for curtains or content.");
            return;
        }

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentAboveRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                markers: true, // TRUE FOR DEBUGGING, FALSE FOR PRODUCTION
            },
        });

    //     timeline
    //         .to(leftCurtainRef.current, { x: "-100%", duration: 3 })
    //         .to(rightCurtainRef.current, { x: "100%", duration: 3 }, "<"); // Sync animation

    //     return () => {
    //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //     };
    }, []);

    return (
        <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
            {/* CONTENT ABOVE CURTAIN */}
            <div className="content-above absolute top-0 left-0 w-full h-full"
                style={{
                    zIndex: 100,
                }}>
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
            {/* CURTAIN ANIMATION */}
            <div
                className="curtainBody absolute top-0 left-0 w-full h-full"
                style={{
                    zIndex: 99,
                }}
            >
                {/* LEFT CURTAIN */}
                <div id="leftCurtain" className="curtainContainer left-0">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="unCurtain" style={{ animationDelay: `-${index * 0.1}s` }}></div>
                    ))}
                </div>
                {/* RIGHT CURTAIN */}
                <div id="rightCurtain" className="curtainContainer right-0">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="unCurtain" style={{ animationDelay: `-${index * 0.1}s` }}></div>
                    ))}
                </div>
            </div>

            {/* CONTENT BELOW */}
            <div className="content absolute top-0 left-0 w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80"
                    alt="Background"
                />
            </div>

            {/* <div
                ref={leftCurtainRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                    backgroundColor: "black",
                    zIndex: 100,
                    // transform: "none",
                    transform: "translateX(0%)",
                }}
            ></div>
            <div
                ref={rightCurtainRef}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100%",
                    backgroundColor: "black",
                    zIndex: 100,
                    // transform: "none",
                    transform: "translateX(0%)",
                }}
            ></div>
            <div
                // ref={contentRef}
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                }}
            >
                <h1>Welcome to the Show!</h1>
                <p>Scroll to reveal the content.</p>
            </div> */}
        </div>
    );
}

export default Cartier;
