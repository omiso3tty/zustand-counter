import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import useStore from "./store/useStore";

const App: React.FC = () => {
  const { isDarkMode } = useStore();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ThemeToggle />
      <Counter />
    </div>
  );
};

export default App;
