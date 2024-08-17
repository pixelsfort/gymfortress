import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const openSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <SidebarContext.Provider
            value={{ isSidebarOpen, toggleSidebar, openSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
