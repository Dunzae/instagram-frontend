export default async function RegisterApi(prevState: any, formData: any) {
    const phoneOrEmail = formData.get('phoneOrEmail');
    const password = formData.get('password');
    const fullName = formData.get("fullName");
    const nickName = formData.get("nickName");

    // 만약 아이디가 비어있을 경우
    if (phoneOrEmail === undefined || phoneOrEmail === "") {
        return {
            status: "error",
            error: "휴대폰 번호 또는 이메일 주소가 비어있습니다.",
            data: undefined,
        }
    }

    // 만약 패스워드가 비어있을 경우
    if (password === undefined || password === "") {
        return {
            status: "error",
            error: "패스워드가 비어있습니다.",
            data: undefined,
        }
    }

    // 만약 성명이 비어있을 경우
    if (fullName === undefined || fullName === "") {
        return {
            status: "error",
            error: "성명이 비어있습니다.",
            data: undefined,
        }
    }

    // 만약 성명이 비어있을 경우
    if (nickName === undefined || nickName === "") {
        return {
            status: "error",
            error: "별명이 비어있습니다.",
            data: undefined,
        }
    }

    const body = new URLSearchParams();
    body.append("phoneOrEmail", phoneOrEmail);
    body.append("password", password);
    body.append("fullName", fullName);
    body.append("nickName", nickName);

    try {
        const response = await fetch("http://localhost/auth/signUp", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body
        })

        if (!response.ok) {
            const data = await response.json();
            return {
                status: "error",
                error: data.error,
            }
        }

        return {
            status: "success",
            data: {
                accessToken: response.headers.get("Authorization")?.split("Bearer")[1] as string,
            }
        }
    } catch (e) {
        console.error(e);
        return {
            status: "error",
            error: "알 수 없는 오류입니다.",
        }
    }
}