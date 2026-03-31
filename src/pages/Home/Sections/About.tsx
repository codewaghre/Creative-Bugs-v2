import { EmailIcon, InstagramIcon, LinkedInIcon, QuotationLeft, QuotationRight } from "@/assets"
import { Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common"
import { cn } from "@/lib/cn"



export const AboutPage = () => {

    return (

        <>

            <div className={cn("border-t border-x border-border-default relative bg-bg-primary")}>

                <TopCornorBox />

                <HeadingContentContainer >
                    <Heading
                        heading="Our Creative Journey"
                        paragraph="We help founders build trust and authority through strategic video content  not just visuals, but results." varient="light" />
                </HeadingContentContainer >


                <div className={cn("w-full px-4 mx-auto pb-10 space-y-3 relative", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")} >

                    <div className="">
                        <QuotationLeft className="w-12 h-13 card-lg:w-22 card-lg:h-22" />
                    </div>

                    <div className="flex gap-10 mx-auto flex-wrap">
                        <div className={cn("space-y-4 text-text-primary text-sm w-full", "card-lg:text-base card-lg:max-w-2xl")}>
                            <p>Founded in 2021 by Dishant and Rohit, CreativeBugs Media was created to help struggling brands and creators shine through top-notch content production. </p>

                            <p>We’re dedicated to transforming your vision into captivating videos and podcasts, driving impressive growth and engagement.</p>

                            <p>We’re dedicated to transforming your vision into captivating videos and podcasts, driving impressive growth and engagement. <span className="text-icon-online font-semibold underline cursor-pointer underline-offset-2">Contact Us</span></p>
                        </div>

                        <div className="text-text-primary space-y-3">
                            <p className="text-xs card-md:text-sm card-lg:text-base text-text-primary">Socials .//</p>

                            <div className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary">
                                <div><InstagramIcon className="size-3  card-md:size-4" /></div>
                                <p className="text-sm card-md:text-sm card-lg:text-base/0 ">@creativebugs.media</p>
                            </div>

                            <div className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary">
                                <div><LinkedInIcon className="size-3 card-md:size-4" /></div>
                                <p className="text-sm card-md:text-sm card-lg:text-base/0" >@creativebugs.media</p>
                            </div>

                            <div className="flex items-center gap-2 text-text-secondary cursor-pointer hover:text-text-primary">
                                <div><EmailIcon className="size-3 card-md:size-4" /></div>
                                <p className="text-sm card-md:text-sm card-lg:text-base/0" >@creativebugs.media</p>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-end">
                        <QuotationRight className="w-12 h-13 card-lg:w-22 card-lg:h-22" />
                    </div>
                </div >

            </div >
        </>

    )
}

