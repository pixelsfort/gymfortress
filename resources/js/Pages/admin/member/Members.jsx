import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Members({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <h1>Members</h1>
        </AuthenticatedLayout>
    );
}
