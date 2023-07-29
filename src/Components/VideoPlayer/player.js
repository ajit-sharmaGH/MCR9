import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { videos } from "../../Data/Videos";
import {
  MdPlaylistAdd,
  MdWatchLater,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useWatchLater } from "../../Context/WatchLaterContext";
const VideoSinglePage = () => {
  const { videoId } = useParams();
  const { watchDispatch, watchState } = useWatchLater();
  const getVideoInfo = (id, video) => {
    const videoDetails = video.find((video) => id === String(video._id));
    return videoDetails;
  };

  const videoDisplaying = getVideoInfo(videoId, videos);

  const { src, title, views, _id } = videoDisplaying;

  return (
    <div className="player-container" key={_id}>
      <div className="mt-2">
        {src ? (
          <ReactPlayer url={src} controls />
        ) : (
          <div>Video source not available</div>
        )}
      </div>
      <section className="flex-row mt-1 mb-1">
        <div className="mr-auto">
          <p> {title} </p>
          <p> {views} | views </p>
        </div>
        <div className="mt-1">
          <MdPlaylistAdd size={23} />{" "}
          {watchState.watchLater.includes(videoDisplaying) ? (
            <MdWatchLater
              size={23}
              onClick={() => {
                watchDispatch({
                  type: "REMOVE_FROM_WATCHLIST",
                  payload: videoDisplaying,
                });
              }}
            />
          ) : (
            <MdOutlineWatchLater
              size={23}
              onClick={() => {
                watchDispatch({
                  type: "ADD_TO_WATCHLIST",
                  payload: videoDisplaying,
                });
              }}
            />
          )}
        </div>
      </section>
      <hr />
      <h2 className="mt-2">My Notes</h2>
    </div>
  );
};

export { VideoSinglePage };
