export default async function LoginApi(prevState: any, formData: any) {
    const id = formData.get('id');
    const password = formData.get('password');

    // 만약 아이디가 비어있을 경우
    if (id === undefined || id === "") {
        return {
            status: "error",
            error: "아이디가 비어있습니다.",
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

    // 만약 아이디가 올바르지 않은 경우
    if (id.length <= 5) {
        return {
            status: "error",
            error: "아이디의 길이는 6 이상이여야 합니다",
            data: undefined,
        }
    }

    // 만약 패스워드가 올바르지 않은 경우
    if (password.length <= 5) {
        return {
            status: "error",
            error: "패스워드의 길이는 6 이상이여야 합니다.",
            data: undefined,
        }
    }

    const body = new URLSearchParams();
    body.append("id", id);
    body.append("password", password);

    try {
        const response = await fetch("http://localhost/auth/signIn", {
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
                accessToken: response.headers.get("Access-Token")?.split("Bearer")[1],
                refreshToken: response.headers.get("Refresh-Token")?.split("Bearer")[1]
            }
        }
    } catch (e) {
        return {
            status: "error",
            error: "알 수 없는 오류입니다.",
            data: undefined
        }
    }
}