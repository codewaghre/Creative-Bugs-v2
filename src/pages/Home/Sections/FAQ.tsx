
import { ArrowDownIcon } from "@/assets"
import { TopCornorBox, Heading, HeadingContentContainer } from "@/components/Common/index"
import { faqData } from "@/data/Faq'sSection"
import { cn } from "@/lib/cn"
import { useState } from "react"



export const FAQ = () => {

    const [activeId, setActiveId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Frequently Ask Questions " />

                <p className="text-text-secondary max-w-170 mx-auto text-sm px-5">Have more questions? contact us at
                    <span className="font-semibold underline underline-offset-2 cursor-pointer">
                        creativebugsmedia@gmail.com
                    </span> or <span className="font-semibold underline underline-offset-2 cursor-pointer">
                        schedule a meeting
                    </span> with us and we’d love to collaborate.</p>
            </HeadingContentContainer>



            <div className={cn("w-full px-4 mx-auto pb-20 space-y-3", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")}>

                {
                    faqData.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className="px-4 py-4 bg-bg-primary border border-border-default cursor-pointer card-md:px-6"
                                onClick={() => toggle(data.id)}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-sm font-semibold text-text-primary card-md:text-sm card-lg:text-base">{data.question}</h2>
                                    <div className={cn(activeId === data.id ? "rotate-180" : "rotate-0", "duration-200 ease-linear")}><ArrowDownIcon className="w-4  h-4 card-md:w-5 card-md:h-5 text-text-primary" /></div>
                                </div>

                                {activeId === data.id && <div className="mt-5">
                                    <p className="text-sm text-text-secondary card-md:text-sm card-lg:text-base">{data.ans}</p>
                                </div>}
                            </div>
                        )
                    })
                }

            </div>

            <TopCornorBox />

        </div >
    )
}

