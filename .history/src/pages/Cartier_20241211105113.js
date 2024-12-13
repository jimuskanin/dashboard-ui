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
    const rightCurtainRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const totalElements = 25;
    const elementsArr = useRef([]);
    const svgRef = useRef(null);

    // INITIALIZE CURTAIN ELEMENTS 
    const createElements = () => {
        const svg = svgRef.current;
        const winWidth = window.innerWidth;
        const winHeight = windowHeight;

        for (let i = 0; i < totalElements; i++) {
            const randCol = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;

            // CREATE GRADIENT FOR EACH CURTAIN ELEMENT 
            createGradient(svg, `grad${i}`, 'linearGradient', [
                { offset: '0%', 'stop-color': randCol, 'stop-opacity': '0' },
                { offset: '10%', 'stop-color': randCol },
                { offset: '50%', 'stop-color': randCol, 'stop-opacity': '0' },
                { offset: '90%', 'stop-color': randCol },
                { offset: '100%', 'stop-color': randCol, 'stop-opacity': '0' }
            ]);

            const item = createRectangle(i, winHeight);
            elementsArr.current.push(item);
            svg.appendChild(item);
            moveElement(item, i);
        }
    };

    // CREATE RECTANGLE WITH GRADIENT FILL 
    const createRectangle = (i, winHeight) => {
        const elem = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        elem.style.fill = `url(#grad${i})`;
        elem.setAttribute("width", Math.random() * 5 + 220);
        elem.setAttribute("height", winHeight + 200);
        gsap.set(elem, { x: Math.random() * 10 + i * 30, y: -100 });

        return elem;
    };

    CREATE SVG GRADIENT 

    useEffect(() => {
        if (!leftCurtainRef.current || !rightCurtainRef.current) {
            console.error("Curtain references are missing.");
            return;
        }

        // SCROLL-TRIGGERED OPENING ANIMATION 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: leftCurtainRef.current,
                start: "top top",
                end: "bottom top",
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
            </div>
        </div>
    );
}

export default Cartier;
