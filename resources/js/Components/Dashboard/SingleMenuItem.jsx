import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function SingleMenuItem({ item }) {
    return (
        <>
            <li>
                <Link href={item.path || "#"}>
                    <div
                        className={`${
                            route().current(item.path)
                                ? "bg-primary text-primary-foreground"
                                : "bg-transparent"
                        } group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground`}
                    >
                        <div className="flex flex-1 items-start gap-3">
                            <span className="inline-flex items-center text-lg">
                                icon
                            </span>
                            <div className="">{item.title}</div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default SingleMenuItem;
