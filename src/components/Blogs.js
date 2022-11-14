import { useRef } from "react";
import { useGsapStagger } from "../lib/gsap";

const Blogs = () => {
  const bt1 = useRef(null);
  const bt2 = useRef(null);
  const bt3 = useRef(null);

  const btArr = [bt1, bt2, bt3];

  useGsapStagger(btArr);

  return (
    <>
      <div className="not-found container mx-auto min-h-screen mt-20 section-title flex flex-col gap-10">
        <h2 ref={bt1}>Blogs</h2>
        <h2 className="flex gap-10" ref={bt2}>
          Are <span className="text-cyan-400">Coming</span>
        </h2>
        <h2 ref={bt3}>Soon</h2>
      </div>
    </>
  );
};

export default Blogs;
