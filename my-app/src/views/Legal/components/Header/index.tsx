
type Props = {};

export function Header({}: Props) {

    return(
        <header>
            <div className="flex items-center justify-center">
                <h1 className="text-center text-gray-200 font-POPPINS_poppins_black text-[10vw] flex">
                    <span>LEGAL</span>
                </h1>
            </div>
            <div className="flex items-center justify-center mt-6">
                <h2 className="text-2xl text-secondary font-RALEWAY_raleway_medium">
                    <span>La peluquería mas moderna y avanzada de todo Mallorca</span>
                </h2>
            </div>
        </header>
    )
} 