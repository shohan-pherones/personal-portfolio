import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHeadline = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: "-100vw" },
      {
        x: 0,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapLeftIn = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: "-100vw" },
      {
        x: 0,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapRightIn = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: "100vw" },
      {
        x: 0,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapDropping = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { y: "-200%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "sine",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapUpward = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapSidewalkRight = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: "100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "back",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapSidewalkLeft = (ref) => {
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { x: "-100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "back",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play",
        },
      }
    );
  }, [ref]);
};

export const useGsapStagger = (curEl) => {
  useEffect(() => {
    const el = curEl.map((el) => el.current);

    gsap.fromTo(
      [...el],
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "sine",
        stagger: 0.3,
        scrollTrigger: {
          trigger: [...el],
          toggleActions: "play",
        },
      }
    );
  }, [curEl]);
};
