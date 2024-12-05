"use client"
import Link from "next/link";
import Or from "../components/Or";
import Logo from "@/auth/components/Logo"
import Input from "@/auth/components/Input"
import Error from "@/auth/components/Error";
import AppDownload from "@/auth/components/AppDownload";
import useRegister from "@/auth/register/actions/useRegister";

export default function RegisterPage() {
    const isValid = false;
    const { formAction, error } = useRegister();

    return (
        <div className="max-w-[350px] w-full flex flex-col gap-4 flex-shrink-0">
            <div className="w-full mt-20 md:mt-3 pb-0 p-6 md:pb-10 flex flex-col items-center bg-white border-spacing-0 md:border md:border-elebated-separtor rounded-sm">
                <Logo className="mb-6" />
                <div className='mb-4'>
                    <p className="text-center break-words text-base leading-5 font-semibold text-secondary-text">
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </p>
                </div>
                <div className="w-full mb-4">
                    <button
                        type="submit"
                        className="w-full rounded-lg text-white py-2 px-4 bg-primary-button flex justify-center items-center gap-2"
                    >
                        <span className="inline-block w-4 h-4 bg-[url('/sprites/TJztmXpWTmS.png')] bg-[-414px_-300px] bg-no-repeat"></span>
                        <span className="text-sm font-bold">Facebook으로 로그인</span>
                    </button>
                </div>
                <Or />
                <form className="w-full" action={formAction}>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="phoneOrEmail"
                            type="text"
                            placeholder="휴대폰 번호 또는 이메일 주소"
                        />
                    </div>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="password"
                            type="password"
                            placeholder="비밀번호"
                        />
                    </div>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="fullName"
                            type="text"
                            placeholder="이름"
                        />
                    </div>
                    <div className="w-full h-9 mb-2">
                        <Input
                            name="nickName"
                            type="text"
                            placeholder="별명"
                        />
                    </div>
                    <div className="mb-2">
                        <p className="break-words text-xs text-secondary-text text-center leading-4">
                            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.{' '}
                            <span><Link href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">더 알아보기</Link></span>
                        </p>
                    </div>
                    <div>
                        <Error error={error} />
                    </div>
                    <div className="my-4">
                        <button
                            type="submit"
                            className={`w-full rounded-lg text-white py-2 px-4 bg-primary-button ${isValid ? 'opacity-100' : 'opacity-70'}`}
                        >
                            가입
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full">
                <div className="w-full py-3 text-sm flex gap-1 justify-center border-spacing-0 md:border md:border-elebated-separtor rounded-sm">
                    <span>계정이 있으신가요?</span>
                    <button>
                        <Link href="/auth/login">
                            <span className="text-primary-button font-bold">로그인</span>
                        </Link>
                    </button>
                </div>
            </div>
            <AppDownload />
        </div>
    )

}