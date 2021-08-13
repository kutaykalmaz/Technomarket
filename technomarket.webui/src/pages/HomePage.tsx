import React from 'react'
import { Container } from 'semantic-ui-react'
import ProductDashboard from '../components/Products/dashboard/ProductDashboard'
import Jumbotron from '../components/Home/jumbotron/Jumbotron'


const HomePage = () => {
    return (
        <>
            <Jumbotron />
            <Container>
                <ProductDashboard />
            </Container>
        </>
    )
}

export default HomePage
