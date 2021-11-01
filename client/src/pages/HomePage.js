import React, { useState } from 'react'
import './HomePage.scss'
// COMPONENTS
import TopNav from '../components/TopNav'
import Search from '../components/Search'
import SearchAlphabet from '../components/SearchAlphabet'
import GridLayout from '../components/GridLayout'
import { menu } from './data'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

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
			<SearchAlphabet onClickLetter={e=>setSearchText(e)}/>
			<GridLayout
				animals={animals}
				currentPage={currentPage - 1}
				searchText={searchText}
				onChangePage={onChangePage}
			/>
			<Footer/>
		</div>
	)
}

export default HomePage
