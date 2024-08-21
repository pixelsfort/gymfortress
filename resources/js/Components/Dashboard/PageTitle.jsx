import React from "react";
import {
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";

const PageTitle = ({ title }) => {
    return (
        <div className="mb-7 flex flex-wrap">
            <div className="flex-1 text-xl font-medium">{title}</div>
            <BreadcrumbList>
                <BreadcrumbItem>Members</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Add New Member</BreadcrumbItem>
            </BreadcrumbList>
        </div>
    );
};

export default PageTitle;
