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

const DataTable = () => {
    const fetchMembers = async () => {
        const response = await fetch("/api/members");
        const memberData = response.json();
        return memberData;
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birth month/day hasn't occurred yet this year
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    };

    const formatDate = (date) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["members"],
        queryFn: fetchMembers,
    });

    console.log(data, isLoading);

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
                    {
                        // Show loading spinner while fetching data
                        isLoading && (
                            <div className="flex items-center justify-center p-4">
                                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
                            </div>
                        )
                    }

                    <TableBody>
                        {data?.data.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={userAvatar}
                                            className="h-14 w-14 rounded-full object-cover"
                                        />
                                        <div className="inline-flex flex-col items-start gap-2">
                                            <h2 className="text-base">
                                                {member.firstname}{" "}
                                                {member.lastname}
                                            </h2>
                                            <Badge className="inline-block text-[14px] font-normal">
                                                Active
                                            </Badge>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="inline-flex flex-col items-start gap-1">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="group"
                                        >
                                            <span className="flex items-center gap-1 text-sm underline-offset-2 group-hover:text-primary group-hover:underline">
                                                Email{" "}
                                                <BsEnvelopeAtFill className="text-primary" />
                                            </span>
                                        </a>
                                        <a href="tel:+977 9800000000">
                                            <span className="text-sm font-semibold">
                                                {member.phone}
                                            </span>
                                        </a>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="group">
                                        <span className="text-sm font-semibold">
                                            {calculateAge(member.dob)}
                                        </span>
                                    </div>
                                    <div className="group">
                                        <span className="text-sm text-muted-foreground">
                                            {member.dob}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm font-medium">
                                        {formatDate(member.created_at)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm font-medium">
                                        Feb 12 2000
                                    </span>
                                </TableCell>
                                <TableCell>
                                    action (Add, Edit, Delete)
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default DataTable;
