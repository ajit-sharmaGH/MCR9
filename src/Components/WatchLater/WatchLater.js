import { MdWatchLater } from "react-icons/md";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { useNavigate } from "react-router-dom";
import "./WatchLater.css";
const WatchLater = () => {
  const { watchState, watchDispatch } = useWatchLater();
  const navigate= useNavigate();
  return (
    <div className="like-container bg-theme-changer">
      {watchState.watchLater.length !== 0 ? (
        
        watchState.watchLater.map((video) => {
          const {
           _id,
            title,
            thumbnail,
            creator,
            views,
          
           
          } = video;
          return (
            <div className="like-sub-container pt-1"  key = {_id}>
                <b className="margin-1">Watch List Video</b>
              <div  onClick ={()=>navigate(`/player/${_id}`)}  className="img-context-box">
                <div className="ml-1 mr-1">
                  <img src={thumbnail} className="like-video-images" alt={title} />
                </div>
                <div className="content-box pl-1 pr-1 flex-col bg-theme-changer">
                  <span className="video-views">
                    {" "}
                    {views}
                    {" views "}
                  </span>
                  <span className="video-creator fw-600 mt-1">{creator}</span>
                </div>
              </div>
              <MdWatchLater
                className="icons heart-icon"
                color="red"
                onClick={() => {
                  watchDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: video });
                }}
              ></MdWatchLater>
            </div>
          );
        })
      ) : (
        <div className="flex-center pt-2 fw-800">Empty Watch-list</div>
      )}
    </div>
  );
};
export { WatchLater};