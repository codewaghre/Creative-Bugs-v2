import { cn } from "@/lib/cn"
import type { CardHeadingProps } from "@components/components.type"



export const CardHeading = ({ heading, paragraph, className }: CardHeadingProps) => {
    return (
        <>
            <div className={cn("text-left py-4 px-6 ",
                "card-lg:w-full",
                className
            )}>
                <h2 className={cn("text-sm font-semibold text-text-primary",
                    "card-md:text-base",
                    "card-lg:text-lg"
                )}>
                    {heading}
                </h2>
                <p className={cn("text-xs pt-1 text-text-secondary card-md:text-sm")}>
                    {paragraph}
                </p>
            </div>
        </>
    )
}

