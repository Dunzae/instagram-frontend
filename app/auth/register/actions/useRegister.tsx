"use client"
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import RegisterApi from "@/auth/register/apis/RegisterApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useRegister() {
    const router = useRouter();
    const toggleLogin = useAuthStore((state) => state.toggleLogin)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(RegisterApi, { status: "pending", data: undefined, error: undefined });

    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && toggleLogin !== undefined) {
            const { accessToken } = formState.data;
            localStorage.setItem("accessToken", accessToken);
            toggleLogin();
        }
        else if (formState.status === "error") {
            setError(formState.error);
        }
    }, [router, formState, toggleLogin])

    return { formAction, error }
}
