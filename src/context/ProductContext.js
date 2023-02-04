// import { createContext, useEffect, useReducer, useState } from "react"
// import axios from "axios";
// import reducer from "../reducer/ProductReducer"

// const AppContext = createContext();


// const API = "https://api.pujakaitem.com/api/products";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
// };



// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useState([]);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;
//       console.log("my array",products)
//       var temp = [];
//       temp = products
//       console.log("temp",temp)
//       dispatch(temp);
//     } catch (error) {
//       dispatch({ type: "API_ERROR" })
//     }

//   }

//   console.log("saa",state)

//   useEffect(() => {
//     getProducts(API);
//   }, []);
  

//   return (
//     <AppContext.Provider 
//     // value={state.length>0?state.map((data,index)=>(data.company)):"no data found"}
//     >
    
//       <h2>{initialState.isLoading}</h2>
//       {children}</AppContext.Provider>
//   )
// }


// export { AppProvider, AppContext }