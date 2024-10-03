"use client";


import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import { Timeline } from "../ui/timeline";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};


export function TimelineFeatures() {

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = 4;
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (imagesLoaded === totalImages && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [imagesLoaded, totalImages]);



    const data = [
        {
            title: "PETICIÓN",
            content: (
                <div id="Solicitud">
                    <p className="text-neutral-200  md:text-2xl font-normal mb-8">
                        Contácta con nosotros por teléfono o rellena el formulario de solicitud con los data necesarios y atenderémos tu gestión inmediatamente en línea.
                    </p>
                    <div className="">
                        <Image
                            src="/images/request.jpg"
                            alt="startup template"
                            width={500}
                            height={1000}
                            onLoadingComplete={() => {
                                setImagesLoaded((prev) => prev + 1);
                            }}
                            className="rounded-lg w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "RECEPCIÓN",
            content: (
                <div>
                    <p className="text-neutral-200  md:text-2xl font-normal mb-8">
                        Verificámos que todos los data facilitados sean correctos y realizarémos la solicitud del Informe al Organismo Oficial pertinente. También te ayudamos a actualizar tu teléfono o domicilio en la Seguridad Social en caso de que fuera necesario.
                    </p>
                    <div className="">
                        <Image
                            src="/images/reception.jpg"
                            alt="startup template"
                            height={500}
                            width={500}
                            onLoadingComplete={() => {
                                setImagesLoaded((prev) => prev + 1);
                            }}
                            className="rounded-lg w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "ENTREGA",
            content: (
                <div>
                    <p className="text-neutral-200  md:text-2xl font-normal mb-8">
                        Verificámos que todos los data facilitados sean correctos y realizarémos la solicitud del Informe al Organismo Oficial pertinente. También te ayudamos a actualizar tu teléfono o domicilio en la Seguridad Social en caso de que fuera necesario.
                    </p>
                    <div className="">
                        <Image
                            src="/images/working.jpg"
                            alt="startup template"
                            height={500}
                            width={500}
                            onLoadingComplete={() => {
                                setImagesLoaded((prev) => prev + 1);
                            }}
                            className="rounded-lg w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "¡TRÁMITE COMPLETADO!",
            content: (
                <div>
                    <p className="text-neutral-200  md:text-2xl font-normal mb-8">
                        (Somos un servicio de asesoría ajeno a seguridad social. Si no recibes el informe de tu vida laboral, contáctanos de nuevo para relaizar el seguimiento de tu envío examinar todos los data y detectar posibles errores y así poder proporcionarte orientación sobre los pasos a seguir.)
                    </p>
                    <div className="">
                        <Image
                            src="/images/delivery.jpg"
                            alt="startup template"
                            height={500}
                            width={500}
                            onLoadingComplete={() => {
                                setImagesLoaded((prev) => prev + 1);
                            }}
                            className="rounded-lg w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-gray-900">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >

                    <Timeline data={data} />
            </motion.div>
        </div>

    );
}
