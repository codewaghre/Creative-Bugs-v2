import { cn } from "@/lib/cn"
import type { CardHeadingProps } from "@components/components.type"


export const BannerHeading = ({ heading, paragraph }: CardHeadingProps) => {
    return (
        <div>
            <h3 tabIndex={0}
                aria-label={`${heading} ${paragraph}`}
                className={cn("font-semibold text-sm card-md:text-base")}>{heading}</h3>
            <p className={cn("text-xs text-text-secondary card-md:text-sm")}>{paragraph}</p>
        </div>
    )
}

