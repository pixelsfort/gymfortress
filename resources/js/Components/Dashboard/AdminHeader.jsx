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
} from "@/Components/ui/dialog";
import SearchBox from "./SearchBox";
import Language from "./Language";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

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
                        {/* Theme Switcher Light/Dark */}
                        <ThemeButton />

                        {/* Language Switcher */}
                        <Language />

                        <button className="relative inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-base font-semibold ring-offset-background transition-colors hover:bg-primary/20 hover:text-primary focus-visible:outline-none focus-visible:ring-0">
                            <MdOutlineNotificationsActive className="h-6 w-6" />
                            <div className="absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                6
                            </div>
                        </button>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                asChild
                                className="cursor-pointer"
                            >
                                <div className="flex items-center space-x-3">
                                    <Avatar>
                                        <AvatarImage src="/images/user-avatar.webp" />
                                        <AvatarFallback>MA</AvatarFallback>
                                    </Avatar>
                                    <div className="hidden flex-none items-center overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal text-zinc-600 dark:text-primary-foreground lg:flex">
                                        <span className="block w-[85px] overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span className="block overflow-hidden text-ellipsis">
                                                Mottasin Leemon
                                            </span>
                                            <span className="block overflow-hidden text-ellipsis text-xs text-zinc-300">
                                                leemon@mottasin
                                            </span>
                                        </span>
                                        <span className="ml-1 inline-block text-base">
                                            <ChevronDown
                                                absoluteStrokeWidth
                                                className="h-5 w-5"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <Link
                                        href={route("profile.edit")}
                                        className="cursor-pointer"
                                    >
                                        <DropdownMenuItem className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize dark:hover:bg-background">
                                            <Icon
                                                icon="heroicons:user"
                                                className="h-4 w-4"
                                            />
                                            Profile
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            Invite users
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    Email
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Message
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    More...
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        New Team
                                        <DropdownMenuShortcut>
                                            ⌘+T
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem disabled>
                                    API
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="cursor-pointer"
                                    >
                                        <DropdownMenuItem className="text-default-600 flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm font-medium capitalize dark:hover:bg-background">
                                            <Icon
                                                icon="heroicons-outline:logout"
                                                className="h-4 w-4"
                                            />
                                            Logout
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
