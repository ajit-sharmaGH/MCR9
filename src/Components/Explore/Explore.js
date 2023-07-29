import { useNavigate } from "react-router-dom";
import { useFilter } from "../../Context/FilterContext";
import { videos } from "../../Data/Videos";
import "./Explore.css";

const Explore = () => {
  const { filter } = useFilter();
const navigate = useNavigate();
  const applyFilter = () => {
    const { categoryName, searchQuery } = filter;

    let filteredCategory = videos;
    if (categoryName.length !== 0) {
      filteredCategory = videos.filter(({ category }) =>
        categoryName.includes(category)
      );
    }

    let filteredSearch = filteredCategory.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return filteredSearch;
  };

  const displayVideos = applyFilter();

  return (
    <div>
      {displayVideos.length === 0 ? (
        <div> No Matching Videos found </div>
      ) : (
        <ul className="flex-wrap">
          {displayVideos.map((video) => {
            return (
              <li key={video._id}>
                  
                <div className="margin-1 flex-col video-card" >
                  <img src={video.thumbnail} className="video-thumbnail" alt={"images"} 
                  
                   onClick={() => navigate(`/player/${video._id}`)}
                   />
                  <section className="flex">
                    <div className="mr-1">
                      {" "}
                      <img
                        src={video.thumbnail}
                        className="creator-profile"
                        alt="_"
                      />{" "}
                    </div>
                    <div>
                      <h3> {video.title} </h3>
                      <h5> {video.category} </h5>
                      <p>
                        {" "}
                        <span>{video.views} views</span>
                        {" | "}
                        <span> {video.creator} </span>{" "}
                      </p>
                    </div>
                  </section>
                </div>
              </li>
            );
          })}{" "}
        </ul>
      )}
    </div>
  );
};
export { Explore };
