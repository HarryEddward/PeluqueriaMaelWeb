'use client';

import { SiHomeadvisor, SiHomepage } from "react-icons/si"
import {motion} from 'framer-motion';
import { DesktopItem } from "./Item";
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { navbarItems } from "@/constants";

type Props = {}

export function NavbarDesktop({}: Props) {
    return (
        <div className="w-full py-5">
            <div className="flex justify-between items-center">
                
                <div className="ml-5">
                    
                    
                </div>

                <div className="flex font-RALEWAY_raleway_regular">
                    <div className="flex gap-x-7 text-lg">
                        {navbarItems.map((item, i) => {

                            return(
                                <div key={i}>
                                    <Link href={item[1]}>
                                        <button>
                                            <DesktopItem text={item[0]}/>
                                        </button>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="mr-5">
                    
                    
                </div>

            </div>
        </div>
    )
}
