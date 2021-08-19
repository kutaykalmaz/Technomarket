import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import { Grid } from 'semantic-ui-react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)'
}

interface Props {
    loading: boolean
    color?: string
}

const LoadingComponent = (props: Props) => {
    return (
        <Grid>
            <Grid.Column style={style}>
                <BeatLoader color={props.color ? props.color : '#1B1C1D'} loading={props.loading} size={20} />
            </Grid.Column>
        </Grid>
    )
}

export default LoadingComponent
