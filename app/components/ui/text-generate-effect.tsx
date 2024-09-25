"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/util";

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 0.3,
                                       startDelay = 0, // Add the startDelay prop with a default value of 0 seconds
                                   }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    startDelay?: number; // The delay before the animation starts
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    useEffect(() => {
        // Set up the animation with startDelay
        const animationStart = async () => {
            await new Promise((resolve) => setTimeout(resolve, startDelay * 1000)); // Convert startDelay to milliseconds
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
    }, [scope.current, startDelay]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white text-black opacity-0"
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
