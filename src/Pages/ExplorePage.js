import { Explore } from "../Components/Explore/Explore"
import { Sidebar } from "../Components/Sidebar/Sidebar"

const ExplorePage = ()=>{
    return (
        <div className="flex">
            <div> <Sidebar/> </div>
            <div> <Explore/> </div>
        </div>
    )
}
export {ExplorePage}