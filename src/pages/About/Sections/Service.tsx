
import { cn } from "@/lib/cn"

import { FilmIcon, HandshakeIcon, MobileIcon, PodcastIcon, ProfileIcon, UpArrowIcon } from "@/assets/index"
import { Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index"




export const Service = () => {
    return (

        <section id="#service" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading heading="Our Services"
                    paragraph="From editing to full-scale production, we craft visuals that elevate your brand and drive real results." />
            </HeadingContentContainer>


            <div className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20",
                "card-md:w-full card-md:px-8 card-md:grid-cols-2",
                "card-lg:grid-cols-3 card-lg:w-5xl card-lg:px-8")}>


                {/* s1 */}
                <div className={cn("p-6 border-b border-border-default", "card-md:border-r")}>
                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <FilmIcon />
                        </div>


                        <p tabIndex={0} aria-label="Video Production" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                        <p tabIndex={0} aria-label="End-to-end shoot management — pre-production, shoot day, and post. You show up, we handle everything else" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}> End-to-end shoot management pre-production, shoot day, and post. You show up, we handle everything else.</p>
                    </div>
                </div>

                {/* s2 */}
                <div className={cn("p-6 border-b border-border-default", "card-lg:border-r")}>
                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <PodcastIcon />
                        </div>


                        <p tabIndex={0} aria-label="Podcast Production" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Podcast Production</p>
                        <p tabIndex={0} aria-label="Full podcast setup and production  audio, video for YouTube, and short-form clips for social. One shoot day, multiple formats out" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Full podcast setup and production  audio, video for YouTube, and short-form clips for social. One shoot day, multiple formats out.</p>
                    </div>
                </div>

                {/* s3 */}
                <div className={cn("p-6 border-b border-border-default", "card-md:border-r",
                    "card-lg:border-r-0")}>

                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <MobileIcon />
                        </div>


                        <p tabIndex={0} aria-label="Short-Form Content & Repurposing" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Short-Form Content & Repurposing</p>
                        <p tabIndex={0} aria-label="We take your long-form content and turn it into platform-specific reels, clips, and carousels for Instagram, LinkedIn, and YouTube Shorts. No extra shoots needed" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>We take your long-form content and turn it into platform-specific reels, clips, and carousels for Instagram, LinkedIn, and YouTube Shorts. No extra shoots needed.</p>
                    </div>
                </div>


                {/* s4 */}
                <div className={cn("p-6 border-b border-border-default", "card-lg:border-b-0 card-lg:border-r")}>
                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <UpArrowIcon />
                        </div>


                        <p tabIndex={0} aria-label="Content Strategy" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Content Strategy</p>
                        <p tabIndex={0} aria-label="Before we produce anything, we build the content architecture what to make, for whom, on which platform, and in what sequence. Strategy that compounds, not just a content calendar" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Before we produce anything, we build the content architecture what to make, for whom, on which platform, and in what sequence. Strategy that compounds, not just a content calendar.</p>
                    </div>
                </div>

                {/* s5 */}
                <div className={cn("p-6 border-b border-border-default", "card-md:border-r card-md:border-b-0",
                    "card-lg:border-b-0 card-lg:border-r")}>
                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <ProfileIcon />
                        </div>


                        <p tabIndex={0} aria-label="Personal Brand Building for Founders" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Personal Brand Building for Founders</p>
                        <p tabIndex={0} aria-label="We build the content infrastructure behind founder-led brands positioning, storytelling, and consistent output that turns a founder into a category authority over time" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>We build the content infrastructure behind founder-led brands positioning, storytelling, and consistent output that turns a founder into a category authority over time.</p>
                    </div>
                </div>


                {/* s6 */}
                <div className={cn("p-6 border-border-default", "card-lg:border-b-0")}>
                    <div className="p-4 flex  flex-col gap-4">

                        <div>
                            <HandshakeIcon />
                        </div>


                        <p tabIndex={0} aria-label="Ongoing Content Partnerships" className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Ongoing Content Partnerships</p>
                        <p tabIndex={0} aria-label="For brands that need a production team without hiring one. We plug into your existing setup and run the full content operation — strategy, production, post, distribution — on a retainer basis" className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>For brands that need a production team without hiring one. We plug into your existing setup and run the full content operation strategy, production, post, distribution on a retainer basis.</p>
                    </div>
                </div>



            </div >


            <TopCornorBox />

        </section >

    )
}

