"use client"
import { mergeStyle } from "@/libs/style"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";

export interface MenuBarProps {
    className?: string
}
export default function MenuBar({ className }: MenuBarProps) {
    const [clickedMenu, setClickedMenu] = useState("home");
    const onMenuClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setClickedMenu(e.currentTarget.dataset.id as string);
    }

    return (
        <div className={mergeStyle(className, "fixed bottom-0 left-0 right-0")}>
            <ul className="w-full flex">
                <li data-id="home" className="flex flex-grow p-2 py-4 md:p-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <Link href="/">
                        <div className="flex">
                            <span>
                                {clickedMenu === "home"
                                    ? <svg aria-label="홈" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>홈</title><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
                                    : <svg aria-label="홈" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>홈</title><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                }
                            </span>
                            <span className="hidden lg:inline">홈</span>
                        </div>
                    </Link>
                </li>
                <li data-id="search" className="flex-grow p-2 py-4 hidden md:flex cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <span>
                        {clickedMenu === "search"
                            ? <svg aria-label="검색" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>검색</title><path d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="16.511" x2="21.643" y1="16.511" y2="21.643"></line></svg>
                            : <svg aria-label="검색" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>검색</title><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                        }
                    </span>
                    <span className="hidden lg:inline">검색</span>
                </li>
                <li data-id="explore" className="flex flex-grow p-2 py-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <Link href="/explore">
                        <div className="flex">
                            <span>
                                {clickedMenu === "explore"
                                    ? <svg aria-label="탐색 탭" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>탐색 탭</title><path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z"></path></svg>
                                    : <svg aria-label="탐색 탭" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>탐색 탭</title><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                                }
                            </span>
                            <span className="hidden lg:inline">탐색 탭</span>
                        </div>
                    </Link>
                </li>
                <li data-id="reels" className="flex flex-grow p-2 py-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <Link href="/reels">
                        <div className="flex">
                            <span>
                                {clickedMenu === "reels"
                                    ? <svg aria-label="릴스" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>릴스</title><path d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z" fillRule="evenodd"></path></svg>
                                    : <svg aria-label="릴스" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>릴스</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>
                                }
                            </span>
                            <span className="hidden lg:inline">릴스</span>
                        </div>
                    </Link>
                </li>
                <li data-id="direct" className="flex flex-grow p-2 py-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <Link href="/direct">
                        <div className="flex">
                            <span>
                                {clickedMenu === "direct"
                                    ? <svg aria-label="Direct" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Direct</title><path d="M22.91 2.388a.69.69 0 0 0-.597-.347l-20.625.002a.687.687 0 0 0-.482 1.178L7.26 9.16a.686.686 0 0 0 .778.128l7.612-3.657a.723.723 0 0 1 .937.248.688.688 0 0 1-.225.932l-7.144 4.52a.69.69 0 0 0-.3.743l2.102 8.692a.687.687 0 0 0 .566.518.655.655 0 0 0 .103.008.686.686 0 0 0 .59-.337L22.903 3.08a.688.688 0 0 0 .007-.692" fillRule="evenodd"></path></svg>
                                    : <svg aria-label="Direct" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Direct</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                }
                            </span>
                            <span className="hidden lg:inline">메시지</span>
                        </div>
                    </Link>
                </li>
                <li data-id="notification" className="flex-grow p-2 py-4 hidden md:flex cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <span>
                        {clickedMenu === "notification"
                            ? <svg aria-label="알림" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>알림</title><path d="M17.075 1.987a5.852 5.852 0 0 0-5.07 2.66l-.008.012-.01-.014a5.878 5.878 0 0 0-5.062-2.658A6.719 6.719 0 0 0 .5 8.952c0 3.514 2.581 5.757 5.077 7.927.302.262.607.527.91.797l1.089.973c2.112 1.89 3.149 2.813 3.642 3.133a1.438 1.438 0 0 0 1.564 0c.472-.306 1.334-1.07 3.755-3.234l.978-.874c.314-.28.631-.555.945-.827 2.478-2.15 5.04-4.372 5.04-7.895a6.719 6.719 0 0 0-6.425-6.965Z"></path></svg>
                            : <svg aria-label="알림" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>알림</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        }
                    </span>
                    <span className="hidden lg:inline">알림</span>
                </li>
                <li data-id="create" className="flex flex-grow p-2 py-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <span>
                        <svg aria-label="새로운 게시물" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>새로운 게시물</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                    </span>
                    <span className="hidden lg:inline">만들기</span>
                </li>
                <li data-id="profile" className="flex flex-grow p-2 py-4 cursor-pointer hover:bg-gray-50 items-center justify-center" onClick={onMenuClick}>
                    <Link href="/profile">
                        <div className="flex">
                            <span>
                                <Image alt="프로필" src="/images/profileImage.jpg" width={24} height={24} />
                            </span>
                            <span className="hidden lg:inline">프로필</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}