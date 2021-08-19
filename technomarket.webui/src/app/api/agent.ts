import axios, { AxiosResponse } from 'axios';
import { CreateProductFormValues, Product } from '../models/product';
import { CategoryOptions, SubCategoryOptions } from '../models/categoryOptions'
import { Category } from '../models/category';
import { ISelectedCategory } from '../../pages/admin/CreateCategoryPage';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
})

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Products = {
    list: () => requests.get<Product[]>('/products'),
    details: (id: string) => requests.get<Product>(`/products/${id}`),
    create: (product: CreateProductFormValues) => {
        let formData = new FormData();
        product.files?.forEach(file => {
            formData.append('Files', file)
        })
        formData.append('Id', product.id)
        formData.append('name', product.name)
        formData.append('price', JSON.stringify(product.price))
        formData.append('quantity', JSON.stringify(product.quantity))
        formData.append('description', product.description)
        formData.append('isapproved', JSON.stringify(product.isapproved))
        formData.append('ishome', JSON.stringify(product.ishome))
        formData.append('categoryId', product.categoryId)
        formData.append('subCategoryId', product.subCategoryId)
        return axios.post<CreateProductFormValues>('/products', formData, {
            headers: { 'Content-type': 'multipart/form-data' }
        })
    
    
    }
}

const Categories = {
    list: () => requests.get<Category[]>('/categories'),
    create: (category: ISelectedCategory) => requests.post<void>('/categories', category),
    update: (category: ISelectedCategory) => requests.put<void>(`/categories/${category.id}`, category),
    delete: (id: string) => requests.del<void>(`/categories/${id}`),
    categoryOptions: () => requests.get<CategoryOptions[]>('/categories/options')
}

const SubCategories = {
    subCategoriesOptions: () => requests.get<SubCategoryOptions[]>('/subcategories/options')
}

const agent = {
    Products,
    Categories,
    SubCategories
}

export default agent;