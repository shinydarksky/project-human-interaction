import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ImageGrind from './ImageGrid'
import MainImage from './MainImage'
import InforImage from './InforImage'

// import Map from './Map'
import TopNav from '../TopNav'
import { menu } from '../../pages/data'

export default function Ecommerce(props) {
    const [selectImage, setSelectImage] = useState(1)

    const images = [
        'https://birdwatchingvietnam.net/images/bird/1036/fire-tufted-barbet-2885.jpg',
        'https://birdwatchingvietnam.net/images/bird/1036/fire-tufted-barbet-2886.jpg',
        'https://birdwatchingvietnam.net/images/bird/1036/fire-tufted-barbet-2885.jpg',
        'https://birdwatchingvietnam.net/images/bird/1036/fire-tufted-barbet-2886.jpg',
        'https://birdwatchingvietnam.net/images/bird/1036/fire-tufted-barbet-2885.jpg',
    ]

    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const id_animal = params.get('id'); 
        console.log(id_animal)
    })

    return (
        <>
            <TopNav menu={menu} />
            <Grid container spacing={5} style={{ margin: "0 auto", maxWidth: 1100, marginTop: 62 }} >
                <Grid item container sm={6} alignItems="center" justifyContent="center">
                    <Grid item >
                        <MainImage src={images[selectImage]} />
                    </Grid >
                    <Grid item style={{ textAlign: 'center' }}>
                        <ImageGrind images={images} onSelection={image => setSelectImage(image)} />
                    </Grid>
                </Grid>

                <Grid item sm={6} >
                    <InforImage />
                </Grid >
                {/* <Grid item sm={4}>
                    <div style={{width:'100%',height:'50px'}}>
                        <Map arrLocation={[]}/>
                    </div>
                </Grid > */}
            </Grid>
        </>
    )
}
