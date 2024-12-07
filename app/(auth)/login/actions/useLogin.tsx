"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginApi from "../apis/LoginApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useLogin() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(LoginApi, { status: "pending", data: undefined, error: undefined });
    
    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && login !== undefined) {
            const { accessToken } = formState.data;
            localStorage.setItem("accessToken", accessToken);
            login();
        }
        else if(formState.status === "error") {
            setError(formState.error);
        }
    }, [router, formState, login])

    return { formAction, error }
}