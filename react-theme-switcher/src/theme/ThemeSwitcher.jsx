import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
    const { colorTheme, handleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-options d-flex justify-content-around mx-auto mb-3">
            <div
                id="theme-white"
                onClick={() => handleTheme("theme-white")}
                className={`${colorTheme === "theme-white" ? "active" : ""}`}
            />
            <div
                id="theme-blue"
                onClick={() => handleTheme("theme-blue")}
                className={`${colorTheme === "theme-blue" ? "active" : ""}`}
            />
            <div
                id="theme-orange"
                onClick={() => handleTheme("theme-orange")}
                className={`${colorTheme === "theme-orange" ? "active" : ""}`}
            />
            <div
                id="theme-purple"
                onClick={() => handleTheme("theme-purple")}
                className={`${colorTheme === "theme-purple" ? "active" : ""}`}
            />
            <div
                id="theme-green"
                onClick={() => handleTheme("theme-green")}
                className={`${colorTheme === "theme-green" ? "active" : ""}`}
            />
            <div
                id="theme-black"
                onClick={() => handleTheme("theme-black")}
                className={`${colorTheme === "theme-black" ? "active" : ""}`}
            />
        </div>
    );
};

export default ThemeSwitcher;
