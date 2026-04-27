
import { BannerHeading } from "@components/Common/BannerHeading"
import { BannerConentContainer, BannerContainer, BannerHeadingContainer } from "@components/Common/index"

import { cn } from "@/lib/cn"
import { BrandContentData } from "@/data/GrowthSection"


export const BrandContent = () => {
    return (
        <>
            <BannerContainer className="flex flex-col justify-center items-center">

                <BannerHeadingContainer>
                    <BannerHeading heading="65+" paragraph="Our Clients" />
                </BannerHeadingContainer>


                <BannerConentContainer
                    className={cn("flex flex-col items-center justify-center w-84 border-x border-t border-border-default rounded-t-md px-2 bg-surface-gradient-one h-66",
                        "card-md:w-94",
                        "card-lg:w-84",
                    )}>

                    <div className="min-h-10">
                        <h4 tabIndex={0} aria-label="Accross industires Consistance Client Growth" className="text-xs py-4 card-md:text-sm">Across industries <span className="text-text-head-two font-semibold">consistent</span> client growth</h4>
                    </div>

                    <Skelotone />
                </BannerConentContainer>
            </BannerContainer >

        </>
    )
}



const Skelotone = () => {

    return (
        <div className="py-4 flex justify-center items-center gap-2">
            {BrandContentData.map((item) => {

                const Icon = item.icon
                return (

                    <div
                        key={item.id}
                        className={cn("flex flex-col gap-3 justify-center items-center  text-center border border-border-default rounded-md py-5 w-32 h-45",
                            "card-md:w-38",
                            "card-lg:w-36"

                        )}>
                        <div>
                            <Icon className="w-8 h-8" />
                        </div>
                        <h5 className={cn("text-sm font-semibold text-text-primary")}>{item.title}</h5>
                        <p className={cn("text-xs text-text-secondary px-2")}>{item.description}</p>
                    </div >

                )
            })}
        </div >

    )
}