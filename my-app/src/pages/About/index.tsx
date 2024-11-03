import { PageAniamtion1 } from "@/components/Animations/Page/PageAnimation1"
import { ViewAbout } from "@/views/About"

type Props = {

}

export function PageAbout() {

    return(
        <div>
            <PageAniamtion1>
                <ViewAbout/>
            </PageAniamtion1>
        </div>
    )
}