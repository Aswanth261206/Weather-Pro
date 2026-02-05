import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import WeatherDetails from "./components/WeatherDetails";
import WeatherHistory from "./components/WeatherHistory";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    document.body.style.background = !isDarkMode 
      ? "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" 
      : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)";
  };

  return (
    <Router>
      <div style={{ 
        background: isDarkMode 
          ? "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" 
          : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s ease"
      }}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<SearchPage isDarkMode={isDarkMode} />} />
            <Route path="/weather" element={<WeatherDetails isDarkMode={isDarkMode} />} />
            <Route path="/history" element={<WeatherHistory isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
