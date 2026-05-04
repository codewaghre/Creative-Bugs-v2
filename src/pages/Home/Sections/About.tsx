import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"


import { EmailIcon, InstagramIcon, LinkedInIcon, QuotationLeft, QuotationRight } from "@/assets/index"
import { Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index"

import { AboutData } from "@/data/index"



export const AboutPage = () => {

    return (
        <section id="about" className={cn("border-t border-x border-border-default relative bg-bg-primary mt-0 card-md:mt-1")}>

            <TopCornorBox />

            <HeadingContentContainer >
                <Heading
                    heading="Who We Are"
                    paragraph="We help founders build trust and authority through strategic video content  not just visuals, but results." varient="light" />
            </HeadingContentContainer >


            <div className={cn("w-full px-4 mx-auto pb-10 space-y-3 relative", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")} >

                <div className="">
                    <QuotationLeft className="w-12 h-13 card-lg:w-22 card-lg:h-22" />
                </div>



                <div className="flex gap-10 mx-auto flex-wrap">

                    {/* Left Content */}
                    <div
                        className={cn(
                            "space-y-4 text-text-primary text-sm w-full",
                            "card-lg:text-base card-lg:max-w-2xl"
                        )}
                    >
                        {AboutData.about.description.map((item, index) => (
                            <p tabIndex={0} aria-label={`${item}`} key={index}>
                                {item}

                                {index === 2 && (
                                    <Link to={"/bookameetingform"} target="_blank">
                                        <button aria-label={AboutData.about.ctaText} className="text-icon-online font-semibold underline cursor-pointer underline-offset-2 ml-1">
                                            {AboutData.about.ctaText}
                                        </button>
                                    </Link>
                                )}
                            </p>
                        ))}
                    </div>

                    {/* Right Social */}
                    <div className="text-text-primary space-y-3">
                        <p tabIndex={0} aria-label="Social Accounts" className="text-xs card-md:text-sm card-lg:text-base">
                            {AboutData.socialsHeading}
                        </p>

                        {AboutData.socials.map((social) => (
                            <Link
                                key={social.id}
                                to={social.to}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${social.type} ${social.value} opens in new tab`}
                                className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary"
                            >
                                <div aria-hidden="true">
                                    {social.type === "instagram" && (
                                        <InstagramIcon className="size-3 card-md:size-4" />
                                    )}

                                    {social.type === "linkedin" && (
                                        <LinkedInIcon className="size-3 card-md:size-4" />
                                    )}

                                    {social.type === "email" && (
                                        <EmailIcon className="size-3 card-md:size-4" />
                                    )}
                                </div>

                                <p className="text-sm card-md:text-sm card-lg:text-base/0">
                                    {social.value}
                                </p>
                            </Link>
                        ))}
                    </div>

                </div>

                <div className="flex justify-end">
                    <QuotationRight className="w-12 h-13 card-lg:w-22 card-lg:h-22" />
                </div>
            </div >

        </section >


    )
}

