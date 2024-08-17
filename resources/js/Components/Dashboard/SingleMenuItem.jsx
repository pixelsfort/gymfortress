import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function SingleMenuItem({ item }) {
    const { title, href } = item;

    const currentPath = window.location.pathname;
    console.log(currentPath);
    return (
        <>
            <Link href={href || "#"}>
                <div
                    className={`flex h-[56px] w-[56px] flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded p-4 hover:bg-primary hover:text-primary-foreground ${currentPath === item.href ? "bg-primary" : ""} `}
                >
                    <span className="inline-flex items-center">
                        <item.icon
                            className={`h-4 w-4 ${currentPath === item.href ? "text-white" : ""} `}
                        />
                    </span>
                    <span
                        className={`text-[10px] font-semibold ${currentPath === item.href ? "text-white" : ""}`}
                    >
                        {title}
                    </span>
                </div>
            </Link>
        </>
    );
}

export default SingleMenuItem;
