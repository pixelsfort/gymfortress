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
            href: "/dashboard",
        },
        {
            title: "Gym",
            icon: Gym,
            href: "/gym",
        },
        {
            title: "Members",
            icon: Members,
            href: "#",
            child: [
                {
                    title: "All Members (Trainees)",
                    icon: "",
                    href: "/",
                },
                {
                    title: "Add Members (Trainee)",
                    icon: "",
                    path: "/",
                },
                {
                    title: "Dropped Members",
                    icon: "",
                    path: "/",
                },
            ],
        },
        {
            title: "Business",
            icon: Business,
            href: "/",
        },
        {
            title: "Message",
            icon: Message,
            href: "/",
        },
        {
            title: "Settings",
            icon: Settings,
            href: "/",
        },
    ],
};
