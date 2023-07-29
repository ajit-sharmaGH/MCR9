import { Explore } from "../Components/Explore/Explore"
import { Navbar } from "../Components/Navbar/Navbar"
import { Sidebar } from "../Components/Sidebar/Sidebar"

const ExplorePage = ()=>{
    return (
        <div className="flex">
            <div> <Sidebar/> </div>
            <div>
                <Navbar/>
                 <Explore/>
            
             </div>
        </div>
    )
}
export {ExplorePage}