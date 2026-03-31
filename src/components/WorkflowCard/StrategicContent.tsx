import { ContentGraph } from "@/assets/index"
import { BannerConentContainer } from "@/components/Common/index"



// Workflow card-1 Banner - Stragic Content 
export const StrategicContent = () => {
    return (
        <BannerConentContainer>
            <div className="px-6 pt-5">
                <p className="text-xs text-text-secondary">A simple <span className="font-semibold text-text-head-two"> 4 steps strategy</span> we follow every client</p>
            </div>

            <div className="h-63 flex flex-col justify-center items-center">
                <ContentGraph className="w-full" />
            </div>
        </BannerConentContainer>
    )
}
