import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

export default function CounterItem({ from, to, aditional = "" }) {
  const nodeRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    const node = nodeRef.current;
    const controls =
      inView &&
      animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed() + aditional;
        },
      });
    return () => controls.stop();
  }, [from, to]);

  return (
    <div ref={ref}>
      <span ref={nodeRef} />
    </div>
  );
}

// const Component = () => {
//   return (
//     <div ref={ref}>
//       <h2>{`Header inside viewport ${inView}.`}</h2>
//     </div>
//   );
// };
