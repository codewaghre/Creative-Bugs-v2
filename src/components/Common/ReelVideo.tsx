

type shortsVideoProps = {

    link: string;
    thumbnail?: string

}

export const ReelVideo = ({ link }: shortsVideoProps) => {


    const getYouTubeEmbedUrl = (url: string) => {
        try {
            const parsed = new URL(url);

            if (parsed.pathname.includes("/shorts/")) {
                const videoId = parsed.pathname.split("/shorts/")[1];
                return `https://www.youtube.com/embed/${videoId}`;
            }

            if (parsed.searchParams.get("v")) {
                return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
            }

            return undefined;
        } catch {
            return undefined;
        }
    };

    return (

        <div className="aspect-9/16 w-full max-w-sm overflow-hidden rounded-lg bg-black">
            <iframe
                src={getYouTubeEmbedUrl(link)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>



    )






}
