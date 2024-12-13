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
    // const contentRef = useRef(null);

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Curtain references are missing.");
            return;
        }

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: leftCurtainRef.current,
                start: "center",
                // end: "top 20%",
                scrub: 1,
                markers: true,
                // onEnter: () => console.log("ScrollTrigger activated!"),
            },
        });

        timeline
            .to(leftCurtainRef.current, { x: "-100%", duration: 3 })
            .to(rightCurtainRef.current, { x: "100%", duration: 3 }, "<"); // Sync animation

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div style={{
            height: "100vh",
            position: "relative"
        }}>
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
                    transform: "none",
                    // transform: "translateX(0%)",
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
                    transform: "none",
                    // transform: "translateX(0%)",
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
            </div>
        </div>
    );
}

export default Cartier;
