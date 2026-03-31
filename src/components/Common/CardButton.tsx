
import { cn } from "@/lib/cn"
import type { ButtonProps } from "@components/components.type"


export const CardButton = ({ text, icon, className, varient, textLight, iconPosition, }: ButtonProps) => {
    return (
        <button

            className={cn(
                "font-semibold text-xs px-4 py-1 rounded-lg flex items-center justify-center gap-2  h-7",
                varient === "dark" ? "bg-btn-primary-bg text-btn-primary-text" : "bg-btn-secondary-bg text-btn-secondary-text border border-border-default",
                "card-md:px-5 card-md:h-9",
                className
            )}>

            {icon && iconPosition === "start" && <span>{icon}</span>}
            <span className={cn(textLight ? "text-text-secondary font-normal" : "")}> {text}</span>
            {icon && iconPosition === "end" && <span> {icon}</span>}
        </button >
    )
}

