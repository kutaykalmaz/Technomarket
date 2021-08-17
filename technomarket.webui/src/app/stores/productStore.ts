import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { CreateProductFormValues, Product } from '../models/product';

export default class ProductStore {
    products: Product[] = []
    loadingInitial = false;
    selectedProduct: Product | undefined = undefined;

    constructor() {
        makeAutoObservable(this)
    }

    loadProducts = async () => {
        this.loadingInitial = true;
        try {
            const result = await agent.Products.list();
            result.forEach(product => {
                this.setProduct(product)
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadProduct = async (id: string) => {
        this.loadingInitial = true;
        try {
            const product = await agent.Products.details(id);
            runInAction(() => {
                this.selectedProduct = product;
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error)
            this.setLoadingInitial(false);
        }

    }

    createProduct = async (product: CreateProductFormValues) => {
        try {
            await agent.Products.create(product);
            const newProduct = await agent.Products.details(product.id);
            runInAction(() => {
                this.selectedProduct = newProduct;
            })
        } catch (error) {
            console.log(error)
        }
    }







    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    private setProduct = (product: Product) => {
        this.products.push(product);
    }

    resetProducts = () => {
        this.products = [];
    }

    resetSelectedProduct = () => {
        this.selectedProduct = undefined;
    }

    private getProduct = (id: string) => {
        return this.products.find(product => product.id === id);
    }
}