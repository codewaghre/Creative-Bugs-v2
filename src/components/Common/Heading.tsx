import { cn } from "@/lib/cn"
import type { HeadingProps } from "@components/components.type"
import { motion } from "motion/react"



export const Heading = ({ heading, paragraph, varient }: HeadingProps) => {

    const headingId =
        heading.toLowerCase().replace(/\s+/g, "-") + "-heading";

    const paragraphId =
        heading.toLowerCase().replace(/\s+/g, "-") + "-description";

    return (

        <div
            role="group"
            aria-labelledby={headingId}
            aria-describedby={paragraphId}>
            <motion.h1
                id={headingId}
                tabIndex={0}
                initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}

                className={cn("text-text-primary font-semibold text-xl",
                    varient === "dark" ? "text-text-white" : "text-text-primary",
                )}>

                {heading}
            </motion.h1>

            <motion.p
                id={paragraphId}
                tabIndex={0}
                initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}

                className={cn("max-w-150 mx-auto text-sm px-5",
                    varient === "dark" ? "text-text-white-50" : "text-text-secondary"
                )}>
                {paragraph}
            </motion.p>
        </div>

    )
}

