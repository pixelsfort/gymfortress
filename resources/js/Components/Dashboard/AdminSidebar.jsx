import { ScrollArea } from "@radix-ui/react-scroll-area";
import ApplicationLogo from "../Logo/ApplicationLogo";
import { menusConfig } from "@/config/menu";
import SingleMenuItem from "./SingleMenuItem";
const menus = menusConfig?.sidebarNav || [];

const AdminSidebar = () => {
    return (
        <div
            id="app-sidebar"
            className="fixed bottom-0 left-0 top-0 w-[280px] rounded-none border-r border-r-border bg-card transition-transform xl:rounded-md"
        >
            <div className="max-h-[60px] border-b border-b-border p-6">
                <ApplicationLogo className="max-w-[100px]" />
            </div>

            <ScrollArea className="h-[100vh] px-4">
                <ul>
                    {menus.map((item, index) => {
                        return (
                            <li key={index}>
                                {!item.child && <SingleMenuItem item={item} />}
                            </li>
                        );
                    })}
                </ul>
            </ScrollArea>
        </div>
    );
};

export default AdminSidebar;
