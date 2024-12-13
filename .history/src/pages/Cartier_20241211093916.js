import React from 'react';
import {
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
        // ANIMATION SETUP 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top center", // ADJUST SCROLL POSITION
                end: "bottom center",
                scrub: 1, // SMOOTH SCROLL ANIMATION
                markers: true, // DEBUGGING
            },
        });
        timeline
            .to(leftCurtainRef.current, { x: "-100%", duration: 1 })
            .to(rightCurtainRef.current, { x: "100%", duration: 1 }, "<"); // "<" MEANS PLAY AT THE SAME TIME

        return () => {
            // CLEANUP SCROLLTRIGGER
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }), [];

    return (
        <div>
            CARTIER
        </div>
    );
}

export default Cartier;
