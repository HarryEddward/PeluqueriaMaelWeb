'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { ResponsiveItem } from "./Item";

type Props = {};

export function NavbarResponsive({}: Props) {
    const [isTaped, setIsTaped] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsTaped(!isTaped);
    };

    return (
        <div>
            {/* Fondo que cubre toda la pantalla cuando está abierto */}
            <motion.div
                className="absolute bg-black top-0 left-0 w-full h-full pt-20 z-30"
                animate={{
                    width: isTaped ? "100%" : "0%", // Animación condicional
                    opacity: isTaped ? 1 : 0, // Hace que el contenido también se desvanezca
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
            >
                <div className="bg-black absolute text-white p-5 w-full overflow-hidden">
                    <div className="flex flex-col">
                        <ResponsiveItem/>
                    </div>
                </div>
            </motion.div>

            {/* Ícono del menú */}
            <div className="flex w-full justify-start p-6">
                <motion.div
                    className="flex flex-col gap-y-3 cursor-pointer z-40"
                    onClick={toggleMenu}
                >
                    {/* Línea superior */}
                    <motion.div
                        className="h-1 w-[3.5rem] bg-white rounded-full"
                        animate={isTaped ? {
                            rotate: 45,
                            y: 8,
                        } : {
                            rotate: 0,
                            y: 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    
                    {/* Línea del medio */}
                    <motion.div
                        className="h-1 w-[3.5rem] bg-white rounded-full"
                        animate={{
                            opacity: isTaped ? 0 : 1, // Se oculta cuando está abierto
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Línea inferior */}
                    <motion.div
                        className="h-1 w-[3.5rem] bg-white rounded-full"
                        animate={isTaped ? {
                            rotate: -45,
                            y: -8,
                        } : {
                            rotate: 0,
                            y: 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
