import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { CategoryOptions } from '../models/categoryOptions';

export default class CategoryStore {
    categoryOptions : CategoryOptions[] = []
    loading = false;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadCategoryOptions = async () => {
        this.loading = true;
        try {
            const result = await agent.Categories.categoryOptions();
            result.forEach(categoryOptions => {
                this.setCategoryOptions(categoryOptions);
            })
            runInAction(() => this.loading = false);
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    private setCategoryOptions = (categoryOptions: CategoryOptions) => {
        this.categoryOptions.push(categoryOptions);
    }

    resetCategoriesOptions = () => {
        this.categoryOptions = []
    }
}