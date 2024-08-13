import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function SingleMenuItem({ item }) {
    return (
        <>
            <Link href={item.path || "#"}>
                <div
                    className={`${
                        route().current(item.path)
                            ? "bg-primary text-primary-foreground"
                            : "bg-transparent"
                    } group flex cursor-pointer rounded transition-all duration-100 hover:bg-primary hover:text-primary-foreground`}
                >
                    <div className="flex h-12 w-12 flex-1 flex-col items-start justify-center gap-1">
                        <span className="inline-flex items-center">icon</span>
                        <span className="text-xs font-normal">
                            {item.title}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SingleMenuItem;
