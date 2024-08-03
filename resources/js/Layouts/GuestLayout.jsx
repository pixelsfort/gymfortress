export default function Guest({ children }) {
    return (
        <>
            <div className="flex min-h-screen w-full basis-full flex-wrap justify-center overflow-y-auto">
                <div className="bg-bg-guest-layout-bg relative hidden w-full basis-1/2 items-center justify-center bg-cover bg-right bg-no-repeat xl:flex"></div>

                <div className="flex min-h-screen w-full basis-full items-center justify-center px-4 py-5 md:basis-1/2">
                    <div className="lg:w-[480px]">{children}</div>
                </div>
            </div>
        </>
    );
}
