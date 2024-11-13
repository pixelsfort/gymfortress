import AdminMianWrap from "@/Components/Dashboard/AdminMianWrap";
import MemberReport from "@/Components/Dashboard/Report-chart/MemberReport";
import Report from "@/Components/Dashboard/Report-chart/Report";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="space-y-6">
                <div className="rounded-md bg-primary p-6">
                    <div className="">
                        <h2 className="mb-3 text-4xl font-normal text-card">
                            Welcome Back!
                        </h2>
                        <p className="max-w-[300px] text-card">
                            We have got this for today.
                        </p>
                    </div>
                </div>
                {/* Page Title */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-default-800 text-2xl font-medium">
                        Analytics dashboard
                    </div>
                    <div className="grid gap-2">
                        <button
                            className="text-default-600 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-white px-4 py-[10px] text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50"
                            type="button"
                        >
                            icon
                            <span>Pick a date</span>
                        </button>
                    </div>
                </div>

                {/* Reaport Area */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-8">
                        <MemberReport />
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <Report />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
