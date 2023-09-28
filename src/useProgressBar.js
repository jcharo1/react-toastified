// useProgressBar.js
import { useState, useEffect } from "react";

export const useProgressBar = (duration) => {
  const [progress, setProgress] = useState(100); // initial progress is 100%

  useEffect(() => {
    let interval;
    if (duration) {
      const step = 100 / (duration / 100); // determine step size for progress decrement
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress - step;
          if (nextProgress <= 0) {
            clearInterval(interval); // clear interval when progress reaches 0
            return 0;
          }
          return nextProgress;
        });
      }, 100); // update every 100ms
    }
    return () => {
      clearInterval(interval); // clear interval when component unmounts
    };
  }, [duration]);

  return progress;
};
