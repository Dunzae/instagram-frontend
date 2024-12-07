import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginApi from "../apis/LoginApi";

export default function useLogin() {
    const router = useRouter();
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(LoginApi, { status: "pending", data: undefined, error: undefined });

    useEffect(() => {
        if (formState.status === "success") {
            const { accessToken } = formState.data;
            router.replace("/");
        }
        else if(formState.status === "error") {
            setError(formState.error);
        }
    }, [formState, router])

    return { formAction, error }
}