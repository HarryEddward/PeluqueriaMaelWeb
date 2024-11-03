'use client'

import { motion, useAnimation } from "framer-motion"
import React from "react"

type Props = {
    children: React.ReactNode
}

export function PageAniamtion1({ children }: Props) {


    return(
        <motion.div
        className="w-full h-full"
        initial={{
            filter: 'blur(20px)',
            scale: 1.2
        }}
        animate={{
            filter: 'blur(0px)',
            scale: 1
        }}
        transition={{
            duration: 1,
        }}
        >
            <motion.div
            className="absolute bg-black h-full w-full z-50 top-0 left-0"
            initial={{
                width: '100%',
            }}
            animate={{
                width: ['80%', '20%', '30%', '0%'],
                filter: 'blur(0px)'
            }}
            transition={{
                duration: 1,
            }}
            />
            {children}
        </motion.div>
    )
}