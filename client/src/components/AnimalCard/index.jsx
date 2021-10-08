import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

AnimalCard.propTypes = {
	animal: PropTypes.object,
}

AnimalCard.defaultProps = {
	animal: null,
}

function AnimalCard(props) {
	const { animal } = props

	if (!animal) return null
	return (
		<div className="animal-card">
			{
				props.isadmin && <div className="gp-edit">
					<button>Sửa</button>
					<button>Xóa</button>
				</div>
			}
			<div className="animal-card__image">
				<img src={animal.image} alt="Animal" />
			</div>
			<div className="animal-card__info">
				<p className="animal-name">{animal.name}</p>
			</div>
		</div>
	)
}

export default AnimalCard
