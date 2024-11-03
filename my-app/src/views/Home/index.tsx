import { Footer } from "@/components/Footer"
import { Header } from "@/views/Home/components/Header"
import { Navbar } from "@/components/Navbar"
import { SpyScroll } from "@/components/SpyScroll"

type Props = {

}

export function ViewHome({}: Props) {

    return(
        <div>
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
    )
}