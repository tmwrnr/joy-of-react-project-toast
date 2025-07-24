import React from "react";

export function useKeyDown(key, cb) {
  React.useEffect(() => {
    const handleKey = (event) => {
      if (event.key === key) {
        cb();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [key, cb]);
}
