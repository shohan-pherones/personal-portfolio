import { useRef } from "react";
import { useGsapStagger } from "../lib/gsap";

const NotFound = () => {
  const nf1 = useRef(null);
  const nf2 = useRef(null);
  const nf3 = useRef(null);

  const nfArr = [nf1, nf2, nf3];

  useGsapStagger(nfArr);
  return (
    <>
      <div className="not-found container mx-auto min-h-screen mt-20 section-title flex flex-col gap-10">
        <h2 ref={nf1}>Page</h2>
        <h2 className="flex gap-10" ref={nf2}>
          <span className="text-cyan-400">404</span>
          <span>Not</span>
        </h2>
        <h2 ref={nf3}>Found</h2>
      </div>
    </>
  );
};

export default NotFound;
