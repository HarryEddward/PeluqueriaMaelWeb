import { InputStyle1 } from "@/components/Input/Style1";
import { DesktopItem } from "@/components/Navbar/Desktop/Item";
import { TextareaStyle1 } from "@/components/Textarea/Style1";

type Props = {};

export function Form({}: Props) {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-lg sm:min-w-[300px] md:min-w-[600px] border-white border-2 p-4 bg-gray-950">
                {/* Contenido del formulario */}
                <div className="flex border-white border-b-2 pb-2">
                    <span className="text-2xl font-POPPINS_poppins_bold">Form</span>
                </div>
                {/* Otros elementos del formulario */}
                <div className="flex flex-col gap-y-8 mt-8">
                    <div>
                        <div className="flex w-full text-3xl font-POPPINS_poppins_black">
                            <span>Representation: </span>
                        </div>
                        <InputStyle1 placeholder="Hairdresser S.L. & Adrian Martin"/>
                    </div>
                    <div>
                        <div className="flex w-full text-3xl font-POPPINS_poppins_black">
                            <span>Email: </span>
                        </div>
                        <InputStyle1 placeholder="example@gmail.com"/>
                    </div>
                    <div>
                        <TextareaStyle1/>
                    </div>
                    <div className="flex flex-col justify-center border-t-2 text-center my-3 bt-6">

                        <DesktopItem text="Sumbit"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
