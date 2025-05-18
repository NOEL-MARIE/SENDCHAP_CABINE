'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Loader = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Initial state
    gsap.set(svg, {
      opacity: 1,
      rotation: -20,
      transformOrigin: "center center"
    });

    const lines = gsap.utils.toArray("g.left", svg);

    const tl = gsap.timeline({ paused: false });

    tl.from(
      lines,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.06
      },
      0
    )
      .from(
        gsap.utils.toArray(".cross", svg),
        {
          rotation: -800,
          opacity: 0,
          scale: 0,
          transformOrigin: "center center",
          ease: "expo.out",
          stagger: 0.01
        },
        0
      )
      .from(
        gsap.utils.toArray(".left", svg),
        {
          xPercent: -20,
          duration: 1.2,
          ease: "expo.out"
        },
        0
      )
      .from(
        gsap.utils.toArray(".right", svg),
        {
          xPercent: 20,
          duration: 1.2,
          ease: "expo.out"
        },
        0
      )
      .to(
        gsap.utils.toArray(".cross", svg),
        {
          rotation: 360,
          opacity: 0,
          transformOrigin: "center center",
          ease: "expo.out",
          stagger: {
            from: "center",
            amount: 0.3
          }
        },
        1.5
      )
      .to(
        gsap.utils.toArray(".webflow", svg),
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center",
          duration: 0.3,
          stagger: {
            from: "end",
            amount: 0.4
          }
        },
        1.5
      )
      .to(
        gsap.utils.toArray(".gsap", svg),
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center",
          duration: 0.3,
          stagger: {
            from: "start",
            amount: 0.4
          }
        },
        1.5
      );

    // Replay on click
    const handleClick = () => {
      tl.timeScale(0.7).play(0);
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
      tl.kill();
    };
  }, []);

  return (
    <>
  <svg
    width="600"
    height="120"
    viewBox="0 0 600 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', margin: '0 auto' }}
  >
    <style>
      {`
        .letter {
          stroke: #4a00e0;
          stroke-width: 2.5;
          fill: transparent;
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 1.5s forwards;
        }
        .letter2 {
          animation-delay: 0.8s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
            fill: #4a00e0;
          }
        }
      `}
    </style>
    <text
      x="30"
      y="80"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="60"
      className="letter"
    >
      DE
    </text>
    <text
      x="160"
      y="80"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="60"
      className="letter letter2"
    >
      GONZAGUE
    </text>
  </svg>
    </>
  );
};

export default Loader;
