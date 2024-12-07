"use client"

import { useAuthStore } from "@/zustand/providers/auth";
import { useRouter } from "next/navigation";

export default function Home() {
    const isLogin = useAuthStore((state) => state.isLogin);
    const router = useRouter();

    if (isLogin === undefined) {
        return <div>Loading</div>
    }

    if (isLogin === false) {
        router.replace("/login");
    }

    return (
        <div>
            HomePage
        </div>
    );
}
