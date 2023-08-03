import React, { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(preferredTheme || (userPrefersDark ? "dark" : "light"));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  document.documentElement.classList.remove("dark");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  return (
    <div className="grid place-items-center">
      <div className="dark-mode" onClick={() => toggleTheme()}>
        <span
          className={`material-icons-sharp ${theme === "light" && "active"}`}
        >
          light_mode
        </span>
        <span
          className={`material-icons-sharp ${theme === "dark" && "active"}`}
        >
          dark_mode
        </span>
      </div>
    </div>
  );
};

export default Darkmode;
