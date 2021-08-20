import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Grid, Header } from 'semantic-ui-react'
import CreateCategoryForm from '../../components/Category/form/CreateCategoryForm'
import CreateSubCategoryForm from '../../components/Category/form/CreateSubCategoryForm'
import CreateCategoryList from '../../components/Category/form/CreateCategoryList'
import { useStore } from '../../app/stores/store'
import LoadingComponent from '../../app/common/LoadingComponent'

export interface ISelectedCategory {
    id: string
    name: string
}

export interface ISelectedSubCategory {
    id: string,
    name: string,
    category: string
}

const INITIAL_VALUES_CATEGORY: ISelectedCategory = {
    id: '',
    name: ''
}



const CreateCategoryPage = () => {

    const [selectedCategory, setSelectedCategory] = useState(INITIAL_VALUES_CATEGORY)
    const { categoryStore } = useStore()
    const { loading, loadCategory, resetCategory, category } = categoryStore

    useEffect(() => {
        loadCategory()
        return (() => resetCategory());
    }, [loadCategory, resetCategory])

    if (loading) return (<LoadingComponent loading={loading} />)


    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='16'>
                    <Header content='Kategoriler' as='h2' textAlign='center' />
                    <CreateCategoryList category={category} setSelectedCategory={setSelectedCategory} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width='8'>
                    <Header content='Kategori Oluştur' as='h2' textAlign='center' />
                    <CreateCategoryForm selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Grid.Column>
                <Grid.Column width='8'>
                    <Header content='Alt Kategori Oluştur' as='h2' textAlign='center' />
                    <CreateSubCategoryForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default observer(CreateCategoryPage)
