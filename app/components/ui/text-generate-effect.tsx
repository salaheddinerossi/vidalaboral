"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../../lib/util";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 0.3,
                                       startDelay = 0,
                                   }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    startDelay?: number;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    // Use useInView to trigger animation when the element is in view
    const isInView = useInView(scope, { once: true, amount: 0.3 }); // Trigger when 30% of the component is visible

    useEffect(() => {
        if (isInView) {
            const animationStart = async () => {
                await new Promise((resolve) =>
                    setTimeout(resolve, startDelay * 1000)
                ); // Convert startDelay to milliseconds
                animate(
                    "span",
                    {
                        opacity: 1,
                        filter: filter ? "blur(0px)" : "none",
                    },
                    {
                        duration: duration ? duration : 1,
                        delay: stagger(0.2),
                    }
                );
            };

            animationStart();
        }
    }, [isInView, startDelay]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white opacity-0 text-center text-3xl"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="">
                <div className="text-white text-xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
