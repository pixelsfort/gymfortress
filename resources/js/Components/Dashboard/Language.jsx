import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HiMiniLanguage } from "react-icons/hi2";

const data = [
    {
        name: "En",
    },
    {
        name: "नेपा",
    },
];
const Language = () => {
    const [selected, setSelected] = useState(data[0]);
    const handleSelected = (data) => setSelected(data);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    type="button"
                    className="relative inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full bg-transparent text-base font-semibold ring-offset-background transition-colors hover:bg-primary/20 hover:text-primary focus-visible:outline-none focus-visible:ring-0"
                >
                    <span className="flex items-center gap-2 text-sm text-black">
                        <HiMiniLanguage className="text-xl" />
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2">
                {data.map((item, index) => (
                    <DropdownMenuItem
                        key={`flag-${index}`}
                        className={cn(
                            "mb-[2px] cursor-pointer px-2 py-1.5 last:mb-0 dark:hover:bg-background",
                            {
                                "bg-primary-100":
                                    selected && selected.name === item.name,
                            },
                        )}
                        onClick={() => handleSelected(item)}
                    >
                        <span className="text-default-600 text-sm">
                            {item.name}
                        </span>
                        {selected && selected.name === item.name && (
                            <Check className="text-default-700 ml-auto h-4 w-4 flex-none" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Language;
