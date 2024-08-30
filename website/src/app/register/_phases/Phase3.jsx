import Image from "next/image"
import phase3 from "@/helpers/images/third.png"
import Link from "next/link"

const Phase3 = () => {
    return (
        <div className="absolute inset-0 z-20 bg-emerald-900 h-screen flex text-white">
            <div className="flex flex-1">
                <Image src={phase3} alt="phase3" width={1200} height={1200} priority quality={100} className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-between">
                <div className="flex">
                    <Image src={'/assets/logo1.png'} alt="logo" width={400} height={400} quality={100} className="object-contain" />
                </div>
                <div className="flex">
                    <h1 className="font-EvaMayasari text-4xl md:text-5xl lg:text-6xl">Anahata Connections</h1>
                </div>
                <div className="flex mx-4 text-center">
                    <h2 className="font-Pattaya text-2xl md:text-3xl lg:text-4xl" s>Download the Anahata App now!</h2>
                </div>
                <div className="flex md:space-x-4 flex-col md:flex-row items-center">
                    <Link href={'/'}>
                        <Image src='/assets/google-play.svg' alt="google play" width={200} height={200} />
                    </Link>
                    <Link href={'/'}>
                        <Image src='/assets/app-store.svg' alt="app store" width={200} height={200} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Phase3