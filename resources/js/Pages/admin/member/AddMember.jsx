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
import { ImUser } from "react-icons/im";
import InputIcon from "@/Components/ui/input-icon";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../Components/ui/select";

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
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="fname">First Name</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <ImUser />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="fname"
                                                name="fname"
                                                onChange={""}
                                                placeholder="First name"
                                                className="focus:border-1 rounded-lg rounded-l-none border border-l-0 bg-background px-3 transition duration-300 placeholder:text-xs placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus:ring-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="lname">Last Name</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <ImUser />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="lname"
                                                name="lname"
                                                onChange={""}
                                                placeholder="Last name"
                                                className="focus:border-1 rounded-lg rounded-l-none border border-l-0 bg-background px-3 transition duration-300 placeholder:text-xs placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 focus:ring-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">Gender</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <ImUser />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Select className="">
                                                <SelectTrigger className="rounded-l-none border border-l-0">
                                                    <SelectValue placeholder="male" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="male">
                                                        Male
                                                    </SelectItem>
                                                    <SelectItem value="female">
                                                        Female
                                                    </SelectItem>
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
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
