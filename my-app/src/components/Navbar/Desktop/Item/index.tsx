'use client';

import { SiHomepage } from "react-icons/si"
import {motion, useAnimation} from 'framer-motion';
import React from "react";

type Props = {
    text?: string;
    sizeText?: string;
    children?: React.ReactNode;
}

export function DesktopItem({ text, sizeText, children }: Props) {
    
    const borderBottom = useAnimation();

    const borderBottomVisible = () => borderBottom.start({ width: '100%' });
    const borderBottomHidden = () => borderBottom.start({ width: '0%' });
    
    return (
        <div>
            <motion.div
            className="flex flex-col align-middle px-5 py-3 realtive overflow-hidden z-10"
            onHoverStart={borderBottomVisible}
            onHoverEnd={borderBottomHidden}
            initial={{
                translateY: 1,
                borderWidth: 0
            }}
            whileHover={{
                translateY: 10,
                borderWidth: 1
            }}
            whileTap={{
                translateY: 10
            }}
            >
                <motion.div
                initial={{opacity: 0}}
                whileHover={{
                    opacity: 1
                }}
                className="absolute w-full h-full z-0 top-0 left-0 bg-gradient-to-b to-[rgb(0,255,255)] from-black opacity-10"
                />
                <div className="z-10">
                    <motion.span
                    initial={{
                        color: "rgb(255, 255, 255)"
                    }}
                    whileHover={{
                        color: "rgb(210, 210, 210)"
                    }}
                    whileTap={{
                        color: "rgb(210, 210, 210)"
                    }}
                    className={`${(sizeText !== "") ? sizeText : "text-lg"}`}>
                        <div>
                            {text ? text : children}
                        </div>
                        
                    </motion.span>

                    {/*<motion.div
                    className="w-auto h-1 bg-yellow-300"
                    initial={{
                        width: 0,
                        height: heightBorder
                    }}
                    animate={borderBottom}
                    />*/}
                </div>
                
                
            </motion.div>
        </div>
    )
}