import { Sidebar } from "../Components/Sidebar/Sidebar"
import { VideoSinglePage } from "../Components/VideoPlayer/player"

const VideoPlayerPage = ()=>{
    return (
        <div className="flex">
        <div>  <Sidebar/></div> 
        <div>  <VideoSinglePage/> </div> 
        </div>
    )
}
export {VideoPlayerPage}