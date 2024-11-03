import { socialMediaItems } from "@/constants";
import { Link } from "@/i18n/routing";
import { FaExternalLinkAlt, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {};

export function Footer({}: Props) {
    return (
        <footer className="bg-gray-900 py-10 mt-10 text-gray-300">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                {/* Contenedor de las columnas */}
                <div className="flex flex-wrap justify-between">
                    {/* Primera columna */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Legal & Terms</h4>
                        <div className="flex items-center text-sm my-4">
                            <FaExternalLinkAlt/>
                            <a href="/legal" className="ml-3" target="_blank" rel="noopener noreferrer">
                                <span className="border-b-2">Legal conditions and terms to use inside of the web app page</span>
                            </a>
                        </div>
                        <p className="text-sm">Información relevante sobre términos legales, condiciones y privacidad.</p>
                    </div>

                    {/* Segunda columna */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Social Media</h4>
                        <div className="flex gap-5">
                            
                            {socialMediaItems.map((item, i) =>{
                                
                                return(
                                    <div key={i}>
                                        <Link href={`${item[1]}`} target="_blank" rel="noopener noreferrer">
                                            {item[0]}
                                        </Link>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>

                    {/* Tercera columna */}
                    <div className="w-full sm:w-full md:w-1/3 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                        <textarea 
                            className="w-full h-24 px-4 pt-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:accent-accentPrimary" 
                            placeholder="Send your inquery..."
                        ></textarea>
                        <button className="mt-4 bg-accentSecondary hover:bg-accentPrimary text-white font-semibold py-2 px-4 transition duration-200 w-full">
                            Send
                        </button>
                    </div>
                </div>
                
                {/* Footer bottom */}
                <div className="border-t border-gray-700 pt-6 mt-10 text-center text-sm">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} PeluqueriaEGO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
