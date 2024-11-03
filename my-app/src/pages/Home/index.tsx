import { PageAniamtion1 } from "@/components/Animations/Page/PageAnimation1"
import { ViewHome } from "@/views/Home"

type Props = {

}

export function PageHome() {

    return(
        <div>
            <PageAniamtion1>
                <ViewHome/>    
            </PageAniamtion1>
        </div>
    )
}