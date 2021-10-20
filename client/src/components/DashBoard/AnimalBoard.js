import React, {useState, useEffect} from 'react'
import AnimalCard from '../AnimalCard'
import { useSelector } from 'react-redux'
import axios from 'axios'
export default function AnimalBoard() {
    const [animalFamily,setAnimalFamily] = useState([])

    function loadData() {
		axios.get('http://localhost:8080/animalFamily/getAnimalFamilyList')
			.then(({ data }) => {
				setAnimalFamily(data.content)
            
			})

	}
    useEffect(() => {
		loadData()
	},[])

    let animals = useSelector(state => state.animals)
    animals = animals.slice(0,12)



    function renderCardList() {
    
        return animals.map((animal, index) => {
            return (
                <div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
                    <AnimalCard animal={animal} isadmin={true}/>
                </div>
            )
        })
    }
    return (
        <div>
            <div className="title">
                <h3>Quản lý danh sách động vật</h3>
            </div>
            <div className="gp-btn">
                <button>Thêm</button>
            </div>
            <div className="grid-layout">
                <div className="container">
                    <div className="row">{renderCardList()}</div>
                </div>
            </div>
        </div>
    )
}
