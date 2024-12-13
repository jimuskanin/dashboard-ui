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
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
            .to(rightCurtainRef.current, {
                x: "5%",
                duration: 2,
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
            .to(leftCurtainRef.current, { x: "-100%", duration: 3, ease: "power2.out" })
            .to(rightCurtainRef.current, { x: "100%", duration: 3, ease: "power2.out" }, "<"); // Sync animation

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
                    transform: "translateX(0%)",
                }}
            ></div>
            <div
                ref={contentRef}
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 200, // Ensure content is above curtains
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
