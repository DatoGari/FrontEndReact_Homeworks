import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useDetectDevice from "./hooks/useDetectDevice";

const ThemeToggle = () => {
  const device = useDetectDevice(); // 'MOBILE' or 'DESKTOP'
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // Force light theme on mobile
  useEffect(() => {
    if (device === "MOBILE" && theme !== "light") {
      setTheme("light");
    }
  }, [device, theme, setTheme]);

  const toggleTheme = () => {
    if (device === "DESKTOP") {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      {/* Show toggle button only on desktop */}
      {device === "DESKTOP" && (
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Toggle Theme
        </button>
      )}

      {/* Optional: show a message for mobile users */}
      {device === "MOBILE" && (
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Theme toggle is available on desktop only.
        </p>
      )}
    </div>
  );
};

export default ThemeToggle;