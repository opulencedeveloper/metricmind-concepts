"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPAnimations() {
  useEffect(() => {
    // Animate numbers/counters if any
    gsap.utils.toArray(".animate-number").forEach((element: any) => {
      const endValue = parseInt(element.getAttribute("data-end") || "0");
      gsap.fromTo(
        element,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Parallax effect for sections
    gsap.utils.toArray(".parallax-bg").forEach((element: any) => {
      gsap.to(element, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Split text animation
    gsap.utils.toArray(".split-text").forEach((element: any) => {
      const text = element.textContent;
      element.innerHTML = text
        .split("")
        .map((char: string) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      gsap.fromTo(
        element.querySelectorAll(".char"),
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

