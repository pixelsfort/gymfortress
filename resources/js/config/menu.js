import {
    Home,
    Gym,
    Members,
    Business,
    Message,
    Settings,
    Dashboard,
    Membership,
    Billing,
    Trainer,
} from "@/Components/svg";

export const menusConfig = {
    sidebarNav: [
        {
            title: "Home",
            icon: Home,
            href: "/dashboard",
            child: [
                {
                    title: "Dashboard",
                    icon: Dashboard,
                    href: "/dashboard",
                },
                {
                    title: "Business Details",
                    icon: Business,
                    href: "",
                },
                {
                    title: "Staff/Trainer",
                    icon: Members,
                    href: "/trainers",
                },
            ],
        },
        {
            title: "Trainers",
            icon: Trainer,
            child: [
                {
                    title: "All Trainers",
                    icon: Members,
                    href: "/members",
                },
                {
                    title: "Add New Trainer",
                    icon: Members,
                    href: "/add-member",
                },
                {
                    title: "Dropped Trainer",
                    icon: Members,
                    href: "/dropped-members",
                },
            ],
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
            title: "Membership",
            icon: Membership,
            child: [
                {
                    title: "All Membership",
                    icon: Members,
                    href: "/membership",
                },
            ],
        },
        {
            title: "Billing",
            icon: Billing,
        },
        {
            title: "Message",
            icon: Message,
        },
    ],
};
