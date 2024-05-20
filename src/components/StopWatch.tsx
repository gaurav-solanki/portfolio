import { useRef, useState } from "react";
import { BoxesCore } from "./UI/background-boxes";

const StopWatch = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | undefined>();

  const increseCounter = () => {
    setCount((prev) => prev + 1);
  };

  const resetCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCount(0);
    setIsRunning(false);
  };

  const startStopCounter = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(increseCounter, 1000);
      setIsRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center relative z-10  min-h-[calc(100%_-_80px)] overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BoxesCore />
      <div className="flex gap-4 flex-col shadow-sm border-2 border-gray-400  dark:border-gray-500 p-6 rounded-md bg-white dark:bg-gray-800 relative z-20">
        <h1 className="text-5xl text-primary-100 dark:text-primary-50 font-semibold mb-4 uppercase">
          Stop watch
        </h1>
        <div className="bg-gray-100 p-5 border-2 border-gray-400 rounded text-3xl text-center mb-4 text-gray-600 dark:bg-gray-700 dark:text-white dark:border-gray-500">
          {formatTime(count)}
        </div>
        <div className="flex gap-4 w-full justify-between">
          <button className="btn-primary w-full" onClick={startStopCounter}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="btn-primary w-full" onClick={resetCounter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;