import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f5d0fe] to-[#ffe4e6] dark:from-[#0f172a] dark:via-[#1e1b4b] dark:to-[#312e81] transition-all">
      <ThemeToggle />
      <Home />
      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 py-6 mt-10">
        Made with ❤️ using React + Tailwind + Imgflip API
      </footer>
    </div>
  );
}

export default App;
