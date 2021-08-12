import { ProductPhoto } from "./productPhoto";

export interface Product {
    id: string,
    name: string,
    price: number,
    quantity: number,
    isApproved: boolean,
    isHome: boolean,
    description: string,
    photos: ProductPhoto[],
    category: string,
    subCategory: string
}