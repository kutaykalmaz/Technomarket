import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { CategoryOptions } from '../models/categoryOptions';
import { Category } from '../models/category'
import { ISelectedCategory } from '../../pages/admin/CreateCategoryPage';

export default class CategoryStore {
    category: Category[] = []
    categoryOptions: CategoryOptions[] = []
    loading = false;
    deleteLoading = false;
    loadingPost = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadCategory = async () => {
        this.loading = true;
        try {
            const result = await agent.Categories.list();
            result.forEach(category => {
                this.setCategory(category);
            })
            runInAction(() => this.loading = false);
        } catch (error) {
            console.log(error)
            runInAction(() => this.loading = false);
        }
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

    createCategory = async (category: ISelectedCategory) => {
        this.loadingPost = true
        try {
            await agent.Categories.create(category);
            runInAction(() => {
                this.category.push(category)
                this.loadingPost = false
            })
        } catch (error) {
            console.log(error)
            runInAction(() => this.loadingPost = false)
        }
    }

    updateCategory = async (category: ISelectedCategory) => {
        this.loadingPost = true
        try {
            await agent.Categories.update(category)
            runInAction(() => {
                this.category.forEach((value) => {
                    if(value.id === category.id) value.name = category.name
                    this.loadingPost = false;
                })
            })
        } catch (error) {
            console.log(error)
            runInAction(() => this.loadingPost = false)
        }
    }

    deleteCategory = async (id: string) => {
        this.deleteLoading = true
        try {
            await agent.Categories.delete(id)
            runInAction(() => {
                this.category = this.category.filter(c => c.id !== id)
                this.deleteLoading = false
            })
        } catch (error) {
            console.log(error)
            runInAction(() => this.deleteLoading = false)
        }
    }

    private setCategory = (category: Category) => {
        this.category.push(category)
    }

    private setCategoryOptions = (categoryOptions: CategoryOptions) => {
        this.categoryOptions.push(categoryOptions);
    }

    resetCategoriesOptions = () => {
        this.categoryOptions = []
    }

    resetCategory = () => {
        this.category = []
    }
}