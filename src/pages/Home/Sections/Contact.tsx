
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"


import { BannerContainer, Button, CardContainer, CardContentContainer, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index"

import { AskAQuestion, BookAMeeting } from "@/components/ContactCard/index"
import { bannerCardsData } from "@/data/index"



export const Contact = () => {

    return (
        <section id="contact" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Connect With Us"
                    paragraph="If you're building something serious and need content that reflects that let's talk. No pitching, no packages. Just a focused conversation about what you're trying to do."
                />
            </HeadingContentContainer>


            <CardContainer className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20",
                "card-md:w-full card-md:px-4",
                "card-lg:grid-cols-2 card-lg:w-6xl card-lg:px-8")}>



                {
                    bannerCardsData.map((card) => (
                        <CardContentContainer
                            key={card.id}
                            className={cn(
                                "bg-bg-primary border-border-default border-b overflow-hidden",
                                card.id === 1 && "card-lg:border-r card-lg:border-y",
                                card.id === 2 && "card-lg:border-y"
                            )}
                        >
                            {/* Heading */}
                            <div
                                className={cn(
                                    "py-4 px-2",
                                    "card-md:px-6 card-md:text-center",
                                    "card-lg:text-start"
                                )}
                            >
                                <h2
                                    tabIndex={0}
                                    aria-describedby="meeting-desc"
                                    className={cn(
                                        "text-md font-semibold text-text-primary",
                                        "card-md:text-base",
                                        "card-lg:text-lg"
                                    )}
                                >
                                    {card.head.heading}
                                </h2>

                                <p id="meeting-desc" className="text-xs pt-1 text-text-secondary card-md:text-sm">
                                    {card.head.subHeading}
                                </p>
                            </div>

                            {/* CTA */}
                            <div
                                className={cn(
                                    "flex flex-row gap-2 items-center text-left py-2 px-2",
                                    "card-md:px-6 card-md:justify-center",
                                    "card-lg:justify-start"
                                )}
                            >
                                <Link to={card.route}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${card.cta.text}, only ${card.cta.steps}, opens in new page`}>
                                    <Button text={card.cta.text} varient="dark" />
                                </Link>

                                <p aria-hidden="true" className="text-text-secondary text-xs">
                                    {card.cta.steps}
                                </p>
                            </div>

                            {/* Features */}
                            <BannerContainer>
                                {card.id === 1 ? (
                                    <BookAMeeting featuresdata={card.features} />
                                ) : (
                                    <AskAQuestion featuresQuestiondata={card.features} />
                                )}
                            </BannerContainer>
                        </CardContentContainer>
                    ))
                }

            </CardContainer >

            <TopCornorBox />

        </section >
    )
}

