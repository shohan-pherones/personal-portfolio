import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeadlineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

export const useImageScaler = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
        delay: delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useLinkRaster = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useBioReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useSocialBoxReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.2,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

export const useProjectLeftRightReaveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useSkillLineReveal = (items, delay = 0) => {
  useEffect(() => {
    items.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [items, delay]);
};

export const useSkillInfoReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el, delay]);
};

export const useFooterReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

export const useInputsReaveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
