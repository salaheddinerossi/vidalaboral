import React from "react";

interface LitUpBorderButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const LitUpBorderButton: React.FC<LitUpBorderButtonProps> = ({
                                                                 text = "Lit up borders",
                                                                 onClick,
                                                                 className = "",
                                                                 disabled = false,
                                                             }) => {
    return (
        <button
            className={`p-[3px] relative text-center ${className} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white text-xl hover:bg-transparent">
                {text} {/* Display dynamic button text */}
            </div>
        </button>
    );
};

export default LitUpBorderButton;
