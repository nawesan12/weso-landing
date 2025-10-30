"use client";

import { useEffect } from "react";

export function useInteractiveExperience() {
    useEffect(() => {
        const cursor = document.querySelector<HTMLDivElement>(".cursor");
        const hoverElements = Array.from(
            document.querySelectorAll<HTMLElement>("[data-cursor-hover]")
        );
        const pointerElements = Array.from(
            document.querySelectorAll<HTMLElement>("[data-cursor-pointer]")
        );
        const animatedElements = Array.from(
            document.querySelectorAll<HTMLElement>("[data-animate]")
        );
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const hoverCleanups: Array<() => void> = [];
        const pointerCleanups: Array<() => void> = [];
        let handleMouseMove: ((event: MouseEvent) => void) | null = null;
        let observer: IntersectionObserver | null = null;

        if (cursor) {
            handleMouseMove = (event: MouseEvent) => {
                cursor.style.left = `${event.clientX}px`;
                cursor.style.top = `${event.clientY}px`;
            };

            window.addEventListener("mousemove", handleMouseMove);

            hoverElements.forEach((element) => {
                const onEnter = () => cursor.classList.add("hover");
                const onLeave = () => cursor.classList.remove("hover");
                element.addEventListener("mouseenter", onEnter);
                element.addEventListener("mouseleave", onLeave);
                hoverCleanups.push(() => {
                    element.removeEventListener("mouseenter", onEnter);
                    element.removeEventListener("mouseleave", onLeave);
                });
            });

            pointerElements.forEach((element) => {
                const onEnter = () => cursor.classList.add("pointer");
                const onLeave = () => cursor.classList.remove("pointer");
                element.addEventListener("mouseenter", onEnter);
                element.addEventListener("mouseleave", onLeave);
                pointerCleanups.push(() => {
                    element.removeEventListener("mouseenter", onEnter);
                    element.removeEventListener("mouseleave", onLeave);
                });
            });
        }

        if (prefersReducedMotion.matches) {
            animatedElements.forEach((element) =>
                element.classList.add("is-visible")
            );
        } else if (
            animatedElements.length > 0 &&
            typeof window !== "undefined" &&
            "IntersectionObserver" in window
        ) {
            observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            obs.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.15,
                    rootMargin: "0px 0px -5% 0px",
                }
            );

            animatedElements.forEach((element) => observer?.observe(element));
        }

        return () => {
            if (handleMouseMove) {
                window.removeEventListener("mousemove", handleMouseMove);
            }

            hoverCleanups.forEach((cleanup) => cleanup());
            pointerCleanups.forEach((cleanup) => cleanup());
            observer?.disconnect();
            cursor?.classList.remove("hover");
            cursor?.classList.remove("pointer");
        };
    }, []);
}
