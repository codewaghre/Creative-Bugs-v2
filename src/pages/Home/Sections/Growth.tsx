import { cn } from "@/lib/cn"

import { Heading, HeadingContentContainer, CardContainer, CardHeading, CardContentContainer, CardBannerContentContainer, TopCornorBox, } from "@/components/Common/index"

import { statsCards } from "@/data/index"



export const Growth = () => {
    return (

        <section id="growth" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Numbers Don't Deceive" paragraph="From total views to happy clients and videos delivered, these numbers reflect the growth of our creative journey." />
            </HeadingContentContainer>

            <CardContainer
                className={cn("grid grid-cols-1 place-items-center gap-4 mx-auto px-3 w-full pb-20",
                    "card-md:w-full card-md:px-4",
                    "card-lg:grid-cols-3 card-lg:gap-4 card-lg:w-6xl card-lg:px-8")}>

                {
                    statsCards.map((item) => {

                        const Content = item.content

                        return (

                            <CardContentContainer
                                aria-labelledby={`card-heading-${item.id}`}
                                aria-describedby={`card-description-${item.id}`}
                                key={item.id}
                                className={cn(
                                    "flex flex-col items-center border border-border-default rounded-md overflow-hidden max-w-74",
                                    "card-md:flex-row card-md:items-start card-md:max-w-2xl",
                                    "card-lg:flex-col card-lg:w-full",

                                )}>
                                <CardHeading
                                    className={"card-md:w-[40%]"}
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                    id={item.id}
                                />

                                <CardBannerContentContainer className={cn("bg-bg-secondary w-full overflow-hidden ",
                                    "card-md:w-[60%]",
                                    "card-lg:w-full")}>

                                    <Content />
                                </CardBannerContentContainer>

                            </CardContentContainer>

                        )
                    })
                }

            </CardContainer>

            <TopCornorBox />

        </section >

    )
}


