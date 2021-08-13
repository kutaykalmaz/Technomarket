import React from 'react'
import { Button } from 'semantic-ui-react'

const CategoryList = () => {
    return (
        <Button.Group vertical widths='4'>
            <Button>Feed</Button>
            <Button>Messages</Button>
            <Button>Events</Button>
            <Button>Photos</Button>
        </Button.Group>
    )
}

export default CategoryList
