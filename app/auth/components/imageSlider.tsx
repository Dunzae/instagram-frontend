"use client"
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import Image from "next/image";

export default function ImageSlider() {
    const images = ["/images/screenshot1.png", "/images/screenshot2.png", "/images/screenshot3.png", "/images/screenshot4.png"]
    const variants = {
        active: { opacity: "100%" },
        inactive: { opacity: "0%" }
    }

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setActiveIndex(_activeIndex => (_activeIndex + 1) % images.length);
        }, 3000)
    }, [])


    return (
        <div className="w-[380.32px] h-[580px] bg-[url('/images/home-phones.png')] bg-[length:468.32px_634.15px] bg-[-46px_0] overflow-hidden">
            <div className="mt-[27px] ml-[112px] w-[250px] h-[541px] relative overflow-hidden">
                {
                    images.map((image, index) =>
                        <motion.div
                            key={index}
                            variants={variants}
                            initial={index === 0 ? { opacity: "100%" } : { opacity: "0%" }}
                            animate={activeIndex === index ? "active" : "inactive"}
                            transition={{ duration: "2" }}
                            className="w-[250px] flex-shrink-0 absolute top-0 left-0">
                            <Image src={image} alt="imageSlider image" width="250" height="539" />
                        </motion.div>
                    )
                }
            </div>
        </div >
    )
}