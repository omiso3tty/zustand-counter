import React from "react";
import useStore from "../store/useStore";

const Counter: React.FC = () => {
  const { count, increment, reset } = useStore();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold">カウンター: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          加算
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          リセット
        </button>
      </div>
    </div>
  );
};

export default Counter;
