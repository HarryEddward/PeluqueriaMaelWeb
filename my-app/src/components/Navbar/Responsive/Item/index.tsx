'use client';

import { navbarItems } from "@/constants";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion"

type Props = {
}

export function ResponsiveItem({}: Props) {

    return(
        <div className="">
            {navbarItems.map((item, i) => {
                return(
                    <div
                    className="my-5"
                    key={i}
                    >
                        <Link href={item[1]}>
                            <motion.div
                            className="flex"
                            initial={{
                                translateX: 0
                            }}
                            whileTap={{
                                translateX: 15
                            }}
                            >
                                <span className="text-5xl font-POPPINS_poppins_black ml-5">
                                    {item[0]}
                                </span>
                            </motion.div>
                        </Link>
                    </div>
                )
            })}
            
        </div>
    )
}