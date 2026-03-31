import { MainContentContainer } from "@/components/Common"
import { WorkHome } from "@pages/index"
import { Clients } from "./Sections/Clients"



export const Work = () => {
    return (

        <MainContentContainer className="relative">

            <WorkHome />
            <Clients />

        </MainContentContainer>
    )
}

