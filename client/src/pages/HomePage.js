import React from 'react'
import './HomePage.scss'
// COMPONENTS
import TopNav from '../components/TopNav'
import Search from '../components/Search'
import GridLayout from '../components/GridLayout'

const menu = [
	{
		name: 'Item 1',
		url: 'link1',
	},
	{
		name: 'Item 2',
		url: 'link2',
	},
	{
		name: 'Item 3',
		url: 'link3',
	},
	{
		name: 'Item 4',
		url: 'link4',
	},
]

const animals = [
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
	{
		name: 'Tên con vật',
		image: 'https://picsum.photos/id/237/200/200',
	},
]

const HomePage = () => {
	function handleSearch(value) {}

	return (
		<div className="home-page">
			<TopNav menu={menu} />
			<Search onSearch={handleSearch} />
			<GridLayout animals={animals} />
		</div>
	)
}

export default HomePage
