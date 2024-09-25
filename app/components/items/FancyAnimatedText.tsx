"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}

const FancyAnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0, duration = 0.3 }) => {
    const fancyVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0, // Move to its normal position
            transition: {
                type: "spring", // Adds a bouncy effect
                stiffness: 500,
                damping: 30,
                duration: duration, // Fast duration
                delay: delay, // Start delay
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fancyVariants}
        >
            {children} {/* Render the passed children here */}
        </motion.div>
    );
};

export default FancyAnimatedText;
