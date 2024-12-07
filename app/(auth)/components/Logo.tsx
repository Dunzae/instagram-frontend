import { mergeStyle } from "@/libs/style"

export interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return <div className={mergeStyle(className, "bg-[url('/sprites/KoLLpWDb4f6.png')] bg-[0px_-52px] bg-no-repeat w-[175px] h-[51px]")} />
}