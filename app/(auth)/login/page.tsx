"use client"
import Link from "next/link";
import Or from "@/(auth)/components/Or";
import Logo from "@/(auth)/components/Logo"
import Input from "@/(auth)/components/Input"
import Error from "@/(auth)/components/Error";
import AppDownload from "@/(auth)/components/AppDownload";
import useLogin from "./actions/useLogin";

export default function LoginPage() {
    const isLogin = false;
    const { error, formAction } = useLogin();

    return (
        <div className="max-w-[350px] w-full flex flex-col gap-4 flex-shrink-0">
            <div className="w-full mt-20 md:mt-3 pb-0 p-10 md:pb-10 flex flex-col items-center bg-white border-spacing-0 md:border md:border-elebated-separtor rounded-sm ">
                <Logo className="mb-6" />
                <form className="w-full" action={formAction}>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                        />
                    </div>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="password"
                            type="password"
                            placeholder="비밀번호"
                        />
                    </div>
                    <Error error={error} />
                    <div className="my-4">
                        <button
                            type="submit"
                            className={`w-full rounded-lg text-white py-2 px-4 bg-primary-button ${isLogin ? 'opacity-100' : 'opacity-70'}`}
                        >
                            로그인
                        </button>
                    </div>
                </form>
                <Or />
                <div className="w-full flex justify-center mb-4">
                    <button className="flex items-center gap-2">
                        <span className="w-4 h-4 inline-block bg-[url('/sprites/TJztmXpWTmS.png')] bg-[-414px_-259px]" />
                        <span className="text-[#385185] text-sm font-semibold">Facebook으로 로그인</span>
                    </button>
                </div>
                <div className="w-full flex justify-center">
                    <button className="flex items-center">
                        <span className="text-sm text-link">비밀번호를 잊으셨나요?</span>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full py-3 text-sm flex gap-1 justify-center border-spacing-0 md:border md:border-elebated-separtor rounded-sm">
                    <span>계정이 없으신가요?</span>
                    <button>
                        <Link href="/auth/register">
                            <span className="text-primary-button font-bold">가입하기</span>
                        </Link>
                    </button>
                </div>
            </div>
            <AppDownload />
        </div >
    )
}