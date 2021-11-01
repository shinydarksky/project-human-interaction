import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import AnimalCard from '../AnimalCard'
import { Link } from 'react-router-dom'
import { Pagination } from '@material-ui/lab'

GridLayout.propTypes = {
	animals: PropTypes.array,
}

GridLayout.defaultProps = {
	animals: [],
}

function GridLayout(props) {
	const { animals, currentPage, searchText, onChangePage } = props
	let totalPage = 0
	function renderCardList() {
		const first_num = currentPage * 30
		const last_num = first_num + 30
		let temp = [...animals]

		if (searchText.trim()) {
			temp = temp.filter((animal) => (animal.ten_dv.search(searchText) >= 0))
		}

		const animalCurrent = temp.slice(first_num, last_num)

		totalPage = Math.ceil(temp.length / 30)

		return animalCurrent.map((animal, index) => {
			return (
				<div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
					<Link to={{
						pathname: "/detail",
						search: "?id=" + animal.ma_dv,
					}}>
						<AnimalCard animal={animal} />
					</Link>
				</div>
			)
		})
	}


	return (
		<div className="grid-layout">
			<div className="container">
				<div className="row">{renderCardList()}</div>
			</div>
			<div className="num_page">
				<Pagination count={totalPage} onChange={onChangePage} />
			</div>
		</div>
	)
}

export default GridLayout
