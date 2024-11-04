import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function MarkedBox({ children }: Props) {


    const progresSubtitleAnimation = useAnimation();
    function progresSubtitleAnimationHidden() {
        progresSubtitleAnimation.start({
        width: '0%'
        });
    }
    function progresSubtitleAnimationVisible() {
        progresSubtitleAnimation.start({
        width: '100%'
        });
    }

    return(
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
                {children}
              </motion.span>
              <motion.div
              className="absolute w-full h-full bg-white opacity-45 top-0 left-0 z-0"
              initial={{width: '0%'}}
              animate={progresSubtitleAnimation}
              />
            </motion.div>
    )
}