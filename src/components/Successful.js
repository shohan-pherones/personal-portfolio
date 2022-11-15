import { useRef } from "react";
import { useGsapStagger } from "../lib/gsap";

const Successful = () => {
  const st1 = useRef(null);
  const st2 = useRef(null);
  const st3 = useRef(null);

  const stArr = [st1, st2, st3];

  useGsapStagger(stArr);

  return (
    <>
      <div className="not-found container mx-auto min-h-screen mt-20 section-title flex flex-col gap-10">
        <h2 ref={st1}>Message</h2>
        <h2 className="flex gap-10" ref={st2}>
          was <span className="text-cyan-400">sent</span>
        </h2>
        <h2 ref={st3}>successfully</h2>
      </div>
    </>
  );
};

export default Successful;
