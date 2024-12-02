import Input from "./components/Input"
import Logo from "./components/Logo"

export default function LoginPage() {
    const isLogin = false;

    return (
        <div className="max-w-[350px] w-full mt-3 flex flex-col flex-shrink-0 items-center">
            <Logo className="mb-6" />
            <form className="w-full px-10">
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
        </div>
    )
}