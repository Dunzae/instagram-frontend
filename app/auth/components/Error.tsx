export interface ErrorProps {
    error? : string
}
export default function Error({error} : ErrorProps) {
    if(error) return <p className="text-sm text-red-500 text-center font-bold break-words">{error}</p>
    return null;
}