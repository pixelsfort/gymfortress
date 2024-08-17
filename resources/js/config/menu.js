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
