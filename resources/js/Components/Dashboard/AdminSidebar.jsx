import { ScrollArea } from "@radix-ui/react-scroll-area";
import ApplicationLogo from "../Logo/ApplicationLogo";
import { menusConfig } from "@/config/menu";
import SingleMenuItem from "./SingleMenuItem";
const menus = menusConfig?.sidebarNav || [];

const AdminSidebar = () => {
    return (
        <div
            id="app-sidebar"
            className="main-sidebar pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10 print:hidden"
        >
            <div className="border-default-200 dark:border-default-300 pointer-events-auto relative z-20 flex h-full w-[72px] flex-col bg-primary/5 transition-all duration-300">
                <div className="max-h-[72px] bg-primary p-4">
                    <ApplicationLogo className="h-8 w-8 text-white" />
                </div>

                <ScrollArea className="flex h-[100vh] justify-center pt-2">
                    <ul className="flex flex-col items-center gap-2">
                        {menus.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.title && (
                                        <SingleMenuItem item={item} />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </ScrollArea>
            </div>
            <div className="border-default-200 pointer-events-auto relative z-10 flex h-full w-[228px] flex-col border-r bg-card transition-all duration-300">
                <h1 className="text-default-700 sticky top-0 z-50 flex items-center gap-4 bg-transparent px-4 py-4 text-lg font-semibold capitalize">
                    Nested Menu
                </h1>
                <div className="relative h-[calc(100%-40px)] grow overflow-hidden">
                    <ScrollArea className="h-full w-full rounded-[inherit]">
                        <div className="px-4">
                            <ul>
                                {menus.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.child && (
                                                <h1>{item.child.title}</h1>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
