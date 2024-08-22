import React from "react";

const PageTitle = ({ title, children }) => {
    return (
        <div className="mb-7 flex flex-wrap">
            {title && <h1 className="flex-1 text-xl font-medium">{title}</h1>}
            {children}
        </div>
    );
};

export default PageTitle;
