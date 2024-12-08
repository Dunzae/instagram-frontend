"use client"
import { useAuthStore} from "@/zustand/providers/auth";
import { redirect } from "next/navigation";
import Loading from "@/components/loading";

export default function Home({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isLogin = useAuthStore((state) => state.isLogin);
    const hasHydrated = useAuthStore((state) => state._hasHydrated);

    if (!hasHydrated) {
        return <Loading />
    }

    if (hasHydrated && isLogin === false) {
        redirect("/login")
    }

    return (
        <div className="flex w-full h-full">
            {children}
        </div>
    );
}
