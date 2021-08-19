import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Grid, Header } from 'semantic-ui-react'
import CreateCategoryForm from '../../components/Category/form/CreateCategoryForm'
import CreateCategoryList from '../../components/Category/form/CreateCategoryList'
import { useStore } from '../../app/stores/store'
import LoadingComponent from '../../app/common/LoadingComponent'

export interface ISelectedCategory {
    id: string
    name: string
}

const INITIAL_VALUES: ISelectedCategory = {
    id: '',
    name: ''
}


const CreateCategoryPage = () => {

    const [selectedCategory, setSelectedCategory] = useState(INITIAL_VALUES)
    const { categoryStore } = useStore()
    const { loading, loadCategory, resetCategory, category } = categoryStore

    useEffect(() => {
        loadCategory()
        return (() => resetCategory());
    }, [loadCategory, resetCategory])

    if (loading) return (<LoadingComponent loading={loading} />)


    return (
        <Grid>
            {/* <Grid.Column width='6'>
                <Header content='Kategori Oluştur' as='h2' textAlign='center' />
                <CreateCategoryForm selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Grid.Column> */}
            <Grid.Column width='16'>
                <Header content='Kategoriler' as='h2' textAlign='center' />
                <CreateCategoryList category={category} setSelectedCategory={setSelectedCategory} />
            </Grid.Column>
        </Grid>
    )
}

export default observer(CreateCategoryPage)
