import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Header } from "./components/Header"

type Props = {

}

export function ViewProducts({}: Props) {

    return(
        <div>
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
    )
}