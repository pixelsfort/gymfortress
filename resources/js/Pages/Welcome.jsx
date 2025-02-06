import { Button } from "@/Components/ui/button";
import { Link, Head } from "@inertiajs/react";
import {
    MdOutlineArrowForward,
    MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <header>
                <div className="mx-auto flex min-h-[80px] max-w-full items-center justify-between bg-muted px-6 xl:px-10">
                    <div className="flex items-center justify-start gap-5 divide-x divide-solid divide-muted-foreground">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">
                            Gym
                        </h2>
                        <span className="pl-5 font-semibold leading-tight">
                            Fortify Your Fitness <br />
                            Business.
                        </span>
                    </div>
                    <nav className="-mx-3 flex flex-1 justify-end">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 font-semibold text-card-foreground ring-1 ring-transparent transition hover:text-card-foreground/70 focus:outline-none focus-visible:ring-primary"
                            >
                                Goto Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("member_login")}
                                    className="rounded-md px-3 py-2 font-semibold text-card-foreground ring-1 ring-transparent transition hover:text-card-foreground/70 focus:outline-none focus-visible:ring-primary"
                                >
                                    Members Log in
                                </Link>
                                <Link
                                    href={route("login")}
                                    className="rounded-md px-3 py-2 font-semibold text-card-foreground ring-1 ring-transparent transition hover:text-card-foreground/70 focus:outline-none focus-visible:ring-primary"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="rounded-md px-3 py-2 font-semibold text-card-foreground ring-1 ring-transparent transition hover:text-card-foreground/70 focus:outline-none focus-visible:ring-primary"
                                >
                                    Sign up
                                </Link>

                            </>
                        )}
                    </nav>
                </div>
            </header>
            <main>
                <section className="mx-auto max-w-full">
                    <div className="grid min-h-[calc(100vh-80px)] grid-cols-12 items-center gap-6 px-6 py-6 xl:px-6">
                        <div className="order-2 col-span-12 flex h-full flex-col justify-end rounded-lg bg-landing-hero-bg bg-cover p-10 xl:order-1 xl:col-span-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-base font-normal text-card">
                                    2024 ©️ Copyright ~{" "}
                                    <span className="text-lg font-bold">
                                        GymFortress
                                    </span>
                                </p>
                                <p className="text-base font-normal text-card">
                                    Powered by{" "}
                                    <span className="text-lg font-bold">
                                        PixelsFort
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="order-1 col-span-12 p-0 lg:p-20 xl:order-2 xl:col-span-8 xl:p-40">
                            <div className="flex h-full flex-col items-start justify-center gap-6">
                                <div>All-in-one ~ GymFortress</div>
                                <h1 className="max-w-full text-4xl font-bold -tracking-[0.04em] xl:max-w-3xl xl:text-6xl xl:leading-none">
                                    Gym Management Software guaranteed for
                                    growth and member satisfaction...
                                </h1>
                                <p className="max-w-full text-base font-medium text-muted-foreground xl:max-w-2xl xl:text-lg">
                                    Stop wasting time on manual tasks and start
                                    growing your gym today. Take control of your
                                    gym's destiny with{" "}
                                    <span className="font-bold text-primary">
                                        GymFortress
                                    </span>
                                    . Our powerful management platform
                                    simplifies operations, boosts member
                                    satisfaction, and drives growth. Experience
                                    the difference a truly fortified gym can
                                    make.
                                </p>
                                <div className="mt-3 flex items-center gap-6">
                                    <Button
                                        size="lg"
                                        className="flex h-14 items-center gap-4 text-lg"
                                    >
                                        Get Started <MdOutlineArrowForward />
                                    </Button>
                                    <Button
                                        variant="link"
                                        className="flex gap-2 text-lg"
                                    >
                                        Learn More <MdOutlineArrowForwardIos />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
