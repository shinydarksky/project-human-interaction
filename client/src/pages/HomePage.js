import React from 'react'
import './HomePage.scss'
// COMPONENTS
import TopNav from '../components/TopNav'
import Search from '../components/Search'
import GridLayout from '../components/GridLayout'
import { menu } from './data'
import { useSelector } from 'react-redux'
const HomePage = () => {
	const animals = useSelector(state => state.animals.animalList)

	function handleSearch(value) {
		console.log(value)
	}

	return (
		<div className="home-page">
			<TopNav menu={menu} />
			<Search onSearch={handleSearch} />
			<GridLayout animals={animals} />
		</div>
	)
}

export default HomePage
