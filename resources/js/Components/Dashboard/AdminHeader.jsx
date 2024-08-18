import { SidebarContext } from "@/Context/SidebarContext";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import {
    TbLayoutSidebarRightCollapseFilled,
    TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";
import Dropdown from "../Dropdown/Dropdown";
import ThemeButton from "./ThemeButton";
import { Button } from "../ui/button";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTrigger,
} from "../ui/alert-dialog";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import SearchBox from "./SearchBox";

const AdminHeader = ({ user, header, children }) => {
    const { toggleSidebar } = useContext(SidebarContext);
    const { isSidebarOpen } = useContext(SidebarContext);

    return (
        <header
            id="header"
            className={cn("sticky top-0 z-50", {
                "xl:ml-[300px]": !isSidebarOpen,
                "xl:ml-[72px]": isSidebarOpen,
            })}
        >
            <div className="w-full border-b bg-card/90 px-[15px] py-3 backdrop-blur-lg md:px-6">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                        {isSidebarOpen ? (
                            <TbLayoutSidebarRightCollapseFilled
                                className="h-7 w-7 cursor-pointer opacity-65 hover:opacity-100"
                                onClick={toggleSidebar}
                            />
                        ) : (
                            <TbLayoutSidebarRightExpandFilled
                                className="h-7 w-7 cursor-pointer opacity-65 hover:opacity-100"
                                onClick={toggleSidebar}
                            />
                        )}
                        <div className="mt-1">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                                        <FiSearch className="text-lg" />
                                        <span className="hidden font-medium md:block">
                                            Search..
                                        </span>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="top-20">
                                    <DialogTitle className="hidden">
                                        Search
                                    </DialogTitle>
                                    <DialogDescription className="hidden"></DialogDescription>
                                    <DialogDescription asChild>
                                        <SearchBox />
                                    </DialogDescription>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 md:h-9 md:w-9">
                            <MdOutlineNotificationsActive className="h-6 w-6" />
                            <div className="absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                6
                            </div>
                        </button>
                        <ThemeButton />
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                    >
                                        {/* {user.name} */}
                                        Username
                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
