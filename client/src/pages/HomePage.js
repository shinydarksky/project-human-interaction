import React, { useState } from 'react'
import './HomePage.scss'
// COMPONENTS
import TopNav from '../components/TopNav'
import Search from '../components/Search'
import GridLayout from '../components/GridLayout'
import { menu } from './data'
import { useSelector } from 'react-redux'

const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [searchText, setSearchText] = useState('')
	const animals = useSelector(state => state.animals.animalList)


	function handleSearch(value) {
		setSearchText(value)
	}


	const onChangePage = (event, value) => {
		setCurrentPage(value);
	}



	return (
		<div className="home-page">
			<TopNav menu={menu} />
			<Search onSearch={handleSearch} />
			<GridLayout
				animals={animals}
				currentPage={currentPage - 1}
				searchText={searchText}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

export default HomePage
