import { PageAniamtion1 } from "@/components/Animations/Page/PageAnimation1"
import { ViewSchedule } from "@/views/Schedule"

type Props = {

}

export function PageSchedule({}: Props) {

    return(
        <div>
            <PageAniamtion1>
                <ViewSchedule/>
            </PageAniamtion1>
        </div>
    )
}