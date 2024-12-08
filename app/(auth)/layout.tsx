"use client"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer";
import { useAuthStore } from "@/zustand/providers/auth";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Loading from "@/components/loading";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const {value : isLogin, setting} = useAuthStore((state) => state.isLogin);

    useEffect(() => {
        if(setting.persist.hasHydrated() && isLogin) redirect("/");
    }, [isLogin, setting])

    if(isLogin === undefined) return <Loading />
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