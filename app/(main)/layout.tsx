"use client"
import { useAuthStore } from "@/zustand/providers/auth";
import { redirect } from "next/navigation";
import Loading from "@/components/loading";
import MenuBar from "@/(main)/components/MenuBar";

export default function Home({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { value: isLogin, setting } = useAuthStore((state) => state.isLogin);

    if (!setting.persist.hasHydrated()) {
        return <Loading />
    }

    if (isLogin === false) {
        redirect("/login")
    }

    return (
        <div>
            <MenuBar />
            {children}
        </div>
    );
}
