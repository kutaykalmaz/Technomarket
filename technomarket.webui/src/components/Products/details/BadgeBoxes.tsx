import React from 'react'
import { GiCargoCrate, GiReceiveMoney } from 'react-icons/gi'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Grid } from 'semantic-ui-react'

const iconStyle = {
    fontSize: '30px',
    color: '#389bc9',
}

const boxStyle = {
    padding: '5px 10px',
    fontSize: '14px',
    marginRight: '5px'
}


const BadgeBoxes = () => {
    return (
        <>

            <Grid.Column width='5' style={boxStyle}>
                <div style={{ float: 'left', width: '80%', fontWeight: 'bold' }}>
                    TechnoJET Bugün Teslimat Seçeneği
                </div>
                <div style={{ float: 'right', width: '20' }}>
                    <AiFillCheckCircle style={iconStyle} />
                </div>
            </Grid.Column>

            <Grid.Column width='5' style={boxStyle}>
                <div style={{ float: 'left', width: '75%', fontWeight: 'bold' }}>
                    Alışveriş Kredisi Seçenekleri

                </div>
                <div style={{ float: 'right', width: '25%', top: '50%' }}>
                    <GiReceiveMoney style={iconStyle} />
                </div>
            </Grid.Column>

            <Grid.Column width='4' style={boxStyle}>
                <div style={{ float: 'left', width: '75%', fontWeight: 'bold' }}>
                    24 saatte kargoda
                </div>
                <div style={{ float: 'right', width: '25%' }}>
                    <GiCargoCrate style={iconStyle} />
                </div>

            </Grid.Column>
        </>
    )
}

export default BadgeBoxes
