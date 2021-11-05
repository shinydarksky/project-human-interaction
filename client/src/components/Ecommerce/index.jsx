import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import './style.scss'
import { Grid } from '@material-ui/core'
// import ImageGrind from './ImageGrid'
import MainImage from './MainImage'
import InforImage from './InforImage'
import { useSelector } from 'react-redux'
// import Map from './Map'
import TopNav from '../TopNav'
import { menu } from '../../pages/data'
import Suggestion from '../Suggestion'
import axios from 'axios'
import { apiUrls_animalfamily } from '../../api/apiUrls'
export default function Ecommerce(props) {
    const [selectImage, setSelectImage] = useState(0)
    const [animalFamily, setAnimalFamily] = useState([])

    const animals = useSelector(state => state.animals.animalList)
    const [data, setData] = useState()

    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const id_animal = params.get('id');
        const animalDetail = animals.find((element => element.ma_dv.toString() === id_animal))
        setData(animalDetail)
    }, [data, animals, props])
    let images = []

    if (data) {
        images = data.images.map((image) => {
            return image.lien_ket
        })
    }

    useEffect(() => {
        function loadData() {
            axios
                .get(`${apiUrls_animalfamily}/getAnimalFamilyList`)
                .then(({ data }) => {
                    setAnimalFamily(data.content)
                })
        }
        loadData()
    }, [])


    let famiyName = {
        ma_ho: '',
        ten_ho: ''
    }

    if (data && animalFamily) {
        const temp = animalFamily.find(element => element.ma_ho.toString() === data.ma_ho.toString())
        if (temp) {
            famiyName = temp
        }
    }

    function onChangeImage(page) {
        if (images.length === 1) return

        if (page < 0) {
            setSelectImage(images.length - 1)
            return
        }
        if (page === images.length) {
            setSelectImage(0)
            return
        }
        setSelectImage(page)
    }

    return (
        <div >
            <div className="wrap-content-animal" style={{ overflow: 'none' }} >
                <TopNav menu={menu} />
                {/* <a href="../">
                    <div className="home-button"> <div>&#60; Trang chủ</div></div>
                </a> */}
                <Grid className="animal-main" container justifyContent="center">
                    <Grid className="animal-image"
                        item
                        sm={12} md={6}
                    >

                        <div className="main-image" >
                            <MainImage src={images[selectImage]} />
                            { images.length>1 &&
                                <div>
                                    <button className="btn-slide btn-left" onClick={() => onChangeImage(selectImage - 1)}></button>
                                    <button className="btn-slide btn-right" onClick={() => onChangeImage(selectImage + 1)}></button>
                                </div>
                            }
                            <p style={{ textAlign: 'center', paddingTop: 50 }}> Hình động vật</p>
                        </div>

                        {/* <div className="item-image" style={{ width: 400 }}>
                            <ImageGrind images={images} onSelection={image => setSelectImage(image)} />
                        </div> */}
                    </Grid>

                    <Grid className="animal-content" item sm={12} md={6}  >
                        <InforImage data={data} name={famiyName.ten_ho} />
                    </Grid >
                </Grid>
            </div>

            <Suggestion animals={animals} data={data} id={famiyName.ma_ho} />
            <Footer />
        </div>
    )
}
