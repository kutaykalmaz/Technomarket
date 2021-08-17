import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { SubCategoryOptions } from '../models/categoryOptions';

export default class CategoryStore {
    subCategoryOptions: SubCategoryOptions[] = []
    relatedSubCategoriesOptions: SubCategoryOptions[] = []
    loading = false;
    calculateLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadSubCategoryOptions = async () => {
        this.loading = true;
        try {
            const result = await agent.SubCategories.subCategoriesOptions();
            result.forEach(subCategoryOptions => {
                this.setSubCategoryOptions(subCategoryOptions);
            })
            runInAction(() => this.loading = false);
        } catch (error) {
            console.log(error);
        }
    }

    private setSubCategoryOptions = (subCategoryOptions: SubCategoryOptions) => {
        this.subCategoryOptions.push(subCategoryOptions);
    }

    relatedSubCategories = async (categoryId: string) => {
        this.relatedSubCategoriesOptions = [];
        this.calculateLoading = true;
        this.subCategoryOptions.forEach((value) => {
            if(value.categoryid === categoryId) this.relatedSubCategoriesOptions.push(value);
        })
        runInAction(() => this.calculateLoading = false);
    }

    resetSubCategoriesOptions = () => {
        this.subCategoryOptions = []
    }
}