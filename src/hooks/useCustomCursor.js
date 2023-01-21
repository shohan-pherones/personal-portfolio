import { useEffect } from "react";

export const useCustomCursor = (innerCursor, outerCursor) => {
  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursor.current.style.left = `${x}px`;
      innerCursor.current.style.top = `${y}px`;
      outerCursor.current.style.left = `${x}px`;
      outerCursor.current.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll("a"));

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        innerCursor.current.classList.add("grow");
      });

      link.addEventListener("mouseleave", () => {
        innerCursor.current.classList.remove("grow");
      });
    });
  }, [innerCursor, outerCursor]);
};
