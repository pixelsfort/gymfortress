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
            <div className="border-default-200 dark:border-default-300 pointer-events-auto relative z-20 flex h-full w-[72px] flex-col border-r border-dashed bg-card transition-all duration-300">
                <div className="max-h-[60px] p-6">
                    <ApplicationLogo className="max-w-[60px]" />
                </div>

                <ScrollArea className="h-[100vh] bg-red-50 p-4">
                    <ul>
                        {menus.map((item, index) => {
                            return (
                                <li key={index}>
                                    {!item.child && (
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
