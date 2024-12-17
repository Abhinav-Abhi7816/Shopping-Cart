import { createContext, useContext} from "react";

const ProductContext=createContext({products:[],cart:[]});

export const ProductContextProvider=ProductContext.Provider;

export default function useProductContext(){
    return useContext(ProductContext);
}