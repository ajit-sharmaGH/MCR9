import { Playlist } from "../Components/Playlist/Playlist"
import { Sidebar } from "../Components/Sidebar/Sidebar"

const PlaylistPage = ()=>{
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Playlist/>
            </div>
        </div>
    )
}
export {PlaylistPage}