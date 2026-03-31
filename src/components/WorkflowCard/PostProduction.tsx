import { timelineData } from "@/data/index";

import type { TimelineRowType } from "@/data/data.type";
import type { TimelineBlockProps } from "../components.type";

import { BannerConentContainer } from "@components/Common/index";


//workflow card-3 Banner - Post-Production
export const PostProductionContent = () => {

    return (

        <BannerConentContainer>



            <div className="flex flex-col gap-2 py-2 px-2 overflow-hidden">

                {timelineData.map((block) => (
                    <TimelineBlock
                        key={block.id}
                        rows={block.rows}
                        boxHeight={block.boxHeight}
                    />
                ))}

            </div>
        </BannerConentContainer>

    )
}

// block screen
const TimelineBlock = ({ rows, boxHeight }: TimelineBlockProps) => {
    return (
        <div className="flex items-center gap-2 z-30">
            <div className="flex flex-col items-center">
                {rows.map((row, index) => (
                    <TimelineRow key={index} {...row} />
                ))}
            </div>

            <div className={`w-full ${boxHeight} bg-surface-gradient-3 rounded-sm`} />
        </div>
    );
};

//line block
const TimelineRow = ({ number, titleWidth, lineWidth }: TimelineRowType) => {
    return (
        <div className="flex items-center gap-2 px-2 py-2 z-30">
            <span className="text-text-secondary font-semibold">{number}</span>
            <span className={`${titleWidth} h-5 bg-surface-gradient-3 rounded-xs`} />
            <span className={`${lineWidth} h-1 bg-surface-gradient-3 rounded-xs`} />
        </div>
    );
};
