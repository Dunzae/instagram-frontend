"use client"
import { useActionState, useEffect, useState } from "react";
import RegisterApi from "@/(auth)/register/apis/RegisterApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useRegister() {
    const {value : login, setting} = useAuthStore((state) => state.login)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(RegisterApi, { status: "pending", data: undefined, error: undefined });

    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && setting.persist.hasHydrated() && login !== undefined) {
            const { accessToken } = formState.data;
            localStorage.setItem("accessToken", accessToken);
            login();
        }
        else if (formState.status === "error") {
            setError(formState.error);
        }
    }, [formState, login, setting.persist])

    return { formAction, error }
}
