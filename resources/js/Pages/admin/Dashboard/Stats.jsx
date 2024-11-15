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
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const Stats = () => {
    const data = [
        {
            text: "Total Sales",
            total: "42,750.98",
            color: "primary",
            icon: <Home className="h-3.5 w-3.5" />,
        },
        {
            text: "Today Orders",
            total: "536,23,3",
            color: "primary",
            icon: <Home className="h-3.5 w-3.5" />,
        },
        {
            text: "Completed Orders",
            total: "234,1",
            color: "primary",
            icon: <Home className="h-3.5 w-3.5 text-white" />,
        },
        {
            text: "Pending Orders",
            total: "332,34",
            color: "primary",
            icon: <Home className="h-3.5 w-3.5 text-white" />,
        },
    ];
    return (
        <>
            {data.map((item, index) => (
                <div
                    key={`reports-state-${index}`}
                    className={cn(
                        "relative flex flex-col items-start gap-1.5 overflow-hidden rounded-sm bg-primary/10 p-4 before:absolute before:bottom-1 before:left-1/2 before:hidden before:h-[2px] before:w-9 before:-translate-x-1/2 before:bg-primary/50 dark:before:bg-primary-foreground",
                        {
                            "bg-primary/40 dark:bg-primary/70":
                                item.color === "primary",
                            "bg-orange-50 dark:bg-orange-500":
                                item.color === "warning",
                            "bg-green-50 dark:bg-green-500":
                                item.color === "success",
                            "bg-red-50 dark:bg-red-500":
                                item.color === "destructive",
                        },
                    )}
                >
                    <span
                        className={cn(
                            "absolute -right-8 -top-8 h-[95px] w-[95px] rounded-full bg-primary/40 ring-[20px] ring-primary/30",
                            {
                                "bg-primary/50 ring-primary/20 dark:bg-primary dark:ring-primary/40":
                                    item.color === "primary",
                                "bg-orange-200 ring-orange-100 dark:bg-orange-300 dark:ring-orange-400":
                                    item.color === "warning",
                                "bg-green-200 ring-green-100 dark:bg-green-300 dark:ring-green-400":
                                    item.color === "success",
                                "bg-red-200 ring-red-100 dark:bg-red-300 dark:ring-red-400":
                                    item.color === "destructive",
                            },
                        )}
                    ></span>
                    <div
                        className={`grid h-8 w-8 place-content-center rounded-full border border-dashed border-${item.color} dark:border-primary-foreground/60`}
                    >
                        <span
                            className={cn(
                                `grid h-6 w-6 place-content-center rounded-full bg-${item.color}`,
                                {
                                    "dark:bg-[#EFF3FF]/30":
                                        item.color === "primary",
                                    "dark:bg-[#FFF7ED]/30":
                                        item.color === "warning",
                                    "dark:bg-[#ECFDF4]/30":
                                        item.color === "success",
                                    "dark:bg-[#FEF2F2]/30":
                                        item.color === "destructive",
                                },
                            )}
                        >
                            {item.icon}
                        </span>
                    </div>
                    <span className="text-default-800 relative z-10 mt-3 text-sm font-medium capitalize dark:text-primary-foreground">
                        {" "}
                        {item.text}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-default-900 text-lg font-semibold dark:text-primary-foreground">
                            {item.total}
                        </span>
                        <Icon
                            icon="heroicons:arrow-trending-up"
                            className={`h-5 w-5 text-${item.color} dark:text-primary-foreground`}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Stats;
