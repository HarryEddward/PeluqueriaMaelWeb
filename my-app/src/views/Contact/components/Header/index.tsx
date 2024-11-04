'use client';

import { MarkedBox } from "@/components/BoxText/MarkedBox";

type Props = {};

export function Header({}: Props) {
    return (
        <header>
            <div className="flex items-center justify-center">
                <h1 className="text-center text-gray-200 font-POPPINS_poppins_black text-[10vw] flex">
                    <span>CONTACT</span>
                </h1>
            </div>
            <div className="flex items-center justify-center my-6">
                <h2 className="text-2xl text-white font-RALEWAY_raleway_medium">
                    <MarkedBox>
                        <span className="bg-gradientBlackTextB bg-clip-text text-transparent">
                            Contacta sin problemas
                        </span>    
                    </MarkedBox>
                    <span className="opacity-45"> por alguna propuesta de patrocinio o queja rellenando el formulario.</span>
                </h2>
            </div>
            
        </header>
    );
}
