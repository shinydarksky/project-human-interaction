import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import AnimalCard from '../AnimalCard'
import { Link } from 'react-router-dom'
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
				<div className="col-6 col-sm-4 col-md-2 grid-layout__column" key={index}>
					<Link to={{
						pathname: "/detail",
						search: "?id="+animal.id,
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
		</div>
	)
}

export default GridLayout
