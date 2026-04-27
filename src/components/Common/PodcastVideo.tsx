

type podcastVideoProps = {

    link: string;
    thumbnail?: string

}

export const PodcastVideo = ({ link }: podcastVideoProps) => {

    const getEmbedUrl = (url: string) => {
        const videoId = url.split("v=")[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div className="aspect-video rounded-lg overflow-hidden relative">
            <iframe
                src={getEmbedUrl(link)}
                className="w-full h-full"
                allowFullScreen
                title="Podcast Video"
            />
        </div>
    );
};