import React from "react";

const InputIcon = ({ children }) => {
    return (
        <div className="flex items-center justify-center border border-input bg-background px-3 text-sm font-normal text-muted-foreground ring-primary transition duration-300 first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0 group-focus-within:border-primary">
            {children}
        </div>
    );
};

export default InputIcon;
