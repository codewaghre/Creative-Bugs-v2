import { cn } from "@/lib/cn"

type cornorboxProps = {
    varient?: "dark" | "light"
}


export const TopCornorBox = ({ varient }: cornorboxProps) => {
    return (
        <>
            <div className={cn("h-2 w-2 bg-text-primary absolute top-0 left-0 z-30",
                "tablet:-top-1 tablet:-left-1 tablet:z-100",
                varient === "dark" ? "bg-text-white" : "bg-text-primary"
            )}>
            </div>

            <div className={cn("h-2 w-2 bg-text-primary absolute top-0 right-0 z-30",
                "tablet:-top-1 tablet:-right-1 tablet:z-100",
                varient === "dark" ? "bg-text-white" : "bg-text-primary"
            )}>
            </div>
        </>
    )
}

