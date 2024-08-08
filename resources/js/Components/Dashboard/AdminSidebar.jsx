import { ScrollArea } from "../ui/scroll-area";

const AdminSidebar = () => {
    return (
        <div
            id="app-sidebar"
            className="fixed bottom-0 left-0 top-0 w-[280px] rounded-none bg-card transition-transform xl:rounded-md"
        >
            <ScrollArea>
                <h1>Menu Goes Here</h1>
            </ScrollArea>
        </div>
    );
};

export default AdminSidebar;
