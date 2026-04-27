import { cn } from "@/lib/cn"

import type { FeatureItem } from "@/data/data.type";
import { BannerConentContainer, CardButton } from "@components/Common/index";


import { motion, type Variants } from "motion/react";

type Props = {
    featuresQuestiondata: FeatureItem[];
};

const fadeUpVariant: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


export const AskAQuestion = ({ featuresQuestiondata }: Props) => {
    return (
        <BannerConentContainer>
            <div className="relative h-100 overflow-hidden">

                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full z-40">
                    <div className={cn("flex flex-col items-center justify-center gap-2", "card-md:flex-row")}>

                        {featuresQuestiondata.map((item, id) => {
                            return (
                                <CardButton text={item.text} key={id} varient="light" textLight={true} />
                            )
                        })}

                    </div>
                </div>

                {/* Bg-gredient */}
                <div className="relative flex justify-center items-center">

                    {/* Outer Circle */}
                    <div className={cn("size-120 rounded-full flex items-center justify-center", "card-md:size-120")}>

                        {/* Inner Circle */}
                        <div className={cn("absolute w-40 h-60 blur-2xl bg-purple-200 opacity-50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "card-md:w-110 card-md:h-74")}>
                        </div>
                    </div>
                </div>


                {/* EMail Card Container */}
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
                    className="absolute bottom-0 left-1/2 -translate-x-1/2  w-110 h-80 flex items-end justify-center z-40">

                    {/* Email Card */}
                    <motion.div
                        variants={fadeUpVariant}
                        className={cn("bg-bg-primary w-74 border-x border-t border-black/20 rounded-t-md px-4 py-3 flex flex-col gap-3 z-40 absolute top-30",
                            "card-md:w-110 card-md:top-16")
                        }>
                        <div className="flex items-center justify-between border-b border-border-default pb-3">
                            <motion.p
                                initial={{ y: 4, opacity: 0, filter: 'blur(1px)' }}
                                whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ amount: 0.03, once: true }}
                                className="text-xs card-md:text-sm">dearhappyuser@gmail.com</motion.p>
                            <div className="flex items-center gap-1 bg-bg-green px-3 rounded-md border border-border-green">
                                <p className="text-xs/6 text-text-secondary">Sent</p>
                            </div>
                        </div>

                        <div className=" border-b border-border-default pb-3">
                            <p className="text-xs card-md:text-sm"><span className="font-semibold">Quick question</span> about your services</p>
                        </div>

                        <div className="">
                            <p className="text-xs card-md:text-sm">Hi,  <br />
                                We offer end-to-end creative services including strategy, production, and post-production, tailored to your goals and budget.
                                <br />
                                <br />
                                Best regards,
                                <br />
                                Creative Bugs Media Team</p>

                        </div>
                    </motion.div>

                    {/* Email skeleton 2nd */}
                    <motion.div
                        variants={fadeUpVariant}
                        className={cn("bg-bg-primary  border-x border-t border-black/20 rounded-t-md px-4 py-6 flex flex-col gap-3 absolute top-25 z-30 w-60", "card-md:w-100 card-md:top-10")}>
                        <div className="flex items-center justify-between border-b border-border-default pb-3">
                        </div>
                    </motion.div>

                    {/* Email skeleton 3rd */}
                    <motion.div
                        variants={fadeUpVariant}
                        className={cn("bg-bg-primary  border-x border-t border-black/20 rounded-t-md px-4 py-6 flex flex-col gap-3 absolute top-20 z-20 w-50", "card-md:w-80 card-md:top-5")}>

                    </motion.div>

                </motion.div>

            </div>
        </BannerConentContainer>
    )
}
