

type shortsVideoProps = {

    link: string;
    thumbnail?: string

}

export const ReelVideo = ({ link }: shortsVideoProps) => {

    return (

        <div className="aspect-9/16 w-full max-w-sm overflow-hidden rounded-lg bg-black">
            <video
                src={link}
                className="w-full h-full object-cover"
                controls
            // poster={thumbnail ? thumbnail : reelOne}
            />
        </div>
    )






}
