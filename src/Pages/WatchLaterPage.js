import { Sidebar } from "../Components/Sidebar/Sidebar";
import { WatchLater } from "../Components/WatchLater/WatchLater";

const WatchLaterPage = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <WatchLater />
      </div>
    </div>
  );
};
export { WatchLaterPage };
