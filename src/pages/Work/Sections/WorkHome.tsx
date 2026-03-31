import { BottomCornorBox, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common"
import { cn } from "@/lib/cn"



export const WorkHome = () => {
    return (

        <div className={cn("border-t border-x border-border-default relative")}>

            <div className="pb-1">
                <HeadingContentContainer>
                    <Heading heading="Meet Creative Teamss" paragraph="We help founders build trust and authority through strategic video content  not just visuals, but results." />
                </HeadingContentContainer>
            </div>


            <TopCornorBox />
            <BottomCornorBox />

        </div >
    )
}
