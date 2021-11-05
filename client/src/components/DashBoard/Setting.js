import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrls_animalfamily } from '../../api/apiUrls'
import Diagram from './Diagram'
export default function Setting() {
    const animals = useSelector(state => state.animals.animalList)
    const [data, setData] = useState([])

    function loadData() {
        axios
            .get(`${apiUrls_animalfamily}/getAnimalFamilyList`)
            .then(({ data }) => {
                setData(data.content)
            })
    }
    useEffect(() => {
        loadData()
        return () => { }
    }, [])

    return (
        <div className="setting">
            <div className="title">
                <h3>Quản lý thông tin </h3>
            </div>
            <div className="content">
                <p>Tổng số họ động vật: {data && data.length}</p>
                <p>Tổng động vật là: {animals && animals.length}</p>
                <Diagram labels={data} data={animals} />
            </div>
        </div>
    )
}
