import {createContext, useContext, useReducer} from "react";
import { initialWatchList, watchReducer } from "../Reducers/WatchLaterReducer";


const defaultWatchValue = {};
const WatchContext = createContext(defaultWatchValue);

 const WatchContextProvider = ({children})=>{

    const [watchState, watchDispatch] = useReducer(
        watchReducer,
        initialWatchList
    )
    return(
        <WatchContext.Provider value={{watchState, watchDispatch}}>
            {children}
        </WatchContext.Provider>
    );
};
 const useWatchLater = () =>useContext(WatchContext);
 export {useWatchLater, WatchContextProvider}