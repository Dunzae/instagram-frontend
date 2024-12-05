import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginApi from "../apis/LoginApi";

export default function useLogin() {
    const router = useRouter();
    const [error, setError] = useState<undefined | string>(undefined);
    const [formState, formAction] = useActionState(LoginApi, { status: "pending", data: undefined, error: undefined });

    useEffect(() => {
        // 로그인이 성공했을때의 분기처리
        if (formState.status === "success" && formState.data !== undefined) {
            const { accessToken, refreshToken } = formState.data;
            router.replace("/");
        }
        else if(formState.status === "error") {
            // 로그인이 실패했을 때의 분기처리
            setError(formState.error);
        }
    }, [formState])

    return { formAction, error }
}