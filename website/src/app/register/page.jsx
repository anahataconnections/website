"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/helpers/images/logo.png";
import img from "@/helpers/images/registerbanner.png";
import Phase1 from "./_phases/Phase1.tsx";
import Phase2 from "./_phases/Phase2.tsx";
import Phase3 from "./_phases/Phase3";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader/Loader.tsx";
import axios from "axios";
import { setCookie } from "cookies-next";

const NEXT_PUBLIC_BACKEND_DOMAIN = process.env.NEXT_PUBLIC_BACKEND_DOMAIN || "https://cms.anahataaconnections.com/";

const Register = () => {
    const [phase1Data, setPhase1Data] = useState(null);
    const [showDownloadPage, setShowDownloadPage] = useState(false);

    const [bannerImage, setBannerImage] = useState(img);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBanner = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${NEXT_PUBLIC_BACKEND_DOMAIN}api/sign-up?populate[0]=register_banner.bannerImage`);
                setBannerImage(res.data.data.attributes.register_banner.bannerImage.data.attributes.url);
            } catch (error) {
                console.log(error);
                toast.error("Error loading banner image. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchBanner();
    }, []);

    const handlePhase1Submit = (values) => {
        setPhase1Data(values);
    };

    const handleFinalSubmit = async (finalData) => {
        setLoading(true);
        const apiUrl = `${NEXT_PUBLIC_BACKEND_DOMAIN}api/auth/local/register`;
        const payload = { ...finalData, password: finalData.email, username: finalData.email };

        try {
            const response = await axios.post(apiUrl, payload);

            if (response.status === 200) {
                const data = await response.data;
                setCookie("token", data.jwt);
                setCookie("user", JSON.stringify(data.user));
                toast.success("User registered successfully!", {
                    icon: "👏",
                });
                setShowDownloadPage(true);
            } else {
                toast.error("Error registering user. Please try again later.", {
                    icon: "🚫",
                });
            }
        } catch (error) {
            console.error(error);
            toast.success("A user with this email already exists", {
                icon: "🚫",
            });
              setShowDownloadPage(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="shadow-sm w-full z-[11] overflow-hidden h-screen bg-no-repeat bg-cover bg-origin-content" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="flex bg-emerald-900 h-screen bg-opacity-85 justify-center items-center pb-40">
                <section className="flex flex-col items-center justify-center w-full z-[11] opacity-100">
                    <div className="relative flex flex-col justify-center items-center text-2xl leading-8 text-neutral-200 max-md:mt-10 w-full">
                        <div className="flex flex-col justify-center items-center">
                            <Image src={logo} alt="Logo" width={200} height={200} className="object-contain" />
                        </div>
                        {
                            !showDownloadPage && <h1 className="text-4xl font-bold font-EvaMayasari">Anahata Connections</h1>
                        }
                        <div className="flex flex-col gap-y-6 text-base z-[11] text-white">
                            {/* <Image src={bannerImage} width={1200} height={1200} alt="Banner" className="absolute" /> */}
                            <div>
                                {!phase1Data && !showDownloadPage ? (
                                    <Phase1 onFormSubmit={handlePhase1Submit} />
                                ) : (
                                    showDownloadPage ? (
                                        <Phase3 />
                                    ) : (
                                        <Phase2 phase1Data={phase1Data} onFinalSubmit={handleFinalSubmit} />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {
                loading && <div className="absolute inset-0 z-30 bg-white opacity-95 flex gap-4 flex-col items-center justify-center h-full text-5xl font-bold">
                    <Loader />
                    <span className="text-4xl font-semibold text-red-600 font-EvaMayasari">Hold up... Looking for your match!</span>
                </div>
            }
        </main>
    );
};

export default Register;