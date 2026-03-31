
import thumbnailOne from "@assets/banner/thumbnailOne.png"
import podcastOne from "/videos/podcast/p1.mp4"


export const PodcastVideo = () => {

    return (
        <div className="aspect-video rounded-lg overflow-hidden relative">
            <video
                src={podcastOne}
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                controls
                poster={thumbnailOne}
            />

        </div>
    );
};