import { PageAniamtion1 } from "@/components/Animations/Page/PageAnimation1"
import { ViewProducts } from "@/views/Products"

type Props = {

}

export function PageProducts() {

    return(
        <div>
            <PageAniamtion1>
                <ViewProducts/>
            </PageAniamtion1>
        </div>
    )
}