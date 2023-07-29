import { useNavigate } from "react-router-dom";
import { categories } from "../../Data/Category";
import "./Home.css";
import { useFilter } from "../../Context/FilterContext";
const Home = ()=>{
    const {addFilterCategory} = useFilter();
    const navigate = useNavigate();
    const categoryHandler = (category)=>{
        addFilterCategory(category);
        navigate("/explore");
    }
    return (
        <div>
            <h2>Categories</h2>
            <section className="home-categories-container flex-wrap mt-3 mr-1">
                {categories.map(({_id, thumbnail, category})=>{
                    return (
                        <div key={_id} className="margin-1">
                         <div onClick={ ()=>categoryHandler(category)}> <img src={thumbnail} className="thumbnail-image cursor" alt = "photo_"/></div>
                        <p> {category} </p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
export {Home};