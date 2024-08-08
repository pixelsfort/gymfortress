import { ScrollArea } from "../ui/scroll-area";
import ApplicationLogo from "../Logo/ApplicationLogo";

const AdminSidebar = () => {
    return (
        <div
            id="app-sidebar"
            className="fixed bottom-0 left-0 top-0 w-[280px] rounded-none border-r border-r-border bg-card transition-transform xl:rounded-md"
        >
            <div className="max-h-[60px] border-b border-b-border p-6">
                <ApplicationLogo />
            </div>
            <ScrollArea>
                <h1>Menu Goes Here</h1>
            </ScrollArea>
        </div>
    );
};

export default AdminSidebar;
