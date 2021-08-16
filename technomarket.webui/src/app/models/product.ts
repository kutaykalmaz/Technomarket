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

export class CreateProductFormValues {
    id: string = '';
    name: string = '';
    price: number | undefined = undefined;
    quantity: number | undefined = undefined;
    isapproved: boolean = false;
    ishome: boolean = false;
    description: string = '';
    files: Blob[] | undefined = undefined;
    categoryId: string = '';
    subCategoryId: string = '';
}