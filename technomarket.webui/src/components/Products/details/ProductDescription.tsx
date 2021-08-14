import { observer } from 'mobx-react-lite'
import React from 'react'
import { Container, Tab } from 'semantic-ui-react'

interface Props {
    description: string
}

const ProductDescription = ({description} : Props) => {
    return (
        <Tab.Pane>
            <Container fluid>
                {description}
            </Container>
        </Tab.Pane>
    )
}

export default observer(ProductDescription)
