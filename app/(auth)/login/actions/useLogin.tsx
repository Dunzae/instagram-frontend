"use client";

import { useActionState, useEffect, useState } from "react";
import LoginApi from "../apis/LoginApi";
import { useAuthStore } from "@/zustand/providers/auth";

export default function useLogin() {
    const { value : login, setting} = useAuthStore((state) => state.login)
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(LoginApi, { status: "pending", data: undefined, error: undefined });
    
    useEffect(() => {
        if (formState.status === "success" && formState.data !== undefined && setting.persist.hasHydrated() && login) {
            const { accessToken } = formState.data;
            localStorage.setItem("accessToken", accessToken);
            login();
        }
        else if(formState.status === "error") {
            setError(formState.error);
        }
    }, [formState, setting, login])

    return { formAction, error }
}