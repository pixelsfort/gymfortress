import { ScrollArea } from "@radix-ui/react-scroll-area";
import ApplicationLogo from "../Logo/ApplicationLogo";
import { menusConfig } from "@/config/menu";
import SingleMenuItem from "./SingleMenuItem";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/Context/SidebarContext";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
const menus = menusConfig?.sidebarNav || [];

const AdminSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [currentSubMenu, setCurrentSubMenu] = useState([]);
    const [seubMenu, setSubmenu] = useState(true);
    const [collapsed, setCollapsed] = useState(true);

    const { isSidebarOpen } = useContext(SidebarContext);

    console.log(currentSubMenu);

    useEffect(() => {}, []);

    const toggleSubMenu = (index) => {
        setActiveIndex(index);
        if (menus[index].child) {
            setCurrentSubMenu(menus[index].child);
            setSubmenu(false);
            setCollapsed(false);
        } else {
            setSubmenu(true);
            setCollapsed(true);
        }
    };

    const getMenuTitle = () => {
        if (activeIndex !== null) {
            return menus[activeIndex].title;
        }
        return "";
    };

    return (
        <aside
            id="app-sidebar"
            className="main-sidebar pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10 print:hidden"
        >
            <div className="pointer-events-auto relative z-20 flex h-full w-[72px] flex-col border-r border-dashed bg-white transition-all duration-300">
                <div className="max-h-[72px] p-4">
                    <ApplicationLogo className="h-8 w-8 text-primary" />
                </div>

                <ScrollArea className="flex h-[100vh] justify-center pt-2">
                    <ul className="flex flex-col items-center gap-2">
                        {menus.map((item, i) => {
                            return (
                                <li key={i} onClick={() => toggleSubMenu(i)}>
                                    {item.title && (
                                        <SingleMenuItem item={item} />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </ScrollArea>
            </div>

            {/* Submenus */}
            <div
                className={cn(
                    "pointer-events-auto relative z-10 flex h-full w-[228px] flex-col border-r bg-card transition-all duration-300",
                    { "translate-x-[calc(-100%_-_72px)]": isSidebarOpen },
                )}
            >
                <h1 className="sticky top-0 z-50 flex items-center gap-4 bg-transparent px-4 py-4 text-lg font-semibold capitalize">
                    {getMenuTitle()}
                </h1>
                <div className="relative h-[calc(100%-40px)] grow overflow-hidden">
                    <ScrollArea className="h-full w-full rounded-[inherit]">
                        <div className="px-4">
                            <ul className="grid gap-3">
                                {currentSubMenu.map((childItem, j) => {
                                    return (
                                        <li key={j}>
                                            <Link className="text-sm font-normal text-muted-foreground">
                                                {childItem.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
