import React from 'react'
import { Grid, Placeholder, Segment } from 'semantic-ui-react'


const SkeletonProductItem = () => {
    return (
        <Grid.Column >
            <Segment raised>
                <Placeholder>
                    <Placeholder.Header style={{ height: '250px' }}>
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='medium' />
                    </Placeholder.Paragraph>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='short' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        </Grid.Column>
    )
}

export default SkeletonProductItem
