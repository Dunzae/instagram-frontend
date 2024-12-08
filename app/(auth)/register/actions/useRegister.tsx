"use client"
import { useActionState, useEffect, useState } from "react";
import RegisterApi from "@/(auth)/register/apis/RegisterApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useRegister() {
    const login = useAuthStore((state) => state.login)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(RegisterApi, { status: "pending", data: undefined, error: undefined });

    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && login !== undefined) {
            const { accessToken } = formState.data;
            localStorage.setItem("accessToken", accessToken);
            login();
        }
        else if (formState.status === "error") {
            setError(formState.error);
        }
    }, [formState, login])

    return { formAction, error }
}
