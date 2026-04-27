import { cn } from "@/lib/cn"
import type { ButtonProps } from "@components/components.type"




export const Button = ({ text, icon, className, varient, textLight, iconPosition, }: ButtonProps) => {

    return (
        <>
            <button
                className={cn(
                    "font-semibold text-xs px-5 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer h-9",
                    varient === "dark" ? "bg-btn-primary-bg text-btn-primary-text" : "bg-btn-secondary-bg text-btn-secondary-text border border-border-default",
                    className
                )}>

                {icon && iconPosition === "start" && <span>{icon}</span>}
                <span className={cn(textLight ? "text-text-secondary font-normal" : "")}> {text}</span>
                {icon && iconPosition === "end" && <span> {icon}</span>}
            </button >



        </>
    )
}

