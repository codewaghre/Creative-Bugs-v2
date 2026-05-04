import { BottomCornorBox, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index"
import { cn } from "@/lib/cn"



export const WorkHome = () => {
    return (

        <div className={cn("border-t border-x border-border-default relative mt-0 card-md:mt-1")}>

            <div className="pb-1">
                <HeadingContentContainer>
                    <Heading heading="Meet Creative Teams" paragraph="Explore the projects where creativity, strategy, and storytelling come together to deliver impactful results." />
                </HeadingContentContainer>
            </div>


            <TopCornorBox />
            <BottomCornorBox />

        </div >
    )
}
