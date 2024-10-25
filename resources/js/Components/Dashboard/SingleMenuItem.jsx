import { SidebarContext } from "@/Context/SidebarContext";
import { Link, usePage } from "@inertiajs/react";
import { useContext, useState } from "react";

function SingleMenuItem({ item }) {
    const { title, href } = item;
    const { openSidebar } = useContext(SidebarContext);

    const currentPath = window.location.pathname;
    return (
        <div
            className={`group flex h-[56px] w-[56px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded p-4`}
            onClick={openSidebar}
        >
            <span
                className={`inline-flex items-center justify-center rounded px-3 py-2 group-hover:bg-primary group-hover:text-primary-foreground ${currentPath === item.href ? "bg-primary" : ""}`}
            >
                <item.icon
                    className={`h-5 w-5 ${currentPath === item.href ? "text-white" : ""} `}
                />
            </span>
            <span
                className={`text-[10px] font-semibold group-hover:text-primary ${currentPath === item.href ? "text-primary" : ""}`}
            >
                {title}
            </span>
        </div>
    );
}

export default SingleMenuItem;
