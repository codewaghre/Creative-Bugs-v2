import { MainContentContainer } from "@/components/Common"
import { AboutPage } from "../Home/Sections/About"
import { Team } from "./Sections/Team"
import Service from "./Sections/Service"


export const About = () => {
    return (
        <MainContentContainer>
            <AboutPage />
            <Team />
            <Service />
        </MainContentContainer>
    )
}

