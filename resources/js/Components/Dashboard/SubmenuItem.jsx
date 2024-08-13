import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import NavLink from "../Menu/NavLink";

function SidebarMenuItem({ item }) {
    const { url } = usePage();

    const [isVisibleSubmenu, setIsVisibleSubmenu] = useState(false);
    const [activeNav, setActiveNav] = useState(false);

    const toggleVisibility = () => {
        setIsVisibleSubmenu(!isVisibleSubmenu);
    };

    if (item.submenus) {
        return (
            <>
                <li>
                    <div
                        className={`panel-title ${isVisibleSubmenu ? "bg-primary text-primary-foreground" : ""} group flex cursor-pointer rounded px-[10px] py-3 text-sm font-medium capitalize transition-all duration-100 hover:bg-primary hover:text-primary-foreground`}
                        onClick={toggleVisibility}
                    >
                        <div className="flex flex-1 items-start gap-3">
                            <span className="inline-flex items-center text-lg">
                                {item.icon}
                            </span>
                            <div className=" ">{item.name}</div>
                        </div>
                        <div className="flex-0">
                            <div
                                className={`panel-title-chevron text-default-500 flex items-center justify-center rounded-full text-base transition-all duration-300 group-hover:text-primary-foreground ${isVisibleSubmenu ? "rotate-90" : ""}`}
                            >
                                <HiOutlineChevronRight />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`panel-submenu-wrapper max-h-0 overflow-hidden transition-all duration-700 ${isVisibleSubmenu ? "max-h-max duration-1000" : ""} `}
                    >
                        <div className="CollapsibleContent">
                            <ul className="sub-menu relative space-y-4 before:absolute before:left-4 before:top-0 before:h-[calc(100%-4px)] before:w-[3px] before:rounded before:bg-primary/10">
                                {item.submenus.map((submenu, index) => {
                                    return (
                                        <li
                                            onClick={() => {}}
                                            key={index}
                                            className={`relative block pl-9 before:absolute before:left-4 before:top-0 before:w-[3px] first:pt-4 first:before:top-4 last:pb-4 ${
                                                route().current(submenu.path)
                                                    ? "before:h-full before:bg-primary first:before:h-[calc(100%-16px)]"
                                                    : ""
                                            } `}
                                        >
                                            <NavLink
                                                href={submenu.path}
                                                active={route().current(
                                                    submenu.path,
                                                )}
                                            >
                                                {submenu.name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </li>
            </>
        );
    } else {
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
                                    {item.icon}
                                </span>
                                <div className="">{item.name}</div>
                            </div>
                        </div>
                    </Link>
                </li>
            </>
        );
    }
}

export default SidebarMenuItem;
