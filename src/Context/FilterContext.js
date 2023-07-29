import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducers/filterReducer";

const FilterContext = createContext();
const FilterContextProvider = ({ children }) => {
  const [filterData, dispatch] = useReducer(filterReducer, {
    filter: {
      categoryName: [],
      searchQuery: "",
    },
  });

  const addFilterCategory = (categoryName) => {
    dispatch({
      type: "FILTER_CATEGORY",
      payload: categoryName,
    });
  };

  const addFilterQuery = (e) => {
    dispatch({
      type: "FILTER_SEARCH_QUERY",
      payload: e.target.value,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        addFilterCategory,
        addFilterQuery,
        filter: filterData.filter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterContextProvider };
