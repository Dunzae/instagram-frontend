import Image from "next/image";
import Input from "./components/Input"
import Logo from "./components/Logo"
import Link from "next/link";

export default function LoginPage() {
    const isLogin = false;

    return (
        <div className="max-w-[350px] w-full flex flex-col gap-4 flex-shrink-0">
            <div className="w-full mt-20 md:mt-3 pb-0 p-10 md:pb-10 flex flex-col items-center bg-white border-spacing-0 md:border md:border-elebated-separtor rounded-sm ">
                <Logo className="mb-6" />
                <form className="w-full">
                    <div className="w-full h-9 mb-2">
                        <Input
                            id="id"
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                        />
                    </div>
                    <div className="w-full h-9 mb-2">
                        <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호"
                        />
                    </div>

                    <div className="my-4">
                        <button
                            type="submit"
                            className={`w-full rounded-lg text-white py-2 px-4 bg-primary-button ${isLogin ? 'opacity-100' : 'opacity-70'}`}
                        >
                            로그인
                        </button>
                    </div>
                </form>
                <div className="w-full mb-6 flex gap-2 items-center">
                    <div className="w-full h-[1px] bg-gray-300 flex-grow" />
                    <div className="flex-shrink-0 text-xs text-secondary-text font-semibold">
                        또는
                    </div>
                    <div className="w-full h-[1px] bg-gray-300" />
                </div>
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
                        <span className="text-primary-button font-bold">가입하기</span>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
                <p className="text-sm">앱을 다운로드하세요.</p>
                <div className="flex gap-4">
                    <button>
                        <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DB77600FC-090D-4204-A9CA-6803D9531FD0%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge" target="_blank">
                            <Image src="/images/UtJtFmFLCiD.png" alt="instagram download using google play" width={135} height={40} />
                        </Link>
                    </button>
                    <button>
                        <Link href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1917%2C382%2C1914%2C1034" target="_blank">
                            <Image src="/images/LBxTdceDfgS.png" alt="instagram download using microsofy" width={135} height={40} />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}