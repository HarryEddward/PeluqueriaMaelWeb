import { PageAniamtion1 } from "@/components/Animations/Page/PageAnimation1"
import { ViewContact } from "@/views/Contact"

type Props = {

}

export function PageContact() {

    return(
        <div>
            <PageAniamtion1>
                <ViewContact/>
            </PageAniamtion1>
        </div>
    )
}