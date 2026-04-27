import { ViewsGraph } from "@/assets"
import { BannerHeading } from "@components/Common/index"
import { BannerConentContainer, BannerContainer, BannerHeadingContainer } from "@components/Common/index"
import { cn } from "@/lib/cn"

export const ViewsCount = () => {
    return (
        <>
            <BannerContainer className="flex flex-col justify-between items-center">
                <BannerHeadingContainer>
                    <BannerHeading heading="1 Billion+" paragraph="Views Generate" />
                </BannerHeadingContainer>

                <BannerConentContainer
                    className={cn("flex flex-col items-center justify-center w-84 border-x border-t border-border-default rounded-t-md px-2 bg-surface-gradient-one h-66",
                        "card-md:w-94",
                        "card-lg:w-84",
                    )}>

                    <div className="min-h-10 ">
                        <h4 tabIndex={0} aria-label="Accross all platform +245% growth in a year" className="text-xs py-4 card-md:text-sm">Across all platforms <span className="text-text-head-two font-semibold">+245%</span> in a year</h4>
                    </div>

                    <Skelotone />
                </BannerConentContainer>
            </BannerContainer>

        </>
    )
}

const Skelotone = () => {

    return (
        <div className="py-4 flex-1 h-45">
            <ViewsGraph className="w-70  card-md:w-full card-lg:w-full" />
        </div>
    )
}