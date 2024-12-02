"use client"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
                <ImageSlider className="hidden md:block"/>
                {children}
            </div>
            <footer>
                <Footer className="mb-14"/>
            </footer>
        </div>
    )
}