import { tw } from "twind"
import { NavbarDesktop } from "./Desktop"
import { NavbarResponsive } from "./Responsive"

type Props = {

}

export function Navbar({}: Props) {

    return(
        <nav>

            <div className="hidden md:block">
                <NavbarDesktop/>
            </div>
            

            <div className="block md:hidden">
                <NavbarResponsive/>
            </div>
            

        </nav>
    )
}