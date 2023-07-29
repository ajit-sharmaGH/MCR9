import { useFilter } from "../../Context/FilterContext";
import "./Navbar.css";

const Navbar = ()=>{
    const {addFilterQuery} = useFilter();

const searchHandler =(e)=>{
    addFilterQuery(e);
}

    return (
        <div className="input-field-container">
          <input type="text"  className="input-field" placeholder="search video by title...."
          onChange={(e)=>searchHandler(e)}
          />
        </div>
    )
}
export {Navbar}