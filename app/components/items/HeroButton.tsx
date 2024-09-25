"use client"; // Ensure this is a Client Component

import { motion } from "framer-motion";
import LitUpBorderButton from "@/app/components/ui/LitUpBorderButton";

interface AnimatedAeternityButtonProps {
    delay?: number; // Optional delay prop, default to 0 if not provided
}

const AnimatedAeternityButton: React.FC<AnimatedAeternityButtonProps> = ({
                                                                             delay = 0, // Default delay value
                                                                         }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state
            transition={{
                duration: 0.5, // The animation duration itself
                delay: delay, // Delay from props
            }}
        >
            <LitUpBorderButton
                text="Contáctenos"
                disabled={false}
                className="my-4"
            />
        </motion.div>
    );
};

export default AnimatedAeternityButton;
