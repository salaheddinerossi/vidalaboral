"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhoAreWeImage from "/public/images/WhoAreWe.webp";
import {TextGenerateEffect} from "@/app/components/ui/text-generate-effect";
import {InfiniteMovingCards} from "@/app/components/ui/infinite-moving-cards";

export function WhoAreWe() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const words = "El informe de vida laboral consta de tres tipos de certificados:"




    return (
        <div >

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16  text-white">
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
                    <h1 className="text-4xl font-bold mb-4">¿Qué es?</h1>
                    <p className="text-lg leading-relaxed">
                        El informe de vida laboral es el documento oficial emitido por la Tesorería General de la Seguridad Social en el que muestra el historial de cotizaciones recogiendo así toda nuestra actividad laboral ya sea como asalariado o como autónomo.
                    </p><br/>
                    <p className="text-lg leading-relaxed">
                        Este documento es de gran importancia a la hora de demostrar los períodos de cotización y acreditar la experiencia laboral o profesional en un sector, también es necesario para poder actualizar el curriculum, saber si una empresa te dió de alta en la Seguridad Social y calcular la pensión o jubilación así como los periodos de paro y bajas médicas.
                    </p><br/>
                    <p className="text-lg leading-relaxed">
                        En el documento se presenta en orden cronológico y de manera detallada el listado completo de todas las empresas en las que has trabajado,cuánto tiempo duraron los contratos, el tipo de jornada y en definitiva el saldo resultante de los días de cotización.
                    </p>
                </motion.div>
            </div>
            <div className="text-center">
                <TextGenerateEffect words={words} duration={0.2} />
            </div>

        </div>

    );
}
