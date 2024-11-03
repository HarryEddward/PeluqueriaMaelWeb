import { ButtonDownload } from "@/components/Button/Download";
import { ReactNode } from "react";
import { FaAndroid, FaAppStore, FaAppStoreIos, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

export const logotypeTitle: string = "PELUQUERIAEGO";
export const navbarItems: [string, string][] = [
    ['Home', '/'],
    ['About', '/about'],
    ['Products', '/products'],
    ['Contact', '/contact']
];

const sizeSocialMediaItems: number = 24;
export const socialMediaItems: [ReactNode, string][] = [
    [<FaGithub size={sizeSocialMediaItems} className="hover:text-gray-400 transition duration-200"/>, 'https://github.com/HarryEddward/PeluqueriaMaelWeb'],
    [<FaFacebook size={sizeSocialMediaItems} className="hover:text-blue-600 transition duration-200"/>, 'https://www.facebook.com'],
    [<FaInstagram size={sizeSocialMediaItems} className="hover:text-pink-500 transition duration-200"/>, 'https://www.instagram.com'],
    [<FaTwitter size={sizeSocialMediaItems} className="hover:text-blue-400 transition duration-200"/>, 'https://www.x.com']
];

const nameApp: string = "calculator";
export const downloadAppItems: [ReactNode, string][] = [
    [
        <ButtonDownload text="Android" iconChildren={<FaAndroid/>}/>,
        `/uploads/android/${nameApp}.apk`
    ],
    [
        <ButtonDownload text="Apple" iconChildren={<FaAppStoreIos/>}/>,
        `/uploads/ios/${nameApp}.ipa`
    ],
]