import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"

import { BottomCornorBox, Heading, HeadingContentContainer, TopCornorBox } from "@/components/Common/index"
import { teamData } from "@/data/index"



export const Team = () => {
    return (
        <section id="team" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading heading="Meet Creative Team" paragraph="A passionate team of editors, animators, creators, and strategists dedicated to bringing your ideas to life." />
            </HeadingContentContainer>


            <div className={cn("grid grid-cols-1 mx-auto px-3 w-full pb-20 gap-x-2 gap-y-4",
                "card-md:w-full card-md:px-8 card-md:grid-cols-3",
                "card-lg:grid-cols-3 card-lg:w-5xl card-lg:px-8")}>

                {
                    teamData.map((member) => {
                        const Card = (
                            <>
                                <div className="overflow-hidden h-80">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-3">
                                    <h1 className="text-text-primary text-base card-sm:text-sm">
                                        {member.name}
                                    </h1>
                                    <p className="text-text-secondary text-sm card-sm:text-xs">
                                        {member.role}
                                    </p>
                                </div>
                            </>
                        );

                        return member.profileLink ? (
                            <Link
                                key={member.id}
                                to={member.profileLink}
                                target="_blank"
                                className="overflow-hidden rounded-sm hover:border border-border-default block"
                            >
                                {Card}
                            </Link>
                        ) : (
                            <div
                                key={member.id}
                                className="overflow-hidden rounded-sm border border-border-default"
                            >
                                {Card}
                            </div>
                        );
                    })
                }

            </div >


            <TopCornorBox />
            <BottomCornorBox />

        </section >
    )
}

