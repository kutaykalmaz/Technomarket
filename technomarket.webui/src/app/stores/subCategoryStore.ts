import { makeAutoObservable, runInAction } from 'mobx';
import { ISelectedSubCategory } from '../../pages/admin/CreateCategoryPage';
import agent from '../api/agent';
import { SubCategoryOptions } from '../models/categoryOptions';
import { store } from './store'

export default class SubCategoryStore {
    subCategoryOptions: SubCategoryOptions[] = []
    relatedSubCategoriesOptions: SubCategoryOptions[] = []
    loading = false;
    calculateLoading = false;
    deleteLoading = false;
    selectedSubCategory: ISelectedSubCategory = { id: '', name: '', category: '' }

    constructor() {
        makeAutoObservable(this)
    }

    setSelectedSubCategory = (props: ISelectedSubCategory) => {
        this.selectedSubCategory = { id: props.id, name: props.name, category: props.category }
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

    createSubCategory = async (subCategory: ISelectedSubCategory) => {
        this.loading = true;
        try {
            await agent.SubCategories.create(subCategory)
            store.categoryStore.addOrUpdateSubCategory(subCategory);
            runInAction(() => this.loading = false)
        } catch (error) {
            console.log(error)
            runInAction(() => this.loading = false)
        }
    }

    updateSubCategory = async (subCategory: ISelectedSubCategory) => {
        this.loading = true;
        try {
            await agent.SubCategories.update(subCategory)
            store.categoryStore.addOrUpdateSubCategory(subCategory);
            runInAction(() => this.loading = false)
        } catch (error) {
            console.log(error)
            runInAction(() => this.loading = false)
        }
    }

    deleteSubCategory = async (subCategory: ISelectedSubCategory) => {
        this.deleteLoading = true;
        try {
            await agent.SubCategories.delete(subCategory.id)
            store.categoryStore.deleteSubCategory(subCategory)
            runInAction(() => this.deleteLoading = false)
        } catch (error) {
            console.log(error)
            runInAction(() => this.deleteLoading = false)
        }
    }



    private setSubCategoryOptions = (subCategoryOptions: SubCategoryOptions) => {
        this.subCategoryOptions.push(subCategoryOptions);
    }

    relatedSubCategories = async (categoryId: string) => {
        this.relatedSubCategoriesOptions = [];
        this.calculateLoading = true;
        this.subCategoryOptions.forEach((value) => {
            if (value.categoryid === categoryId) this.relatedSubCategoriesOptions.push(value);
        })
        runInAction(() => this.calculateLoading = false);
    }

    resetSubCategoriesOptions = () => {
        this.subCategoryOptions = []
    }
}