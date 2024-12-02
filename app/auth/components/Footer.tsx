import { mergeStyle } from "@/app/libs/style"
import Link from "next/link"

export interface FooterProps {
    className?: string
}
export default function Footer({ className }: FooterProps) {
    const tags = [
        {
            "href": "https://about.meta.com/",
            "name": "Meta"
        },
        {
            "href": "https://about.instagram.com/",
            "name": "소개"
        },
        {
            "href": "https://about.instagram.com/blog/",
            "name": "블로그"
        },
        {
            "href": "https://about.instagram.com/about-us/careers",
            "name": "채용 정보"
        },
        {
            "href": "https://help.instagram.com/",
            "name": "도움말"
        },
        {
            "href": "https://developers.facebook.com/docs/instagram",
            "name": "API"
        },
        {
            "href": "https://www.instagram.com/legal/privacy/",
            "name": "개인정보처리방침"
        },
        {
            "href": "https://www.instagram.com/legal/terms/",
            "name": "약관"
        },
        {
            "href": "https://www.instagram.com/explore/locations/",
            "name": "위치"
        },
        {
            "href": "https://www.instagram.com/web/lite/",
            "name": "Instagram Lite"
        },
        {
            "href": "https://www.threads.net/",
            "name": "Threads"
        },
        {
            "href": "https://www.facebook.com/help/instagram/261704639352628",
            "name": "연락처 업로드 & 비사용자"
        },
        {
            "href": "https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer",
            "name": "Meta Verified"
        }
    ]

    return (
        <div className={mergeStyle(className,"flex flex-col items-center gap-4")}>
            <div className="flex text-xs px-4 justify-center flex-wrap gap-4">
                {
                    tags.map((tag, index) =>
                        <div key={index}>
                            <Link href={tag.href} target="_blank">
                                <span className=" font-normal text-secondary-text break-words ">
                                    {tag.name}
                                </span>
                            </Link>
                        </div>
                    )
                }

            </div>
            <div className="text-sm flex gap-2">
                <span>한국어</span>
                <span>© 2024-12-02 Instagram from JangDongGun</span>
            </div>
        </div>
    )
}