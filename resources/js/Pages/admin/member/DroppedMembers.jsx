import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const DroppedMembers = ({ auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Dropped Members List" />
            <h1>Dropped Members</h1>
        </AuthenticatedLayout>
    );
};

export default DroppedMembers;
