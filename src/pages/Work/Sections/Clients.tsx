
import { cn } from "@/lib/cn"
import { Link } from "react-router-dom"

import { PodcastVideo, ReelVideo } from "@/components/Common/index"
import { creatorDataList } from "@/data/index"




export const Clients = () => {

    return (
        <section className={cn("border-t border-x border-border-default relative")}>

            <div className="px-4 card-lg:px-16">
                {
                    creatorDataList.map((creator) => {

                        const { profile, videosHeading, shortsHeading, videos, shorts } = creator

                        return (

                            <div key={creator.id} className="border-b border-border-default pb-10">

                                {/* Profile  */}
                                <div role="group"
                                    aria-labelledby={`profile-name-${profile.id}`}
                                    aria-describedby={`profile-desc-${profile.id}`}

                                    className=" border-b border-border-default py-5 space-y-2">

                                    <div className="flex items-center gap-2">
                                        {/* Online animation */}
                                        <span className="relative flex size-2" aria-hidden="true">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-icon-online opacity-75"></span>
                                            <span className="relative inline-flex size-2 rounded-full bg-icon-online"></span>
                                        </span>

                                        <div>
                                            <Link
                                                to={profile.profileLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-labelledby={`profile-name-${profile.id}`}
                                                aria-describedby={`profile-desc-${profile.id}`}
                                            >
                                                <h1 id={`profile-name-${profile.id}`} className={cn("font-semibold text-sm", "card-md:text-sm", "card-lg:text-base")}>{profile.username}</h1>
                                            </Link>
                                        </div>

                                    </div>

                                    <div tabIndex={0} id={`profile-desc-${profile.id}`} className="text-text-secondary">
                                        <p>{profile.description}</p>
                                    </div>
                                </div>

                                {/* Podcast Videos */}
                                <div aria-labelledby={`podcast-heading-${creator.id}`} className="py-5 border-b border-border-default">
                                    <h1 id={`podcast-heading-${creator.id}`} >{videosHeading}</h1>

                                    <div className={cn("grid grid-cols-1 gap-6 mt-5", "card-md:grid-cols-2")}>

                                        {/* podcast intro 1 */}

                                        {
                                            videos.map((podcast) => {

                                                return (
                                                    <div className="w-full" key={podcast.id}>
                                                        <div>
                                                            <PodcastVideo link={podcast.link} thumbnail={podcast.thumbnail} />
                                                        </div>

                                                        <div className="flex justify-between gap-4 mt-3">
                                                            <p
                                                                className={cn(
                                                                    "text-xs hover:text-text-primary w-50",
                                                                    "card-md:text-text-secondary card-md:text-sm card-md:w-60"
                                                                )}
                                                            >
                                                                {podcast.title}
                                                            </p>

                                                            <p className="text-xs card-md:text-text-secondary card-md:text-sm hover:text-text-primary">
                                                                {podcast.views}
                                                            </p>
                                                        </div>

                                                    </div>

                                                )
                                            })
                                        }


                                    </div>
                                </div>

                                {/* Short Videos */}
                                <div className="py-8">
                                    <h1>{shortsHeading}</h1>

                                    <div className={cn("grid grid-cols-1 gap-6 mt-5", "card-md:grid-cols-3")}>

                                        {
                                            shorts.map((short) => {
                                                return (


                                                    <div className="w-full" key={short.id}>

                                                        <div className="flex items-center justify-center">
                                                            <ReelVideo link={short.link} />
                                                        </div>

                                                        <div className="flex justify-start mt-3">
                                                            <p className="text-xs card-md:text-text-secondary card-md:text-base hover:text-text-primary">{short.views}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                            </div>
                        )

                    })
                }






            </div>

        </section >
    )
}
