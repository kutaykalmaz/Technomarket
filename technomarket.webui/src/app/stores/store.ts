import ProductStore from "./productStore";
import CategoryStore from "./categoryStore";
import subCategoryStore from "./subCategoryStore";
import { createContext, useContext } from 'react'

interface Store {
    productStore: ProductStore,
    categoryStore: CategoryStore,
    subCategoryStore: subCategoryStore
}

export const store: Store = {
    productStore: new ProductStore(),
    categoryStore: new CategoryStore(),
    subCategoryStore: new subCategoryStore()
}

export const StoreContext = createContext(store);


export function useStore() {
    return useContext(StoreContext)
}