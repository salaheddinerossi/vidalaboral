"use client";

import React from "react";
import {WhoAreWe} from "@/app/components/items/WhoAreWe";
import {InfiniteMovingCards} from "@/app/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};


const testimonials = [
    {
        quote:
            "El informe de vida laboral detallado , el más común con todo el historial de cotización.",
    },
    {
        quote:
            "El informe de vida laboral acotado, en el que sólo aparecen los periodos de cotización que nosotros elijamos.",
    },
    {
        quote: "El informe negativo de vida laboral , que acredita que una persona nunca ha estado trabajando, por lo que no ha estado dada de alta en el Régimen General de la Seguridad Social ni en el Régimen Especial de los Autónomos y por tanto no ha cotizado. Este informe es necesario para algunas subvenciones o ayudas y otras circunstancias.",
    },
];

export function GridBackgroundDemo() {
    return (
        <div id="QueEs" className="w-full bg-gray-900 bg-grid-gray-700/[0.2] relative">
            <div className="absolute pointer-events-none inset-0 bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto relative z-10">
                <WhoAreWe />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <InfiniteMovingCards items={testimonials}></InfiniteMovingCards>
                </motion.div>
            </div>
        </div>
    );
}
