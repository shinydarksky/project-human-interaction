import React, { useState } from 'react'
import AnimalCard from '../AnimalCard'
import { Link } from 'react-router-dom'
import './style.scss'
import { Pagination } from '@material-ui/lab'
export default function Suggestion({ animals, id = 70 }) {
    const [currentPage, setCurrentPage] = useState(1)
    let totalPage = 0
    const onChangePage = (event, value) => {
        setCurrentPage(value);
    }


    function renderCardList() {
        const first = (currentPage - 1) * 6
        const last = first + 6

        // if (id) {
        // 	temp = temp.filter((animal) => (animal.ten_dv.search(searchText) >= 0))
        // }

        let animalCurrent = animals


        if (id) {
            animalCurrent = animalCurrent.filter((animal) => (animal.ma_ho === id))
        }
        totalPage = Math.ceil(animalCurrent.length / 6)


        return animalCurrent.slice(first, last).map((animal, index) => {
            return (
                <div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
                    <a href={"/detail?id=" + animal.ma_dv}><AnimalCard animal={animal} /></a>
                </div>
            )
        })
    }

    return (
        <div className="suggestion">
            <div className="title">Động vật cùng họ</div>
            <div className="grid-layout">
                <div className="container">
                    <div className="row">{renderCardList()}</div>
                </div>
            </div>
            <div className="num_page">
                <Pagination count={totalPage} onChange={onChangePage} />
            </div>
        </div>
    )
}
