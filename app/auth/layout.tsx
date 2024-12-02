import ImageSlider from "./components/imageSlider"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ImageSlider />
            {children}
        </>
    )
}