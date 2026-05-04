
import { MainContentContainer } from "@/components/Common/index"
import SEO from "@/lib/SEO"
import { WorkHome, Clients } from "@pages/index"


export const Work = () => {
    return (

        <>

            <SEO
                title="Our Work | Video Editing Portfolio Mumbai - Creative Bugs Media"
                description="Explore our video editing portfolio including reels, ads, and brand content. See how we help businesses grow through creative visuals."
                url="https://creativebugsmedia.com/work"
            />

            <MainContentContainer className="relative">

                <WorkHome />
                <Clients />

            </MainContentContainer>
        </>

    )
}

