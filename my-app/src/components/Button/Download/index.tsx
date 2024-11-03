import { DesktopItem } from "@/components/Navbar/Desktop/Item";
import { ReactNode } from "react";
import { FaAndroid } from "react-icons/fa";

type Props = {
    iconChildren?: ReactNode;
    text: string;
};

export function ButtonDownload({ iconChildren, text }: Props) {

    return(
        <div>
            <div className="flex items-center">
                <DesktopItem>
                    <div className="flex flex-row h-full w-full items-center gap-x-3">
                        {iconChildren ? iconChildren : null}
                        <span className="text-xl select-none">{text}</span>
                    </div>
                </DesktopItem>    
            </div>
        </div>
    )
}