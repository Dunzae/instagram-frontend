import Link from "next/link"
import Image from "next/image"

export default function AppDownload() {
    return (
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
    )
}