import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Dropdown from "../Dropdown/Dropdown";

const AdminHeader = ({ user, header, children }) => {
    return (
        <header id="header" className="sticky top-0 z-50 xl:ml-[300px]">
            <div className="w-full border-b bg-card/90 px-[15px] py-3 backdrop-blur-lg md:px-6">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-6">
                        <RiMenu2Line className="h-6 w-6 cursor-pointer" />
                        <h1>Header</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="hover:bg-default-100 dark:hover:bg-default-200 data-[state=open]:bg-default-100 dark:data-[state=open]:bg-default-200 text-default-500 dark:text-default-800 relative inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-sm font-semibold ring-offset-background transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 md:h-9 md:w-9">
                            <MdOutlineNotificationsActive className="h-6 w-6" />
                            <div className="absolute bottom-[calc(100%-16px)] left-[calc(100%-18px)] inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent bg-primary p-0 text-xs font-medium text-primary-foreground ring-2 ring-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                6
                            </div>
                        </button>
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
