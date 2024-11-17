import { ThemeContext } from "@/Context/ThemeContext";
import React, { useContext } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-base font-semibold ring-offset-background transition-colors hover:bg-primary/20 hover:text-primary focus-visible:outline-none focus-visible:ring-0"
        >
            {theme === "light" ? <PiSunDuotone /> : <PiMoonDuotone />}
        </button>
    );
};

export default ThemeButton;
