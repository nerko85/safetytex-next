import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function CounterItem({ from, to, aditional = "" }) {
  const nodeRef = useRef();
  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed() + aditional;
      },
    });

    return () => controls.stop();
  }, [from, to]);
  return <span ref={nodeRef} />;
}
