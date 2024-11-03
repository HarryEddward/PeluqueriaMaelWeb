'use client'

import React from "react";
import {motion, useAnimation} from 'framer-motion';
import { FaAndroid } from "react-icons/fa";

export function Button() {

    const animateBottomBorder = useAnimation();
    function animateBottomBorderVisible() {
        animateBottomBorder.start({
            width: '100%',
            transition: {
                duration: .3,
            }
        });
    }
    function animateBottomBorderHidden() {
        animateBottomBorder.start({
            width: '0%'
        });
    }


    const animateText = useAnimation();
    function animateTextVisible() {
        animateText.start({
            color: '#000000',
            transition: {
                duration: .3,
            }
        });
    }
    function animateTextHidden() {
        animateText.start({
            color: '#ffffff'
        });
    }

    return(
        <div className="text-xl">
            
            <motion.div>
                <motion.div
                className="flex border-2 relative rounded-full align-middle overflow-hidden"
                onHoverStart={() => {
                    animateBottomBorderVisible();
                    animateTextVisible();
                }}
                onHoverEnd={() => {
                    animateBottomBorderHidden();
                    animateTextHidden();
                }}
                >
                    <div className="flex flex-col">
                        <div className="p-4 flex z-30 ">
                            
                            <motion.span
                            initial={{
                                color: '#ffffff',
                            }}
                            animate={animateText}
                            >
                                Android
                            </motion.span>
                        </div>
                        <motion.div
                        className="absolute w-full z-10 h-2 bg-yellow-300 rounded-full"
                        initial={{
                            width: '0%',
                            zIndex: 10
                        }}
                        animate={animateBottomBorder}
                        />
                        <motion.div
                        className="absolute w-full z-0 h-full bg-white rounded-full"
                        initial={{
                            width: '0%'
                        }}
                        animate={animateBottomBorder}
                        />
                        <div className="absolute h-full w-4 bg-white right-0"/>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}   