import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import { menu } from './data'
import Search from '../components/Search'
import axios from 'axios'
import { apiUrls_animalfamily } from '../api/apiUrls'
import { useSelector } from 'react-redux'
import AnimalCard from '../components/AnimalCard'
import { Pagination } from '@material-ui/lab'
export default function AnimalFamilyPage() {
    const [selectFamily, setSelectFamily] = useState()
    const [animalFamily, setAnimalFamily] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const animals = useSelector(state => state.animals.animalList)
    const [searchText, setSearchText] = useState('')

    let totalPage = 0

    const onChangePage = (event, value) => {
        setCurrentPage(value);
    }

    function handleSearch(value) {
        setSearchText(value);
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
        const param = new URLSearchParams(window.location.search);
        if (param.get("id")) {
            setSelectFamily(param.get("id").replaceAll('"', '').trim())
        }
    }, [])


    let famiyName

    if (selectFamily) {
        famiyName = animalFamily.find(element => element.ma_ho.toString() === selectFamily)

    }


    function renderListAnimalFamily() {
        if (animalFamily) {
            return animalFamily.map((item) => {
                return <div
                    key={item.ma_ho}
                    className="family-item"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '?id=' + item.ma_ho
                    }}
                >
                    {item.ten_ho}
                </div >

            })
        }
    }

    function renderCardList() {
        const first = (currentPage - 1) * 30
        const last = first + 30
        let animalCurrent = animals

        if (selectFamily) {
            animalCurrent = animalCurrent.filter((animal) => animal.ma_ho.toString() === selectFamily)
        }

        if (searchText) {
            animalCurrent = animalCurrent.filter((animal) => (animal.ten_dv.search(searchText) >= 0))
        }

        totalPage = Math.ceil(animalCurrent.length / 30)

        return animalCurrent.slice(first, last).map((animal, index) => {
            return (
                <div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
                    <a href={"/detail?id=" + animal.ma_dv}><AnimalCard animal={animal} /></a>
                </div>
            )
        })
    }


    return (
        <div>
            <TopNav menu={menu} />
            <Search onSearch={handleSearch} />
            <div className="wrap-content">
                {!selectFamily ?
                    <div className="container wrap-family">
                        {renderListAnimalFamily()}
                    </div>
                    :
                    <div className="wrap-family-animal">
                        <div className="title">
                            <h3>Danh sách động vật thuộc họ: {famiyName && famiyName.ten_ho}
                                <button
                                    onClick={() => setSelectFamily('')}
                                >x</button>
                            </h3>

                        </div>
                        <div className="grid-layout">
                            <div className="container">
                                <div className="row">{renderCardList()}</div>
                            </div>
                        </div>
                        <div className="num_page">
                            {totalPage > 1 && <Pagination count={totalPage} onChange={onChangePage} />}
                        </div>
                    </div>
                }
            </div>

            <Footer />
        </div>
    )
}
