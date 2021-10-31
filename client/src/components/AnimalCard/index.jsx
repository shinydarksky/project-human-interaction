import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

AnimalCard.propTypes = {
	animal: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
}

AnimalCard.defaultProps = {
	animal: null,
	onEdit: () => {},
	onDelete: () => {},
}

function AnimalCard(props) {
	const { animal, onEdit, onDelete } = props

	if (!animal) return null
	return (
		<div className="animal-card">
			{props.isadmin && (
				<div className="gp-edit">
					<button className="edit-btn" onClick={() => onEdit(animal)}>
						Sửa
					</button>
					<button className="delete-btn" onClick={() => onDelete(animal.ma_dv)}>
						Xóa
					</button>
				</div>
			)}
			<div className="animal-card__image">
				<img src={animal.images[0].lien_ket} alt="Animal" />
			</div>
			<div className="animal-card__info">
				<p className="animal-name">{animal.ten_dv}</p>
			</div>
		</div>
	)
}

export default AnimalCard
