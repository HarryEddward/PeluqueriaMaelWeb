import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Header } from "./components/Header"
import { Form } from "./components/Form"

type Props = {

}

export function ViewContact() {

    return(
        <div>
            <Navbar/>
            <Header/>
            <Form/>
            <Footer/>
        </div>
    )
}