import { MainContentContainer } from "@/components/Common/index"
import { Hero, Growth, WorkFlow, Contact, FAQ, AboutPage } from "@pages/index"


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

