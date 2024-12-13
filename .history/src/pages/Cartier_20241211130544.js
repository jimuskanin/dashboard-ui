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
                end: "bottom topo",
                scrub: true, // SMOOTH SCRUBBING OF ANIMATION WITH SCROLL
                markers: true, // TRUE FOR DEBUGGING, FALSE FOR PRODUCTION
                onUpdate: (self) => {
                    console.log(self.progress);
                }
            },
        });

        // ANIMATE THE CURTAINS TO OPEN FROM THE SIDES 
        timeline
            .to(leftCurtainRef.current, { x: "-100%", ease: "none" }, 0)
            .to(rightCurtainRef.current, { x: "100%", ease: "none" }, 0)
            .to(contentAboveRef.current, { opacity: 0, ease: "none" }, 0);

        // CLEAN UP SCROLL TRIGGER ON COMPONENT UNMOUNT 
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
            {/* CONTENT ABOVE CURTAIN */}
            <div
                ref={contentAboveRef}
                className="content-above absolute top-0 left-0 w-full h-full"
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

            {/* CONTENT BELOW */}
            <div className="content absolute top-0 left-0 w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80"
                    alt="Background"
                />
            </div>
        </div>
    );
}

export default Cartier;