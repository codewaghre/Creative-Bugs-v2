import { MainContentContainer } from "@/components/Common/index"
import SEO from "@/lib/SEO"

import { AboutPage, Service, Team } from "@pages/index"


export const About = () => {
    return (

        <>

            <SEO
                title="About Us | Creative Bugs Media - Video Editing & Production in Mumbai"
                description="Learn about Creative Bugs Media, a Mumbai-based creative team specializing in video editing, production, reels, and brand storytelling that drives growth."
                url="https://creativebugsmedia.com/about"

            />

            <MainContentContainer>
                <AboutPage />
                <Team />
                <Service />
            </MainContentContainer>
        </>

    )
}

