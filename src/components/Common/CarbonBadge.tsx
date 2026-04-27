import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export const CarbonBadge = () => {
    return (
        <div className="w-full text-xs scale-80 origin-left -ml-3">
            <WebsiteCarbonBadge url="www.google.com" co2="0.56" percentage="41" />
        </div>
    )
}

