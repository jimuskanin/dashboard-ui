import React, {
    useRef,
    useEffect,
    useState
} from "react";

import "../assets/styles/cartier.css";
import logo from "../assets/images/cartier/logo/dodeal.png";
import logoD from "../assets/images/cartier/logo/parts/Plain/1x/d-white.png";
import logoO from "../assets/images/cartier/logo/parts/Plain/1x/o-green.png";
import pattern1 from "../assets/images/cartier/logo/parts/pattern-green.png";
import pattern2 from "../assets/images/cartier/logo/parts/pattern-white.png";

import {
    PiArrowDownLight
} from "react-icons/pi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cartier() {
    const brandLogoRef = useRef(null);
    const oLogoRef = useRef(null);
    const mottoRef = useRef(null);

    const leftCurtainRef = useRef(null);
    const rightCurtainRef = useRef(null);
    const contentAboveRef = useRef(null);
    const contentBelowRef = useRef(null);

    const thirdSectionRef = useRef(null);
    const pattern1Ref = useRef(null);
    const pattern2Ref = useRef(null);

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Missing references for curtains.");
            return;
        }

        // INITIAL STATES 
        gsap.set(leftCurtainRef.current, { x: "0%" });
        gsap.set(rightCurtainRef.current, { x: "0%" });
        gsap.set(contentAboveRef.current, { opacity: 1 });
        gsap.set(brandLogoRef.current, {
            opacity: 0.1,
            scale: 3,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
        gsap.set(oLogoRef.current, {
            scale: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
        gsap.set(mottoRef.current, {
            opacity: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 150%)"
        });

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentBelowRef.current,
                start: "5% top",
                end: "60% bottom",
                scrub: 1, // SMOOTH SCRUBBING OF ANIMATION WITH SCROLL
                markers: true, // TRUE FOR DEBUGGING, FALSE FOR PRODUCTION
            },
        });
        // ANIMATE THE CURTAINS TO OPEN FROM THE SIDES 
        timeline.to(leftCurtainRef.current, { x: "-100%", duration: 3, ease: "power2.out" });
        timeline.to(rightCurtainRef.current, { x: "100%", duration: 3, ease: "power2.out" }, "<");
        timeline.to(contentAboveRef.current, { opacity: 0, duration: 3, ease: "power2.out" }, "<");
        timeline.to(brandLogoRef.current, {
            opacity: 0.5,
            scale: 2,
            duration: 3,
        }, "<");
        timeline.to(oLogoRef.current, {
            opacity: 1,
            scale: 1.5,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // transform: "translate(30%, 180%)",
            duration: 3,
        }, "<");

        // SECOND TIMELINE 
        const secondTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: contentBelowRef.current,
                start: "60% bottom",
                end: "bottom bottom",
                scrub: 1, // SMOOTH SCRUBBING OF ANIMATION WITH SCROLL
                markers: true, // TRUE FOR DEBUGGING, FALSE FOR PRODUCTION
            },
        });
        secondTimeline.to(brandLogoRef.current, {
            opacity: 1,
            scale: 1,
            duration: 3,
        });
        secondTimeline.to(oLogoRef.current, {
            opacity: 1,
            scale: 1,
            top: "50%",
            left: "50%",
            transform: "translate(30%, -150%)",
            duration: 3,
        }, "<");
        secondTimeline.fromTo(mottoRef.current,
            {
                opacity: 0,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 50%)"
            },
            {
                opacity: 1,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 200%)"
            },
            1
        );

        // secondTimeline.to(brandLogoRef.current, { opacity: 0, duration: 3, ease: "power2.in" });
        // secondTimeline.to(oLogoRef.current, { opacity: 0, duration: 3, ease: "power2.in" }, "<");

        // THIRD TIMELINE 
        const thirdTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: thirdSectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: true,
            },
        });
        // thirdTimeline.
        // thirdTimeline.to(brandLogoRef.current, { opacity: 0, duration: 1, ease: "power2.out" });
        // thirdTimeline.to(oLogoRef.current, { opacity: 0, duration: 1, ease: "power2.out" }, "<");

        // CLEAN UP SCROLL TRIGGER ON COMPONENT UNMOUNT 
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-[100vw] h-full">
            {/* O OVERALL */}
            <div
                ref={oLogoRef}
                className="fixed"
                style={{
                    zIndex: 10,
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
                className="fixed"
                style={{
                    zIndex: 9,
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
            {/* MOTTO */}
            <div
                ref={mottoRef}
                className="fixed uppercase text-2xl grad-anim font-bold"
            >
                Your success, our deal
            </div>
            {/* </div> */}
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
            <div
                ref={thirdSectionRef}
                className="relative w-full h-[100vh] flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "linear-gradient(to bottom, transparent, var(--secondary))",
                    zIndex: -1
                }}
            >
                <img
                    ref={pattern1Ref}
                    src={pattern1}
                    alt="Tree"
                    className="w-[200px] h-auto object-contain w-[200px] h-auto object-contain absolute left-[10vw] bottom-[30vh]"
                />
                <img
                    ref={pattern2Ref}
                    src={pattern2}
                    alt="Tree"
                    className="w-[200px] h-auto object-contain w-[200px] h-auto object-contain absolute right-[10vw] bottom-0"
                />
            </div>


            <div
                className="w-full h-[100vh] flex flex-col gap-5 items-center justify-center"
                style={{
                    background: "var(--secondary)",
                }}
            >
            </div>

        </div>
    );
}

export default Cartier;
