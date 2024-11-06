import { SidebarContext } from "@/Context/SidebarContext";
import { cn } from "@/lib/utils";
import React, { Children, useContext } from "react";

const AdminMianWrap = ({ children }) => {
    const { isSidebarOpen } = useContext(SidebarContext);
    return (
        <main
            id="content-wrapper"
            className={cn(
                "min-h-[calc(100vh-140px)] transition-all duration-150",
                {
                    "xl:ml-[300px]": !isSidebarOpen,
                    "xl:ml-[72px]": isSidebarOpen,
                },
            )}
        >
            <div className="px-4 py-4 md:px-6 md:pt-6 2xl:mx-auto">
                {children}
            </div>
        </main>
    );
};

export default AdminMianWrap;
