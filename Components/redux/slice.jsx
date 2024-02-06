import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd: [],
  categorias:[]
};


export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      // console.log(action.payload, "reducer articulos");
      state.allProduct = action.payload;
      state.copyallProducts = action.payload;
    },
    allCategorias:(state, action) => {
      // console.log(action.payload, "reducer articulos");
      state.categorias = action.payload;
    },
    
    favProducts: (state, action) => {
      state.favProd = [...state.favProd, action.payload];
    },
    cancelBagProducts: (state, action) => {
      const indexProd = state.favProd.map(object => object.name).indexOf(action.payload);
      console.log(indexProd);
      if (indexProd !== "-1") {
        const newBag = state.favProd.splice(indexProd,1)
        state.favProd = state.favProd.filter(e => e !== newBag)
      } 
    },
    SearchProducts: (state, action) => {
      state.copyallProducts = state.copyallProducts
      .filter((e) => e.name.includes(action.payload) === true)
      .slice(0, 10);
    },
  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
const API_STRAPI_ARTICTULOS = process.env.REACT_APP_API_STRAPI_ARTICTULOS;
const API_CATEGORIAS = process.env.REACT_APP_API_STRAPI_CATEGORIAS;

export const asyncAllProducts = () => {
  console.log("All PRODUCTS SLICE");
  return async function (dispatch) {
    try {
      const response = await axios.get(API_STRAPI_ARTICTULOS);
      console.log(response.data.data,"todo lo que trae de articulos");
      return dispatch(allProducts(response.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
export const asyncCategorias = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(API_CATEGORIAS);
      return dispatch(allCategorias(response.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const asyncfavProducts = (pedido) => {
  return async function (dispatch) {
    return dispatch(favProducts(pedido));
  };
};
export const asyncCancelFav = (pedido) => {
  return async function (dispatch) {
    return dispatch(cancelBagProducts(pedido));
  };
};
export const asyncSearchBar = (string) => {
  return async function (dispatch) {
    return dispatch(SearchProducts(string));
  };
};
export const asyncOrder = (pedido)=>{
  return async function ( dispatch ){
    try{
      await axios.post(`https://ecommerce-demo.onrender.com/addP`,pedido);
      console.log("posteado correctamente, sliceee")
        return dispatch()
    }catch(error){
      console.log(error, "from Order")
    }
  }
}

//----------------------------------------------------------------------------------------------------------------

export const { allProducts, favProducts, cancelBagProducts, SearchProducts, allCategorias } =
  dataSlice.actions;

export default dataSlice.reducer;
