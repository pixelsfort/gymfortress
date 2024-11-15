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
                    className="bg-transparent hover:bg-transparent"
                >
                    <span className="text-sm text-black">
                        <HiMiniLanguage />
                        {selected ? selected.name : "En"}
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
