
import { cn } from "@/lib/cn"

import { AddIcon } from "@/assets/index"
import { ServiceContentColoBoxData, FeatureListData } from "@/data/index"
import { BannerConentContainer, BannerContainer, BannerHeadingContainer, BannerHeading } from "@/components/Common/index"

export const ServiceContent = () => {
    return (
        <>
            <BannerContainer className="flex flex-col justify-center items-center">
                <BannerHeadingContainer >
                    <BannerHeading heading="6000+" paragraph="Edited Videos" />
                </BannerHeadingContainer>

                <BannerConentContainer
                    className={cn("flex flex-col items-center justify-center w-84 border-x border-t border-border-default rounded-t-md px-2 bg-surface-gradient-one h-66",
                        "card-md:w-94",
                        "card-lg:w-84",
                    )}>
                    <div className="min-h-10">
                        <h4 tabIndex={0} aria-label="Crafted for Every Sector With Precision" className="text-xs py-4 card-md:text-sm">Crafted for Every Sector<span className="text-text-head-two font-semibold"> With Precision</span></h4>
                    </div>

                    <Skelotone />
                </BannerConentContainer>
            </BannerContainer>

        </>
    )
}

const Skelotone = () => {

    return (
        <div className="py-4 flex flex-col justify-center gap-2 flex-1 ">

            <div className="flex items-center gap-1 mb-2 px-3  relative">

                {ServiceContentColoBoxData.map((shade, index) => {
                    return (
                        <div
                            key={index + 1}
                            className={cn("w-12 h-8",
                                "card-md:w-14",
                                shade
                            )}>

                        </div>
                    )
                })}

                {/* Right Side Circle */}
                <div className="absolute right-0 w-8 h-8 bg-bg-primary rounded-full flex items-center justify-center">

                    {/* Inner Small Circle */}
                    <div className="absolute w-6 h-6 bg-bg-secondary rounded-full"></div>

                    {/* Icon */}
                    <AddIcon className="relative z-10 w-4 h-4" />

                </div>
            </div>

            <div className={cn("flex flex-col justify-center gap-3 text-start px-3",
                "card-md:px-2.5"
            )}>

                {FeatureListData.map((item) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={item.id}
                            className="flex items-center justify-items-start gap-2">

                            <Icon />

                            <p className={cn("text-xs text-text-secondary hover:text-text-primary",
                                "card-md:text-sm"
                            )}>
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}