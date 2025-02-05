import React from "react";
import userAvatar from "../../../../../../public/images/user-avatar.webp";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "../../../../utils/axios";

const DataTable = () => {
    const fetchMembers = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/members");
        const memberData = response.json();
        return memberData;
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["members"],
        queryFn: fetchMembers,
    });

    console.log(data);

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableCaption>A list of Members</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Join Date</TableHead>
                            <TableHead>Biling Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={userAvatar}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div className="inline-flex flex-col items-start gap-2">
                                        <h2 className="text-base">
                                            Member Name
                                        </h2>
                                        <Badge className="inline-block">
                                            Active
                                        </Badge>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="inline-flex flex-col items-start gap-1">
                                    <a
                                        href="mailto:info@example.com"
                                        className="group"
                                    >
                                        <span className="flex items-center gap-1 text-sm underline-offset-2 group-hover:text-primary group-hover:underline">
                                            Email{" "}
                                            <BsEnvelopeAtFill className="text-primary" />
                                        </span>
                                    </a>
                                    <a href="tel:+977 9800000000">
                                        <span className="text-sm font-semibold">
                                            +977 9800000000
                                        </span>
                                    </a>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="group">
                                    <span className="text-sm font-semibold">
                                        25
                                    </span>
                                </div>
                                <div className="group">
                                    <span className="text-sm text-muted-foreground">
                                        Feb 12 2000
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>action (Add, Edit, Delete)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={userAvatar}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div className="inline-flex flex-col items-start gap-2">
                                        <h2 className="text-base">
                                            Member Name
                                        </h2>
                                        <Badge className="inline-block">
                                            Active
                                        </Badge>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="inline-flex flex-col items-start gap-1">
                                    <a
                                        href="mailto:info@example.com"
                                        className="group"
                                    >
                                        <span className="flex items-center gap-1 text-sm underline-offset-2 group-hover:text-primary group-hover:underline">
                                            Email{" "}
                                            <BsEnvelopeAtFill className="text-primary" />
                                        </span>
                                    </a>
                                    <a href="tel:+977 9800000000">
                                        <span className="text-sm font-semibold">
                                            +977 9800000000
                                        </span>
                                    </a>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="group">
                                    <span className="text-sm font-semibold">
                                        25
                                    </span>
                                </div>
                                <div className="group">
                                    <span className="text-sm text-muted-foreground">
                                        Feb 12 2000
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>action</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={userAvatar}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div className="inline-flex flex-col items-start gap-2">
                                        <h2 className="text-base">
                                            Member Name
                                        </h2>
                                        <Badge className="inline-block">
                                            Active
                                        </Badge>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="inline-flex flex-col items-start gap-1">
                                    <a
                                        href="mailto:info@example.com"
                                        className="group"
                                    >
                                        <span className="flex items-center gap-1 text-sm underline-offset-2 group-hover:text-primary group-hover:underline">
                                            Email{" "}
                                            <BsEnvelopeAtFill className="text-primary" />
                                        </span>
                                    </a>
                                    <a href="tel:+977 9800000000">
                                        <span className="text-sm font-semibold">
                                            +977 9800000000
                                        </span>
                                    </a>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="group">
                                    <span className="text-sm font-semibold">
                                        25
                                    </span>
                                </div>
                                <div className="group">
                                    <span className="text-sm text-muted-foreground">
                                        Feb 12 2000
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm font-medium">
                                    Feb 12 2000
                                </span>
                            </TableCell>
                            <TableCell>action</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default DataTable;
