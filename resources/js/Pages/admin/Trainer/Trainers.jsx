import PageTitle from "@/Components/Dashboard/PageTitle";
import {
    Card,
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

export default function Trainers({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <PageTitle title="Staff / Trainers">
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
                    <BreadcrumbItem className="text-primary">
                        All Trainers
                    </BreadcrumbItem>
                </BreadcrumbList>
            </PageTitle>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>All Trainers</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
