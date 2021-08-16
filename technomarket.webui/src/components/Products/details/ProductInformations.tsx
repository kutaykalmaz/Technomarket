import React from 'react'
import { Grid, Header, Icon, Button } from 'semantic-ui-react'
import { Product } from '../../../app/models/product'
// import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './styles/ProductInformation.css'
import AddToCart from './AddToCart'
import InformationTop from './InformationTop'
import { observer } from 'mobx-react-lite'
import BadgeBoxes from './BadgeBoxes'


interface Props {
    product: Product
}

const tomorrow = () => {
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    return (`${day} ${aylar[month]} ${gunler[currentDate.getDay()]}`)
}




const ProductInformations = ({ product }: Props) => {
    return (
        <>
            <Header as='h3' content={product.name} />
            <Link to='#' className='categoryLink'>{product.subCategory}</Link>
            <Grid style={{ marginTop: '10px' }}>
                <Grid.Row>
                    <Grid.Column >
                        <InformationTop product={product} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width='16'>
                        <div style={{ borderTop: '1px solid #adadad' }} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <AddToCart />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        En geç <b>{tomorrow()}</b> günü kargoda
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ marginTop: '20px' }} centered>
                    <BadgeBoxes />
                </Grid.Row>

                <Grid.Row centered>
                    <Grid.Column width='3'>
                        <Button icon size='mini' inverted secondary>
                            <Icon name='heart' /> Beğen
                        </Button>
                    </Grid.Column>
                    <Grid.Column width='4'>
                        <Button icon size='mini' inverted secondary>
                            <Icon name='bookmark' /> Listeme Ekle
                        </Button>
                    </Grid.Column>
                    <Grid.Column width='4'>
                        <Button icon size='mini' inverted secondary>
                            <Icon name='bell' /> İndirim Alarmı
                        </Button>
                    </Grid.Column>
                    <Grid.Column width='4'>
                        <Button icon size='mini' inverted secondary>
                            <Icon name='exchange' /> Karşılaştır
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default observer(ProductInformations)
