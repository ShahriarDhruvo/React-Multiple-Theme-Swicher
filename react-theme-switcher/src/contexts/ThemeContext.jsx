import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    // Color State
    const [colorTheme, setColorTheme] = useState("theme-blue");

    // Save selected theme
    useEffect(() => {
        // Get selected theme
        const currentThemeColor = localStorage.getItem("theme-color");
        
        // Set selected value if found
        if (currentThemeColor) setColorTheme(currentThemeColor);
    }, []);

    // Set theme
    const handleTheme = (theme) => {
        setColorTheme(theme);
        localStorage.setItem("theme-color", theme);
    };

    return (
        <ThemeContext.Provider value={{ colorTheme, handleTheme }}>
            <div className={`App ${colorTheme}`}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
