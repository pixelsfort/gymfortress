export default function Guest({ children }) {
    return (
        <>
            <div className="flex h-full w-full basis-full flex-wrap justify-center overflow-y-auto p-0 md:p-6 lg:min-h-screen">
                <div className="relative flex min-h-[250px] w-full justify-center rounded-none bg-bg-guest-layout-bg bg-cover bg-right bg-no-repeat p-6 pb-8 md:basis-1/3 md:rounded-lg md:bg-landing-hero-bg">
                    <div className="absolute bottom-0 left-0 right-0 top-0 rounded-none bg-gradient-to-t from-foreground to-foreground/0 md:hidden md:rounded-lg"></div>
                    <div className="z-10 flex flex-1 flex-col justify-end gap-5 leading-none md:hidden">
                        <h1 className="text-5xl text-card">
                            {route().current() === "register"
                                ? "Register"
                                : "Sign in to your Account"}
                        </h1>
                        <p className="text-card/80">
                            {route().current() === "register"
                                ? "Create Account"
                                : "Sign in"}
                        </p>
                    </div>
                    <div className="absolute bottom-6 left-6 hidden flex-col gap-1 md:flex">
                        <p className="text-base font-normal text-card">
                            copyright ©️ 2024 ~{" "}
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

                <div className="flex w-full basis-full items-center justify-center px-4 py-5 md:basis-2/3">
                    <div className="lg:w-[480px]">{children}</div>
                </div>
            </div>
        </>
    );
}
