import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import AnimalCard from '../AnimalCard'

GridLayout.propTypes = {
	animals: PropTypes.array,
}

GridLayout.defaultProps = {
	animals: [],
}

function GridLayout(props) {
	const { animals } = props

	function renderCardList() {
		return animals.map((animal, index) => {
			return (
				<div className="col-2 grid-layout__column" key={index}>
					<AnimalCard animal={animal} />
				</div>
			)
		})
	}

	return (
		<div className="grid-layout">
			<div className="container">
				<div className="row">{renderCardList()}</div>
			</div>
		</div>
	)
}

export default GridLayout
