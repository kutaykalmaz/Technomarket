import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import { Grid } from 'semantic-ui-react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)'
}

interface Props {
    loadingInitial: boolean
}

const LoadingComponent = ({ loadingInitial }: Props) => {
    return (
        <Grid>
            <Grid.Column style={style}>
                <RingLoader color={'#1B1C1D'} loading={loadingInitial} size={60} />
            </Grid.Column>
        </Grid>
    )
}

export default LoadingComponent
