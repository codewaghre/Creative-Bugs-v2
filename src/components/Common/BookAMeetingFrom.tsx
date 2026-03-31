
import { cn } from '@/lib/cn'

import { HeadingContentContainer, MainContentContainer } from '@components/Common'
import { Heading } from '@components/Common'
import { TopCornorBox } from '@components/Common'
import { BottomCornorBox } from '@components/Common'


export const BookAMeetingFrom = () => {
    return (
        <MainContentContainer className={cn("border-t border-x border-border-default relative mt-1")}>

            <div>
                <HeadingContentContainer>
                    <Heading heading="Connect With Us" paragraph="Connect with Creative Bugs Media to craft visually compelling content designed to inspire, engage, and elevate your brand." />
                </HeadingContentContainer>
            </div>

            <div className={cn("pb-20 px-4",)}>

            </div>

            <TopCornorBox />
            <BottomCornorBox />
        </MainContentContainer>
    )
}
