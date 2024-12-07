"use client"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer";
import { useAuthStore } from "@/zustand/providers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isLogin = useAuthStore((state) => state.isLogin);
    const router = useRouter();

    useEffect(() => {
        if(isLogin) router.replace("/");
    }, [isLogin, router])

    if(isLogin === undefined) return <div>Loading</div>
    return (
        <div className="min-h-full flex flex-col items-center justify-center gap-8">
            <div className="w-full h-fit flex items-center justify-center gap-8 flex-shrink-0">
                <ImageSlider className="hidden md:block"/>
                {children}
            </div>
            <footer className="mt-10 md:mt-0">
                <Footer className="mb-14"/>
            </footer>
        </div>
    )
}