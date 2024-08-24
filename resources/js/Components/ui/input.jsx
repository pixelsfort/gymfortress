import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "focus:border-1 flex w-full rounded-md rounded-l-none border border-l-0 border-input bg-background px-3 py-2 text-base ring-offset-background transition duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
