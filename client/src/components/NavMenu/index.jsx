import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
// COMPONENTS
import { Link } from 'react-router-dom'

NavMenu.propTypes = {
	menu: PropTypes.array,
}

NavMenu.defaultProps = {
	menu: [],
}

function NavMenu(props) {
	const { menu } = props

	function renderMenu() {
		return menu.map((item, index) => {
			return (
				<li className="nav-menu__item" key={index}>
					<Link to={item.url} className="nav-menu__link">
						{item.name}
					</Link>
				</li>
			)
		})
	}

	return <ul className="nav-menu">{renderMenu()}</ul>
}

export default NavMenu
