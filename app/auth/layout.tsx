import ImageSlider from "./components/imageSlider"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="w-full h-full flex items-center justify-center">
                <ImageSlider className="hidden md:block"/>
                <div>
                    {children}
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
}