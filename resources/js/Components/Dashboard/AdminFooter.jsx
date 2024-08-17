import { Link } from "@inertiajs/react";
import React from "react";

const AdminFooter = () => {
    return (
        <div className="relative border-t bg-card px-6 py-4 xl:ml-[300px]">
            <div className="block text-muted-foreground md:flex md:justify-between">
                <p className="text-xs sm:mb-0 md:text-sm">
                    Copyright © 2024 GymFortress All rights Reserved
                </p>
                <p className="mb-0 text-xs md:text-sm">
                    Developed by{" "}
                    <a
                        href="https://pixelsfort.com"
                        className="text-primary"
                        target="_blank"
                    >
                        PixelsFort
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminFooter;
