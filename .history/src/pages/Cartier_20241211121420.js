import React, {
    useRef,
    useEffect,
    useState
} from "react";

import "../assets/styles/cartier.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cartier() {
    const leftCurtainRef = useRef(null);
    // const rightCurtainRef = useRef(null);

    // useEffect(() => {
    //     if (!leftCurtainRef.current || !rightCurtainRef.current) {
    //         console.error("Curtain references are missing.");
    //         return;
    //     }

    //     // SCROLL-TRIGGERED OPENING ANIMATION 
    //     const timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: leftCurtainRef.current,
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: 1,
    //             markers: true,
    //             // onEnter: () => console.log("ScrollTrigger activated!"),
    //         },
    //     });

    //     timeline
    //         .to(leftCurtainRef.current, { x: "-100%", duration: 3 })
    //         .to(rightCurtainRef.current, { x: "100%", duration: 3 }, "<"); // Sync animation

    //     return () => {
    //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //     };
    // }, []);

    return (
        <div className="relative w-full h-screen">
            <div className="content-above absolute top-0 left-0 w-full h-full"
                style={{
                    zIndex: 100,
                }}>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="hero-brand grad-anim">
                        DODEAL
                    </div>
                </div>
            </div>
            {/* CONTENT */}
            <div className="content absolute top-0 left-0 w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80"
                    alt="Background"
                />
            </div>

            {/* Curtain Animation */}
            <div className="curtainBody absolute top-0 left-0 w-full h-full">
                {/* Left Curtain */}
                <div id="leftCurtain" className="curtainContainer left-0">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="unCurtain" style={{ animationDelay: `-${index * 0.1}s` }}></div>
                    ))}
                </div>

                {/* Right Curtain */}
                <div id="rightCurtain" className="curtainContainer right-0">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="unCurtain" style={{ animationDelay: `-${index * 0.1}s` }}></div>
                    ))}
                </div>
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
