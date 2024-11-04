'use client';

import { motion } from "framer-motion";

type Props = {};

export function Header({}: Props) {
    return (
        <header>
            <div className="flex items-center justify-center">
                <h1 className="text-center text-gray-200 font-POPPINS_poppins_black text-[10vw] flex">
                    <span>ACERCA</span>
                </h1>
            </div>
            <div className="flex items-center justify-center mt-6 relative">
                <h2 className="text-2xl text-secondary font-RALEWAY_raleway_medium text-center relative z-20">
                    <span className="z-50">La peluquería más moderna y avanzada de </span>
                    <div className="inline-block relative overflow-visible">
                        <div className="relative">
                            <motion.span
                                className="relative z-30 px-4"
                                initial={{ color: '#ffffff' }}
                                animate={{ color: '#000000' }}
                                transition={{
                                    duration: 5,
                                    type: "spring",
                                    stiffness: 45,
                                    damping: 32,
                                }}
                            >
                                toda Mallorca.
                            </motion.span>
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-white px-3 z-20"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 45,
                                    damping: 32,
                                }}
                            />
                        </div>
                        <motion.div
                            className="h-1 w-full bg-gradientPrimaryL relative z-20"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{
                                type: "spring",
                                stiffness: 45,
                                damping: 32,
                            }}
                        />
                        {/* Imagen posicionada debajo del texto */}
                        <div className="absolute -top-[50px] -right-[45px] z-10">
                            <img
                                className="h-40 opacity-100"
                                src="/img/mallorca.png"
                                alt="Mallorca"
                            />
                        </div>
                    </div>
                </h2>
            </div>
        </header>
    );
}
