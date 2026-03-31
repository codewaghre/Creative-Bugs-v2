import { InstagramIcon } from "@/assets"
import { Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common"
import { cn } from "@/lib/cn"



const Service = () => {
    return (

        <>




            <div className={cn("border-t border-x border-border-default relative")}>

                <HeadingContentContainer>
                    <Heading heading="Meet Creative Team" paragraph="We help founders build trust and authority through strategic video content  not just visuals, but results." />
                </HeadingContentContainer>


                <div className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20",
                    "card-md:w-full card-md:px-8 card-md:grid-cols-2",
                    "card-lg:grid-cols-3 card-lg:w-5xl card-lg:px-8")}>




                    <div className={cn("p-6 border-b border-border-default", "card-md:border-r")}>
                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>

                    <div className={cn("p-6 border-b border-border-default", "card-lg:border-r")}>
                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>

                    <div className={cn("p-6 border-b border-border-default", "card-md:border-r",
                        "card-lg:border-r-0")}>

                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>

                    <div className={cn("p-6 border-b border-border-default", "card-lg:border-b-0 card-lg:border-r")}>
                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>

                    <div className={cn("p-6 border-b border-border-default", "card-md:border-r card-md:border-b-0",
                        "card-lg:border-b-0 card-lg:border-r")}>
                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>

                    <div className={cn("p-6 border-border-default", "card-lg:border-b-0")}>
                        <div className="p-4 flex  flex-col gap-4">

                            <div>
                                <InstagramIcon />
                            </div>


                            <p className={cn("text-sm font-semibold text-text-primary mt-1", "card-md:text-base")}>Video Production</p>
                            <p className={cn("text-sm  text-text-secondary", "card-md:text-sm")}>Cinematic shoots that tell your brand story.</p>
                        </div>
                    </div>



                </div >


                <TopCornorBox />


            </div >
        </>
    )
}

export default Service