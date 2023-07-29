import { categories } from "../../Data/Category";
import "./Home.css";
const Home = ()=>{
    return (
        <div>
            <h2>Categories</h2>
            <section className="home-categories-container flex-wrap mt-3 mr-1">
                {categories.map(({_id, thumbnail, category})=>{
                    return (
                        <div key={_id} className="margin-1">
                        <img src={thumbnail} className="thumbnail-image cursor" alt = "photo_"/>
                        <p> {category} </p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
export {Home};