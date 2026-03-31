
import { BannerContainer, Button, CardContainer, CardContentContainer, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common"
import { AskAQuestion, BookAMeeting } from "@/components/ContactCard"
import { AskAQuestionData, BookAMeetingData } from "@/data/ContactSection"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"




export const Contact = () => {


    const { features, head, cta } = BookAMeetingData

    const { features: askFeatures, head: askHead, cta: askCta } = AskAQuestionData




    return (
        <div className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Connect With Us"
                    paragraph="Connect with Creative Bugs Media to craft visually compelling content designed to inspire, engage, and elevate your brand."
                />
            </HeadingContentContainer>


            <CardContainer className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20",
                "card-md:w-full card-md:px-4",
                "card-lg:grid-cols-2 card-lg:w-6xl card-lg:px-8")}>


                {/* Card 1 */}
                <CardContentContainer className={cn("bg-bg-primary border-border-default border-y",
                    "card-lg:border-r card-lg:border-y"
                )}>

                    <div className={cn("py-4 px-2",
                        "card-md:px-6 card-md:text-center",
                        "card-lg:text-start")
                    }>
                        <h2 className={cn("text-md font-semibold text-text-primary",
                            "card-md:text-base",
                            "card-lg:text-lg"
                        )}>
                            {head.heading}
                        </h2>
                        <p className={cn("text-xs pt-1 text-text-secondary card-md:text-sm")}>{head.subHeading}</p>
                    </div>


                    <div className={cn("flex flex-row gap-2 items-center", "text-left py-2 px-2 ",
                        "card-md:px-6 card-md:justify-center",
                        "card-lg:justify-start")
                    }>


                        <Link to={"/bookameetingform"}>
                            <Button text={cta.text} varient="dark" />
                        </Link>


                        <p className="text-text-secondary text-xs">{cta.steps}</p>
                    </div>


                    <BannerContainer>
                        <BookAMeeting featuresdata={features} />
                    </BannerContainer>

                </CardContentContainer >

                {/* card 2 */}
                <CardContentContainer className={cn("bg-bg-primary overflow-hidden border-border-default border-b",
                    "card-md:border-b",
                    "card-lg:border-y"
                )}>

                    <div className={cn("py-4 px-2",
                        "card-md:px-6 card-md:text-center",
                        "card-lg:text-start")
                    }>
                        <h2 className={cn("text-md font-semibold text-text-primary",
                            "card-md:text-base",
                            "card-lg:text-lg"
                        )}>
                            {askHead.heading}
                        </h2>
                        <p className={cn("text-xs pt-1 text-text-secondary card-md:text-sm")}>{askHead.subHeading}</p>
                    </div>

                    <div className={cn("flex flex-row gap-2 items-center", "text-left py-2 px-2 ",
                        "card-md:px-6 card-md:justify-center",
                        "card-lg:justify-start")
                    }>
                        <Link to={"/contactform"} className="inline-block">
                            <Button
                                text={askCta.text}
                                varient="dark"
                            />
                        </Link>
                        <p className="text-text-secondary text-xs">{askCta.steps}</p>
                    </div>

                    <BannerContainer>
                        <AskAQuestion featuresQuestiondata={askFeatures} />
                    </BannerContainer>

                </CardContentContainer >


            </CardContainer >


            <TopCornorBox />

            {/* <BottomCornorBox /> */}

        </div >
    )
}

