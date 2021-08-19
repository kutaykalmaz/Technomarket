import React, { useState } from 'react'
import { ProductPhoto } from '../../../../app/models/productPhoto'
import './ImageSlider.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Grid, Image } from 'semantic-ui-react'

interface Props {
    productPhotos: ProductPhoto[]
}

const ImageSlider = ({ productPhotos }: Props) => {

    const [current, setCurrent] = useState(0);
    const length = productPhotos.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(productPhotos) || length <= 0) {
        return null;
    }

    return (
        <>
            <section className='slider'>
                {productPhotos.map((photo, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={photo.url} alt={photo.id} className='image' />)}
                        </div>
                    )
                })
                }
            </section>

            <Grid style={{ marginTop: '10px', alignItems: 'center' }}>
                <Grid.Column width='2'>
                    <MdKeyboardArrowLeft className='left-arrow' onClick={prevSlide} />
                    {/* className={index === current ? 'border' : ''} */}
                </Grid.Column>
                <Grid.Column width='12'>
                    <Image.Group size='tiny'>
                        {
                            length > 2 ?
                                <>
                                    <Image src={productPhotos[current - 1 === -1 ? length - 1 : current - 1].url} />
                                    <Image src={productPhotos[current].url} className='border' />
                                    <Image src={productPhotos[current + 1 === length ? 0 : current + 1].url} />
                                </> :
                                <>
                                    {productPhotos.map((photo, index) => (
                                        <Image key={photo.id} src={photo.url} className={index === current ? 'border' : ''} />
                                    ))}
                                </>
                        }

                    </Image.Group>
                </Grid.Column>
                <Grid.Column width='2'>
                    <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />
                </Grid.Column>
            </Grid>
        </>
    )
}

export default ImageSlider
