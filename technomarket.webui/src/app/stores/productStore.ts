import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Product } from '../models/product';

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
        let product = this.getProduct(id);

        if (product) {
            this.selectedProduct = product;
        } else {
            this.loadingInitial = true;
            try {
                product = await agent.Products.details(id);
                runInAction(() => {
                    this.selectedProduct = product;
                })
                this.setLoadingInitial(false);
            } catch (error) {
                console.log(error)
                this.setLoadingInitial(false);
            }
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