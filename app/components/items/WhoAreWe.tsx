"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhoAreWeImage from "/public/images/WhoAreWe.webp";

export function WhoAreWe() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16 bg-black text-white">
            <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
            >
                <Image
                    src={WhoAreWeImage}
                    alt="Business Solutions"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-lg"
                />
            </motion.div>

            <motion.div
                className="flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl font-bold mb-4">Leading Business Solutions</h1>
                <p className="text-lg leading-relaxed">
                    We offer a comprehensive suite of business solutions tailored to meet your unique needs.
                    Our team of experts is dedicated to helping you navigate the complex digital landscape,
                    ensuring your business stays ahead of the curve.
                </p>
            </motion.div>
        </div>
    );
}
