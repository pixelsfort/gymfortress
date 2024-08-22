import PageTitle from "@/Components/Dashboard/PageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { IoHome } from "react-icons/io5";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

const AddMember = ({ auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <PageTitle>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 font-medium hover:text-primary"
                        >
                            <IoHome /> Gym
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link
                            href="/members"
                            className="font-medium hover:text-primary"
                        >
                            Members
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-primary">
                        Add New Member
                    </BreadcrumbItem>
                </BreadcrumbList>
            </PageTitle>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Add new Member</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 flex flex-col gap-2">
                                    <Label htmlFor="viFullName3">
                                        Full Name
                                    </Label>
                                    <div className="input-group merged group relative flex w-full flex-wrap items-stretch ltr:flex-row rtl:flex-row-reverse">
                                        <div className="border-default-300 text-default-500 flex items-center justify-center border bg-background px-3 text-sm font-normal ring-primary transition duration-300 first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0 group-focus-within:border-primary">
                                            icon
                                        </div>
                                        <div className="w-full flex-1">
                                            <Input />
                                            <div data-lastpass-icon-root=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddMember;
