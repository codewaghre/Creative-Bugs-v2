
import { cn } from "@/lib/cn"
import { useState } from "react"
import { Link } from "react-router-dom"

import { ArrowDownIcon } from "@/assets/index"
import { TopCornorBox, Heading, HeadingContentContainer } from "@/components/Common/index"
import { faqData } from "@/data/index"




export const FAQ = () => {

    const [activeId, setActiveId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="faq" className={cn("border-t border-x border-border-default relative")}>

            <HeadingContentContainer>
                <Heading
                    heading="Frequently Asked Questions" />

                <p
                    tabIndex={0}
                    aria-label="Have more questions? Mail us at  creativebugsmedia@gmail.com or schedule a meeting with us and we’d love to collaborate."
                    className="text-text-secondary max-w-170 mx-auto text-sm px-5">
                    Have more questions? contact us at
                    <Link to={"mailto:ops.creativebugs@gmail.com"} target="_blank" className="font-semibold underline underline-offset-2 cursor-pointer"> creativebugsmedia@gmail.com </Link> or
                    <Link to={"/bookameetingform"} target="_blank" className="font-semibold underline underline-offset-2 cursor-pointer"> schedule a meeting </Link> with us and we’d love to collaborate.</p>
            </HeadingContentContainer>

            <div className={cn("w-full px-4 mx-auto pb-20 space-y-3", "card-md:px-8", "card-lg:w-5xl card-lg:px-8")}>

                {
                    faqData.map((data) => {

                        const isOpen = activeId === data.id;

                        return (
                            <div
                                key={data.id}
                                className="bg-bg-primary border border-border-default"
                            >
                                <h2>
                                    <button
                                        type="button"
                                        onClick={() => toggle(data.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${data.id}`}
                                        id={`faq-button-${data.id}`}
                                        className="w-full px-4 py-4 card-md:px-6 flex items-center justify-between gap-4 text-left  focus:outline-none focus-visible:ring-2"

                                    >
                                        <span className="text-sm font-semibold text-text-primary card-lg:text-base">
                                            {data.question}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                isOpen ? "rotate-180" : "rotate-0",
                                                "duration-200 ease-linear"
                                            )}
                                        >
                                            <ArrowDownIcon className="w-4 h-4 text-text-primary" />
                                        </span>
                                    </button>
                                </h2>

                                {isOpen && (
                                    <div
                                        id={`faq-panel-${data.id}`}
                                        role="region"
                                        aria-labelledby={`faq-button-${data.id}`}
                                        className="px-4 pb-4 card-md:px-6"
                                    >
                                        <p className="text-sm text-text-secondary card-lg:text-base">
                                            {data.ans}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )
                    })
                }

            </div>

            <TopCornorBox />

        </section >
    )
}

