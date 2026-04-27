
import { cn } from '@/lib/cn'

import { HeadingContentContainer, MainContentContainer, Heading, TopCornorBox, BottomCornorBox } from '@components/Common'


export const BookAMeetingFrom = () => {
    return (
        <MainContentContainer className={cn("border-t border-x border-border-default relative mt-1")}>

            <div>
                <HeadingContentContainer>
                    <Heading heading="Connect With Us" paragraph="Connect with Creative Bugs Media to craft visually compelling content designed to inspire, engage, and elevate your brand." />
                </HeadingContentContainer>
            </div>

            <div className={cn("",)}>

                <iframe
                    src="https://calendly.com/ops-creativebugs/30min?month=2026-04&date=2026-04-23&primary_color=111827&text_color=1f2937&background_color=ffffff"
                    width="100%"
                    height="750"
                    frameBorder="0"
                    title="Calendly Booking"
                    className="w-full">
                </iframe>
            </div>

            <TopCornorBox />
            <BottomCornorBox />
        </MainContentContainer>
    )
}
