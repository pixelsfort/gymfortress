import {
    Home,
    Gym,
    Members,
    Business,
    Message,
    Settings,
} from "@/Components/svg";

export const menusConfig = {
    sidebarNav: [
        {
            title: "Home",
            icon: Home,
        },
        {
            title: "Gym",
            icon: Gym,
        },
        {
            title: "Members",
            icon: Members,
            child: [
                {
                    title: "All Members",
                    icon: Members,
                    href: "/members",
                },
                {
                    title: "Add New Member",
                    icon: Members,
                    href: "/add-member",
                },
                {
                    title: "Dropped Members",
                    icon: Members,
                    href: "/dropped-members",
                },
            ],
        },
        {
            title: "Business",
            icon: Business,
            child: [
                {
                    title: "Reports",
                    icon: Business,
                    href: "/reports",
                },
            ],
        },
        {
            title: "Message",
            icon: Message,
        },
        {
            title: "Settings",
            icon: Settings,
        },
    ],
};
