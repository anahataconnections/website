import Image from "next/image"
import Link from "next/link"

const Phase3 = () => {
    return (
        <div className="w-96 flex flex-col items-center">
            <h2 className="font-Pattaya text-2xl md:text-3xl lg:text-4xl text-center">Download the Anahata App now!</h2>
            <div className="flex gap-4 flex-row items-center">
                <Link href={'/'}>
                    <Image src='/assets/google.svg' alt="google play" width={200} height={100} />
                </Link>
                <Link href={'/'}>
                    <Image src='/assets/app.svg' alt="app store" width={200} height={100} />
                </Link>
            </div>
        </div>
    )
}

export default Phase3