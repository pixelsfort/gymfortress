import * as React from "react";
import { cn } from "@/lib/utils";
const InputGroup = React.forwardRef(({ className, merged, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "input-group group relative flex w-full flex-wrap items-stretch",
            className,
            {
                merged: merged,
            },
        )}
        {...props}
    />
));
InputGroup.displayName = "InputGroup";

const InputGroupButton = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "[&>*]:first:rounded-r-none [&>*]:last:rounded-l-none",
            className,
        )}
        {...props}
    />
));
InputGroupButton.displayName = "InputGroupButton";

const InputGroupText = React.forwardRef(
    ({ className, color, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "border-default-300 text-default-500 flex items-center justify-center border bg-background px-3 text-sm font-normal ring-primary transition duration-300 first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0 group-focus-within:border-primary",
                className,
                {
                    "border-info/50 group-focus-within:border-info-700 ring-info-700":
                        color === "info",
                    "group-focus-within:border-primary-700 ring-primary-700 border-primary/50":
                        color === "primary",
                    "border-success/50 group-focus-within:border-success-700 ring-success-700":
                        color === "success",
                    "group-focus-within:border-destructive-700 ring-destructive-700 border-destructive/50":
                        color === "destructive",
                    "border-warning/50 group-focus-within:border-warning-700 ring-warning-700":
                        color === "warning",
                },
            )}
            {...props}
        />
    ),
);
InputGroupText.displayName = "InputGroupText";

export { InputGroup, InputGroupButton, InputGroupText };
