

type podcastVideoProps = {

    link: string;
    thumbnail?: string

}

export const PodcastVideo = ({ link }: podcastVideoProps) => {

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtu.be/")) {
            return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
        }

        if (url.includes("v=")) {
            return `https://www.youtube.com/embed/${url.split("v=")[1].split("&")[0]}`;
        }

        return url;
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