"use client"; // Ensure this is a Client Component

import { motion } from "framer-motion";
import LitUpBorderButton from "@/app/components/ui/LitUpBorderButton";

interface AnimatedAeternityButtonProps {
    delay?: number; // Optional delay prop, default to 0 if not provided
}

const AnimatedAeternityButton: React.FC<AnimatedAeternityButtonProps> = ({
                                                                             delay = 0,
                                                                         }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: delay,
            }}
        >
            <a href="tel:919612316">
                <LitUpBorderButton
                    text="Contáctenos"
                    disabled={false}
                    className="my-4"
                />

            </a>
        </motion.div>
    );
};



export default AnimatedAeternityButton;
