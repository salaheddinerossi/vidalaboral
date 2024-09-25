// src/components/Button.tsx
import React from "react";
import {cn} from "../../lib/util"

export const HeroButton = ({
                           children,
                           className,
                           onClick,
                       }: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors",
                className
            )}
        >
            {children}
        </button>
    );
};
