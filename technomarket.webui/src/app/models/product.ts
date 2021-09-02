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

export class EditProductFormValues {
    id: string = '';
    name: string = '';
    price: number | undefined = undefined;
    quantity: number | undefined = undefined;
    isapproved: boolean = false;
    ishome: boolean = false;
    description: string = '';
    categoryId: string = '';
    subCategoryId: string = '';

    constructor(product?: Product) {
        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.price = product.price;
            this.quantity = product.quantity;
            this.isapproved = product.isApproved;
            this.ishome = product.isHome;
            this.description = product.description;
            this.categoryId = product.category;
            this.subCategoryId = product.subCategory
        }

    }
}