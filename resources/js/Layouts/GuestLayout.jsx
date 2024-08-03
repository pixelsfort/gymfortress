export default function Guest({ children }) {
    return (
        <>
            <div className="flex min-h-screen w-full basis-full flex-wrap justify-center overflow-y-auto p-0 md:p-6">
                <div className="bg-bg-guest-layout-bg relative flex w-full justify-center rounded-none bg-cover bg-right bg-no-repeat p-6 pb-8 md:basis-1/2 md:rounded-lg">
                    <div className="absolute bottom-0 left-0 right-0 top-0 rounded-none bg-gradient-to-t from-foreground to-foreground/0 md:rounded-lg"></div>
                    <div className="z-10 flex flex-1 flex-col justify-end gap-5 leading-none md:hidden">
                        <h1 className="text-5xl text-card">
                            {route().current() === "register"
                                ? "Register"
                                : "Sign in to your Account"}
                        </h1>
                        <p className="text-card">
                            {route().current() === "register"
                                ? "Create Account"
                                : "Sign in"}
                        </p>
                    </div>
                </div>

                <div className="flex w-full basis-full items-center justify-center px-4 py-5 md:basis-1/2">
                    <div className="lg:w-[480px]">{children}</div>
                </div>
            </div>
        </>
    );
}
