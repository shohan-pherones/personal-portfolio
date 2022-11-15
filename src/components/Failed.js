import { useRef } from "react";
import { useGsapStagger } from "../lib/gsap";

const Failed = () => {
  const ft1 = useRef(null);
  const ft2 = useRef(null);
  const ft3 = useRef(null);

  const ftArr = [ft1, ft2, ft3];

  useGsapStagger(ftArr);

  return (
    <>
      <div className="not-found container mx-auto min-h-screen mt-20 section-title flex flex-col gap-10">
        <h2 ref={ft1}>Message</h2>
        <h2 className="flex gap-10" ref={ft2}>
          was <span className="text-rose-400">sent</span>
        </h2>
        <h2 ref={ft3}>failed</h2>
      </div>
    </>
  );
};

export default Failed;
