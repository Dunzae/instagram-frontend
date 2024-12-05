import { mergeStyle } from "@/app/libs/style"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,

}

export default function Input({ className, ...inputAttribute }: InputProps) {
    return (
        <input
        className={mergeStyle(className, "w-full h-full text-xs rounded-sm p-2 border border-stroke bg-secondary-background outline-none placeholder:text-secondary-text placeholder:text-xs placeholder:leading-4")}
        {...inputAttribute}
        />
    )
}