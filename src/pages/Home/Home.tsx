import { MainContentContainer } from "@/components/Common/index"
import { Hero } from "@pages/index"
import { Growth } from "@pages/index"
import { WorkFlow } from "@pages/index"
import { Contact } from "@pages/index"
import { FAQ } from "@pages/index"
import { AboutPage } from "@pages/index"


export const Home = () => {
    return (
        <>
            <MainContentContainer className="relative">
                <Hero />
                <Growth />
                <WorkFlow />
                <Contact />
                <AboutPage />
                <FAQ />

            </MainContentContainer>
        </>
    )
}

