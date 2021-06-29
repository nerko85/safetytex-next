import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

export default function CounterItem({ from, to, aditional = "" }) {
  const nodeRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed() + aditional;
        },
      });
    return () => controls.stop();
  }, [from, to, inView]);

  return (
    <div ref={ref}>
      <span ref={nodeRef} />
    </div>
  );
}