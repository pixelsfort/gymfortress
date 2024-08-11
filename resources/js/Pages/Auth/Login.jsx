import Checkbox from "@/Components/Form/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Form/InputError";
import InputLabel from "@/Components/Form/InputLabel";
import PrimaryButton from "@/Components/Button/PrimaryButton";
import TextInput from "@/Components/Form/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/Logo/ApplicationLogo";
import { Button } from "@/Components/ui/button";
import { toast } from "react-toastify";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onSuccess: () => {
                toast.success("Logged in Successfully", {
                    theme: "colored",
                    autoClose: 2000,
                    progress: undefined,
                });
            },
        });
    };

    console.log(status);

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="w-full py-10">
                <Link className="inline-block font-inter" href="/">
                    <ApplicationLogo className="fill-current text-gray-500" />
                </Link>
                <div className="text-default-900 mt-6 font-inter text-2xl font-bold 2xl:mt-8 2xl:text-3xl">
                    Welcome Back! 👋
                </div>
                <div className="text-default-600 text-base leading-6 2xl:mt-2 2xl:text-lg">
                    Please enter your details while registering.
                </div>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-8 mt-5 flex flex-wrap justify-between gap-2">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 cursor-pointer text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <Button className="w-full" disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>

            <div className="mt-5 text-center text-base text-muted-foreground 2xl:mt-8">
                Don't have an account?
                <Link
                    className="font-semibold text-primary"
                    href={route("register")}
                >
                    {" "}
                    Sign Up
                </Link>
            </div>
        </GuestLayout>
    );
}
