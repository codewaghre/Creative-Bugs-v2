import { MainContentContainer } from "@/components/Common/index"

import { AboutPage, Service, Team } from "@pages/index"


export const About = () => {
    return (
        <MainContentContainer>
            <AboutPage />
            <Team />
            <Service />
        </MainContentContainer>
    )
}

