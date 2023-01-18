import { useEffect } from "react";

export const useCustomCursor = (innerCursor, outerCursor) => {
  useEffect(() => {
    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

      innerCursor.current.style.left = `${x}px`;
      innerCursor.current.style.top = `${y}px`;
      outerCursor.current.style.left = `${x}px`;
      outerCursor.current.style.top = `${y}px`;
    }

    document.addEventListener("mousemove", moveCursor);
  }, [innerCursor, outerCursor]);
};
