import React from "react";

const PageTitle = ({ title, children }) => {
    return (
        <div className="mb-7 flex flex-wrap">
            {title && (
                <h1 className="flex-1 text-2xl font-semibold leading-none tracking-tight">
                    {title}
                </h1>
            )}
            {children}
        </div>
    );
};

export default PageTitle;
