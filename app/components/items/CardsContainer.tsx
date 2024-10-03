"use client"

import { CardSpotlight } from "@/app/components/ui/card-spotlight";
import React from "react";
import { motion } from "framer-motion";


const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export function CardsContainer() {



    const data = [
        {
            content: (
                <div id="DatasNecesarios" className="relative z-20 flex-grow">
                    <h1 className="text-xl font-bold py-2 ">Datos necesarios para la solicitud del informe de Vida Laboral</h1>
                    <ul className="list-decimal list-inside ml-2">
                        <li className="text-neutral-300 text-sm mt-2">Nombre y apellidos. Tal y como se muestra en tu documento de identidad.</li>
                        <li className="text-neutral-300 text-sm mt-2">Número de Seguridad Social.</li>
                        <li className="text-neutral-300 text-sm mt-2">NIF: Tu número de DNI o NIE</li>
                        <li className="text-neutral-300 text-sm mt-2">Domicilio: El domicilio que se ha comunicado a la Seguridad Social.</li>
                    </ul>
                </div>
            ),
        },
        {
            content: (
                <div className="relative z-20 flex-grow">
                    <h1 className="text-xl font-bold py-2 ">Datos que aparecerán en tu informe de Vida Laboral</h1>
                    <ul className="list-decimal list-inside ml-2">
                        <li className="text-neutral-300 text-sm mt-2">Régimen</li>
                        <li className="text-neutral-300 text-sm mt-2">Empresa</li>
                        <li className="text-neutral-300 text-sm mt-2">Fecha de alta</li>
                        <li className="text-neutral-300 text-sm mt-2">Fecha de baja</li>
                        <li className="text-neutral-300 text-sm mt-2">C.T- Tipo de contrato laboral</li>
                        <li className="text-neutral-300 text-sm mt-2">CTP% – Grupo de cotización</li>
                        <li className="text-neutral-300 text-sm mt-2">Días – Tiempo en días de alta en cada situación</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (

        <div className="bg-dot-pattern bg-gray-900  py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >

                <h2 className="text-2lg md:text-5xl mb-4 text-white  text-center">
                    Datos Necesarios
                </h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >

                <div className="flex flex-wrap container mx-auto justify-center items-stretch gap-4">
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex"
                        >
                            <CardSpotlight className="w-full flex flex-col justify-between h-full p-6  rounded-lg shadow-lg">
                                {items.content}
                            </CardSpotlight>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
