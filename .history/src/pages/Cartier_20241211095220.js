import React, {
    useRef,
    useEffect
} from "react";

import "../assets/styles/cartier.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cartier() {
    const leftCurtainRef = useRef(null);
    const rightCurtainRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Curtain references are missing.");
            return;
        }

        // INITIAL WIND-LIKE ANIMATION 
        gsap.timeline()
            .to(leftCurtainRef.current, {
                x: "-5%",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
            .to(rightCurtainRef.current, {
                x: "5%",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }, "<");

        // SCROLL-TRIGGERED OPENING ANIMATION 
        gsap.timeline({
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: true,
            },
        })
            .to(leftCurtainRef.current, { x: "-100%", duration: 1.5 })
            .to(rightCurtainRef.current, { x: "100%", duration: 1.5 }, "<"); // Sync animation

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

        // // ANIMATION SETUP 
        // const timeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: contentRef.current,
        //         start: "top center", // ADJUST SCROLL POSITION
        //         end: "bottom center",
        //         scrub: 1, // SMOOTH SCROLL ANIMATION
        //         markers: true, // DEBUGGING
        //     },
        // });
        // timeline
        //     .to(leftCurtainRef.current, { x: "-100%", duration: 1 })
        //     .to(rightCurtainRef.current, { x: "100%", duration: 1 }, "<"); // "<" MEANS PLAY AT THE SAME TIME

        // return () => {
        //     // CLEANUP SCROLLTRIGGER
        //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        // };
    }, []);

    return (
        <div style={{
            height: "100vh",
            position: "relative"
        }}>
            CARTIER
            <div
                ref={leftCurtainRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                    backgroundColor: "black",
                    zIndex: 100,
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
                }}
            ></div>
            <div
                ref={contentRef}
                style={{
                    marginTop: "150vh", // To test scroll effect
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <h1>Welcome to the Show!</h1>
                <p>Scroll to reveal the content.</p>
            </div>
        </div>
    );
}

export default Cartier;
