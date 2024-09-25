"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0, duration = 0.5 }) => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
        >
            {children} {/* Render the passed children here */}
        </motion.div>
    );
};

export default AnimatedText;
