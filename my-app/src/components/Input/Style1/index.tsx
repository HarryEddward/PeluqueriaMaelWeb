'use client';

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

type Props = {
    placeholder?: string;
};

export function InputStyle1({ placeholder }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    const containerAnimation = useAnimation();
    const blueBorderAnimation = useAnimation();

    // Manejar el cambio de animación cuando el input está enfocado
    const handleFocus = () => {
        setIsFocused(true);
        containerAnimation.start({ color: "#000" });
        blueBorderAnimation.start({ width: "100%" });
    };

    const handleBlur = () => {
        setIsFocused(false);
        containerAnimation.start({ color: "#FFF" });
        blueBorderAnimation.start({ width: "0%" });
    };

    return (
        <motion.div
            className="relative mt-4 flex w-full items-center"
            animate={containerAnimation}
        >
            <motion.div
                className="absolute inset-0 bg-white opacity-85"
                initial={{ width: "0%" }}
                animate={blueBorderAnimation}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                className="absolute bottom-0 h-1 bg-gradientPrimaryL z-30"
                initial={{ width: "0%" }}
                animate={blueBorderAnimation}
                transition={{ duration: 0.5 }}
            />
            <input
                type="text"
                className="relative z-10 w-full bg-transparent h-16 px-4 text-xl font-RALEWAY_raleway_regular focus:outline-none border-2 border-secondary"
                placeholder={placeholder ? placeholder : ""}

                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </motion.div>
    );
}
