import { BottomCornorBox, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common"
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"


import teamOne from "@assets/team/teamOne.jpg"



export const Team = () => {
    return (
        <div className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading heading="Meet Creative Team" paragraph="We help founders build trust and authority through strategic video content  not just visuals, but results." />
            </HeadingContentContainer>


            <div className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20 gap-x-2 gap-y-4",
                "card-md:w-full card-md:px-8 card-md:grid-cols-3",
                "card-lg:grid-cols-3 card-lg:w-5xl card-lg:px-8")}>


                <Link to={"/"} className="overflow-hidden rounded-sm hover:border  border-border-default">

                    <div className="overflow-hidden">
                        <img src={teamOne} alt="team memmber" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-300" />
                    </div>

                    <div className={cn("p-3")}>
                        <h1 className="text-text-primary text-base card-sm:text-sm">
                            Abhishek Waghre
                        </h1>
                        <p className="text-text-secondary text-sm card-sm:text-xs">Team Lead</p>
                    </div>
                </Link>

                <Link to={"/"} className="overflow-hidden rounded-sm hover:border  border-border-default">

                    <div className="overflow-hidden">
                        <img src={teamOne} alt="team memmber" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-300" />
                    </div>

                    <div className={cn("p-3")}>
                        <h1 className="text-text-primary text-base card-sm:text-sm">
                            Abhishek Waghre
                        </h1>
                        <p className="text-text-secondary text-sm card-sm:text-xs">Team Lead</p>
                    </div>
                </Link>

                <Link to={"/"} className="overflow-hidden rounded-sm hover:border  border-border-default">

                    <div className="overflow-hidden">
                        <img src={teamOne} alt="team memmber" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-300" />
                    </div>

                    <div className={cn("p-3")}>
                        <h1 className="text-text-primary text-base card-sm:text-sm">
                            Abhishek Waghre
                        </h1>
                        <p className="text-text-secondary text-sm card-sm:text-xs">Team Lead</p>
                    </div>
                </Link>

            </div >


            <TopCornorBox />
            <BottomCornorBox />

        </div >
    )
}

