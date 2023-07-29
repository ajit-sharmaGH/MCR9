import { Home } from "../Components/Home/Home"
import { Sidebar } from "../Components/Sidebar/Sidebar"

const HomePage = ()=>{
    return (
        <div className="flex">
          <div> <Sidebar /> </div>
          <div> <Home /> </div>
        </div>
    )
}
export {HomePage}