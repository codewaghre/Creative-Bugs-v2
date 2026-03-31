import { cn } from "@/lib/cn"

import { ClockIcon } from "@/assets"

import { BannerConentContainer } from "@components/Common"
import { CardButton } from "@components/Common"

import { motion, type Variants } from "motion/react"

import type { FeatureItem } from "@/data/data.type"


type Props = {
    featuresdata: FeatureItem[];
};


const fadeUpVariant: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};



export const BookAMeeting = ({ featuresdata }: Props) => {
    return (

        <BannerConentContainer className="relative overflow-hidden card-md:h-100 ">

            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full z-40">
                <div className={cn("flex flex-col items-center justify-center gap-2", "card-md:flex-row")}>
                    {featuresdata.map((item, id) => {
                        return (
                            <CardButton text={item.text} key={id} varient="light" textLight={true} />
                        )
                    })}
                </div>
            </div>

            <div className="relative flex justify-center items-center">

                {/* Outer Circle */}
                <div className={cn("w-80 h-80 border border-border-default rounded-full flex items-center justify-center mask-y-from-50%", "card-md:w-120 card-md:h-120")}>

                    {/* Middle Circle */}
                    <div className={cn("absolute w-64 h-64 border border-border-default rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "card-md:w-94 card-md:h-94")}>
                    </div>

                    {/* Inner Circle */}
                    <div className={cn("absolute w-40 h-40 blur-2xl bg-purple-200 opacity-50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "card-md:w-80 card-md:h-80")}>
                    </div>
                </div>
            </div>

            {/* Meeting card Container */}
            <motion.div
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.1 },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.03 }}
                className={cn(" absolute top-50 left-1/2  -translate-x-1/2 -translate-y-1/2  flex items-end justify-center h-50 z-40", "card-md:w-100")}>


                {/* Meeting Card */}
                <motion.div
                    variants={fadeUpVariant}
                    className={cn("bg-bg-primary min-w-74 absolute top-22 border border-border-default rounded-md py-5 px-3 flex flex-col gap-5 z-40",
                        "card-md:w-100 card-md:p-3"
                    )}>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xs card-md:text-sm">Discovery Meeting</p>
                        <div className="flex items-center gap-1 ">
                            <ClockIcon className="w-5 h-5" />
                            <p className="text-xs/6 text-text-secondary">30-min</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-1">
                        <div className="flex items-center gap-2">
                            <div className="size-8 rounded-full bg-bg-green card-md:size-12"></div>
                            <div>
                                <p className="font-semibold text-xs card-md:text-sm">Abhishek Waghre</p>
                                <p className="text-text-secondary text-xs">codewaghre@gmail.com</p>
                            </div>
                        </div>

                        <div className="border border-border-default rounded-sm flex items-center justify-center gap-1 py-2 px-2 card-md:px-2 card-md:gap-2">
                            {/* Online animation */}
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-icon-online opacity-75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-icon-online"></span>
                            </span>
                            <p className="font-semibold text-[10px] card-md:text-xs">11:30 AM</p>
                        </div>
                    </div>
                </motion.div>

                {/* 2nd skeleton  */}
                <motion.div
                    variants={fadeUpVariant}
                    className={cn("bg-bg-primary w-60 border border-border-default rounded-md p-3 flex flex-col gap-3 absolute top-17 z-30 h-20",
                        "card-md:w-85",

                    )}>
                    <div className="flex items-center justify-between">

                    </div>

                </motion.div>

                {/* 3rd sketeton */}
                <motion.div
                    variants={fadeUpVariant}
                    className={cn("bg-bg-primary w-50 border border-border-default rounded-md p-3 flex flex-col gap-3 absolute top-12 h-20",
                        "card-md:w-68",


                    )}>
                    <div className="flex items-center justify-between">

                    </div>

                </motion.div>
            </motion.div>
        </BannerConentContainer>

    )
}

