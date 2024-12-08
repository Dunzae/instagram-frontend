"use client"

import { useAuthStore } from "@/zustand/providers/auth";
import { redirect } from "next/navigation";
import Loading from "@/components/loading";

export default function Home() {
    const { value : isLogin, setting } = useAuthStore((state) => state.isLogin);

    if (!setting.persist.hasHydrated()) {
        return <Loading />
    }

    if (isLogin === false) {
        redirect("/login")
    }

    return (
        <div>
            HomePage
        </div>
    );
}
