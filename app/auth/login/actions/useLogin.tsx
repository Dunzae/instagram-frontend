"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginApi from "../apis/LoginApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useLogin() {
    const router = useRouter();
    const toggleLogin = useAuthStore((state) => state.toggleLogin)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(LoginApi, { status: "pending", data: undefined, error: undefined });
    
    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && toggleLogin !== undefined) {
            const { accessToken } = formState.data;
            toggleLogin();
            localStorage.setItem("accessToken", accessToken);
            router.replace("/");
        }
        else if(formState.status === "error") {
            setError(formState.error);
        }
    }, [router, formState, toggleLogin])

    return { formAction, error }
}