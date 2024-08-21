import PageTitle from "@/Components/Dashboard/PageTitle";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const AddMember = ({ auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <PageTitle title="Add New Member" />
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Add new Member</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddMember;
