
import reelOnevideo from "/videos/reel/r1.mp4"
import reelOne from "../../assets/banner/reelOne.png"

export const ReelVideo = () => {

    return (

        <div className="aspect-9/16 w-full max-w-sm overflow-hidden rounded-lg bg-black">
            <video
                src={reelOnevideo}
                className="w-full h-full object-cover"
                controls
                poster={reelOne}
            />
        </div>
    )






}
