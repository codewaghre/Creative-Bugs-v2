
import { cn } from "@/lib/cn"

import { BannerContainer, CardBannerContentContainer, CardContainer, CardContentContainer, CardHeading, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index";

import { PreProductionContent, StrategicContent, PostProductionContent } from "@/components/WorkflowCard/index";


export const WorkFlow = () => {
    return (
        <section id="workflow" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Our Creative Workflow"
                    paragraph="Most agencies make you manage the process. We don't. Here's what it looks like when you hand it over to us." />
            </HeadingContentContainer>

            <CardContainer className={cn("grid grid-cols-1 place-items-center gap-4 mx-auto px-3 w-full pb-20",
                "card-md:w-full card-md:px-4 ",
                "card-lg:grid-cols-2 card-lg:gap-4 card-lg:w-6xl card-lg:px-8")}>

                {/* card-1 */}
                <CardContentContainer
                    className={cn("border border-border-default w-74 rounded-sm ",
                        "card-md:w-2xl",
                        "card-lg:w-full"
                    )}>

                    <CardBannerContentContainer>

                        <BannerContainer>
                            <StrategicContent />
                        </BannerContainer>

                    </CardBannerContentContainer>


                    <CardHeading
                        heading="Strategic Content Planning"
                        paragraph="We specialize in crafting effective content strategies that drive your brand forward. Our careful planning ensures your content resonates with your audience and achieves your goals"
                    />

                </CardContentContainer>


                {/* card-2 */}
                <CardContentContainer
                    className={cn("border border-border-default w-74 card-md:w-2xl card-lg:max-w-full rounded-sm  overflow-hidden")}>

                    <CardBannerContentContainer>

                        <BannerContainer>
                            <PreProductionContent />
                        </BannerContainer>

                    </CardBannerContentContainer>


                    <CardHeading className="z-40 bg-bg-primary  relative"
                        heading="Pre Production & Execution Planning"
                        paragraph="Turning your ideas into engaging visual stories. Our skilled team handles every step, from planning to shooting in the studio or on location, creating high-quality videos that connect with your audience" />

                </CardContentContainer>


                {/* card-3 */}
                <CardContentContainer
                    className={cn("border border-border-default flex flex-col-reverse w-74  rounded-sm overflow-hidden",
                        "card-md:w-2xl ",
                        "card-lg:w-full card-lg:flex-row card-lg:col-span-2"
                    )}>

                    <div className={cn("flex flex-col justify-between items-start text-left gap-2 z-40 relative",
                        "card-lg:w-200"
                    )}>
                        <CardHeading className="z-40  bg-bg-primary relative"
                            heading="Post Production Content Planning"
                            paragraph="We transform raw footage into captivating videos that elevate your brand. Our skilled editors enhance visuals, perfect sound quality, and add dynamic effects to ensure every frame aligns with your vision. Whether it's a promotional video or a social media Content" />

                        <div >
                            <p tabIndex={0} aria-label="Get your content delivery with in 48 - 72 hrs" className={cn("text-xs px-5 pb-5", "card-md:px-6",)}>Get your content delivery with in <span className="text-text-head-two font-semibold"> 48 - 72 hrs</span></p>
                        </div>
                    </div>


                    <CardBannerContentContainer
                        className={cn("flex flex-col gap-1 h-78 z-40  relative overflow-hidden",
                            "card-md:",
                            "card-lg:w-full",
                        )}>

                        <BannerContainer>
                            <PostProductionContent />
                        </BannerContainer>

                    </CardBannerContentContainer>

                </CardContentContainer>

            </CardContainer>

            <TopCornorBox />
        </section >
    )
}











