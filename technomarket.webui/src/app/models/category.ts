import { ProductPhoto } from "./productPhoto";

export interface Category {
    id: string,
    name: string,
    subCategories?: SubCategory[]

}

export interface SubCategory {
    id: string,
    name: string,
    products: ProductBasicModel[]
}

export interface ProductBasicModel {
    id: string,
    name: string,
    price: number,
    quantity: number,
    isApproved: boolean,
    isHome: boolean,
    description: string,
    photos: ProductPhoto[]
}