const filterReducer = (prevState, {type, payload})=>{
    switch(type){
        case "FILTER_CATEGORY":
            return {
               
                filter: {
                    // ...prevState.filter,
                    // categoryName: prevState.filter.categoryName.find((name)=>name===payload) ? 
                    // prevState.filter.categoryName.filter((name)=> name !== payload)
                    // : [...prevState.filter.categoryName, payload],
                    ...prevState.filter, 
                    categoryName:  [...prevState.filter.categoryName, payload]
                },
            };

             case "FILTER_SEARCH_QUERY":
                return {
                    ...prevState, 
                    filter: {...prevState.filter, searchQuery: payload}
                }

            default:
                return prevState;
    }
}
export {filterReducer}