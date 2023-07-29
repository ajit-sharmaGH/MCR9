import { AiFillDelete } from "react-icons/ai";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { useNavigate } from "react-router-dom";
import "./WatchLater.css";
const WatchLater = () => {
  const { watchState, watchDispatch } = useWatchLater();
  const navigate= useNavigate();
  return (
    <>
    <h3 className="mt-1"> Watch List </h3>
    <div className="watchLater-container flex-wrap mt-2">
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
            <div className="pt-1 margin-1"  key = {_id}>
               
              <div  onClick ={()=>navigate(`/player/${_id}`)}  className="img-context-box">
                <div className="ml-1 mr-1">
                  <img src={thumbnail} className="mb-1" alt={title} />
                  <p> {title} </p>
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
              <AiFillDelete size={24}
                className="icons heart-icon"
                color="red"
                onClick={() => {
                  watchDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: video });
                }}
              />
            </div>
          );
        })
      ) : (
        <div className="flex-center pt-2 fw-800">Empty Watch-list</div>
      )}
    </div>
    </>
  );

};
export { WatchLater};