import React from "react";
import useStore from "../store/useStore";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 mb-4 border rounded transition duration-300 ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
      }`}
    >
      {isDarkMode ? "ライトモードに切替" : "ダークモードに切替"}
    </button>
  );
};

export default ThemeToggle;
