import ProductStore from "./productStore";
import { createContext, useContext } from 'react'

interface Store {
    productStore: ProductStore
}

export const store: Store = {
    productStore: new ProductStore()
}

export const StoreContext = createContext(store);


export function useStore() {
    return useContext(StoreContext)
}