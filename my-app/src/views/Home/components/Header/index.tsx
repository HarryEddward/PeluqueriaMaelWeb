'use client';

import { motion, useAnimation } from "framer-motion";
import { DesktopItem } from "../../../../components/Navbar/Desktop/Item";
import { FaAndroid, FaAppStoreIos } from "react-icons/fa";
import { downloadAppItems } from "@/constants";

type Props = {};

export function Header({}: Props) {

  const progresSubtitleAnimation = useAnimation();
  function progresSubtitleAnimationHidden() {
    progresSubtitleAnimation.start({
      width: '0%'
    })
  }
  function progresSubtitleAnimationVisible() {
    progresSubtitleAnimation.start({
      width: '100%'
    })
  }

  const text = "PELUQUERIA";
  const lastText = "EGO";
  const letters = text.split("");

  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Aplica un delay escalonado
        duration: 0.5,
      },
    }),
  };

  return (
    <header className="my-5">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-gray-200 font-POPPINS_poppins_black text-[10vw] flex">
          {/* Renderiza la parte de "PELUQUERIA" */}
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              custom={index} // Pasamos el índice para el delay
            >
              {letter}
            </motion.span>
          ))}
          {/* Renderiza "EGO" con el degradado */}
          <motion.span
            className="inline-block bg-gradient-to-t from-black to-[rgb(0,255,255)] bg-clip-text text-transparent ml-1" // ml-1 agrega un pequeño margen
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            custom={letters.length} // Ajusta el índice para la animación
          >
            {lastText}
          </motion.span>
        </h1>
      </div>
      <div className="flex w-full justify-center mt-4 relative">
      <motion.div
        initial={{
            width: 0.5
        }}
        whileHover={{
            width: 1, // Cambiar la altura al pasar el ratón
        }}
        className="absolute top-0 left-0 bg-red-500 w-full"
        />
        <h2 className="text-center text-2xl font-RALEWAY_raleway_medium">
            <span className="opacity-45">What hairdresser do you not have to notify and...</span>
            <motion.div
            className="inline-block p-4 ml-1 sm:mt-4"
            initial={{
              translateY: 1,
              borderWidth: 0,
            }}
            whileHover={{
              translateY: -10,
              borderWidth: 2,
            }}
            onHoverStart={progresSubtitleAnimationVisible}
            onHoverEnd={progresSubtitleAnimationHidden}
            whileTap={{
              translateY: -10,
              borderWidth: 2
            }}
            >
              
              <motion.span
              className="ml-2 border-b-4 border-[rgb(0,255,255)] bg-gradient-to-t from-slate-500 to-white bg-clip-text text-transparent z-50"
              >
                  waste time making a appointment?
              </motion.span>
              <motion.div
              className="absolute w-full h-full bg-white opacity-45 top-0 left-0 z-0"
              initial={{width: '0%'}}
              animate={progresSubtitleAnimation}
              />
            </motion.div>
            
        </h2>
      </div>
      <section className="flex justify-center mt-10">
        
        <div className="flex flex-col border-2 p-5 ">
            <div className="border-b-2 text-xl font-POPPINS_poppins_bold">
                Client
            </div>
            <div className="flex p-5 gap-x-3">


              {downloadAppItems.map((item, i) => {
                
                return(
                  <div key={i}>
                    <a href={item[1]} download={true}>
                      {item[0]}
                    </a>
                  </div>
                )
              })}
            </div>
        </div>
        
      </section>
    </header>
  );
}
