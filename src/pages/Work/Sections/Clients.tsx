
import { cn } from "@/lib/cn"

import { PodcastVideo } from "@/components/Common/PodcastVideo"
import { ReelVideo } from "@/components/Common/ReelVideo"

export const Clients = () => {
    return (

        <div className={cn("border-t border-x border-border-default relative")}>

            <div className="px-4 card-lg:px-16">
                <div className="flex items-center gap-3  border-b border-border-default py-5">
                    {/* Online animation */}
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-icon-online opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-icon-online"></span>
                    </span>

                    <div>
                        <h2 className={cn("font-semibold text-sm", "card-md:text-sm", "card-lg:text-base")}>@deepakpareek</h2>
                    </div>
                </div>

                <div className="py-5 border-b border-border-default">
                    <h1>Videos</h1>

                    <div className={cn("grid grid-cols-1 gap-6 mt-5", "card-md:grid-cols-2")}>

                        {/* podcast intro 1 */}
                        <div className="w-full">
                            <div>
                                <PodcastVideo />
                            </div>

                            <div className="flex justify-between gap-4 mt-3">
                                <p
                                    className={cn(
                                        "text-xs hover:text-text-primary w-50",
                                        "card-md:text-text-secondary card-md:text-sm card-md:w-60"
                                    )}
                                >
                                    Sanjay Kathuria on Building Passive Income, Escaping Debt Trap & Living Rent-Free | TCH 110
                                </p>

                                <p className="text-xs card-md:text-text-secondary card-md:text-sm hover:text-text-primary">
                                    21K views
                                </p>
                            </div>

                        </div>

                        {/* podcast intro 2 */}
                        <div className="w-full">
                            <div>
                                <PodcastVideo />
                            </div>

                            <div className="flex justify-between gap-4 mt-3">
                                <p className={cn("text-xs hover:text-text-primary w-50", " card-md:text-text-secondary card-md:text-sm card-md:w-60")}>Sanjay Kathuria on Building Passive Income, Escaping Debt Trap & Living Rent-Free | TCH 110</p>
                                <p className="text-xs card-md:text-text-secondary card-md:text-sm hover:text-text-primary">21K views</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="py-8">
                    <h1>Shorts</h1>

                    <div className={cn("grid grid-cols-1 gap-6 mt-5", "card-md:grid-cols-3")}>

                        <div className="w-full  overflow-hidden relative">

                            <div>
                                <ReelVideo />
                            </div>

                            <div className="flex justify-start mt-3">
                                <p className="text-xs card-md:text-text-secondary card-md:text-base hover:text-text-primary">1,21.000 views</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div>
                                <ReelVideo />
                            </div>

                            <div className="flex justify-start mt-3">
                                <p className="text-xs card-md:text-text-secondary card-md:text-base hover:text-text-primary">1,21.000 views</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div>
                                <ReelVideo />
                            </div>

                            <div className="flex justify-start mt-3">
                                <p className="text-xs card-md:text-text-secondary card-md:text-base hover:text-text-primary">1,21.000 views</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div >
    )
}
