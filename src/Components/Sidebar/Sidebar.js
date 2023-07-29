import "./Sidebar.css"
import {AiFillHome} from "react-icons/ai"
import {MdOutlineExplore,MdPlaylistAdd,MdWatchLater} from "react-icons/md"
import { useNavigate } from "react-router-dom"
const Sidebar = ()=>{
    const navigate = useNavigate();
    return (
        <div className="sidebar-container">
           <p onClick={()=>navigate("/")}> <AiFillHome/> Home </p>
           <p onClick={()=>navigate("/explore")}> <MdOutlineExplore/> Explore </p>
           <p onClick = {()=>navigate("/playlist")}> <MdPlaylistAdd/> Playlist </p>
           <p onClick ={()=>navigate("/watchLater")}> <MdWatchLater/> Watch Later </p>
        </div>
    )
}
export {Sidebar}