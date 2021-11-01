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
		const menuLayout = menu.map((item, index) => {
			return (
				<li className="nav-menu__item" key={index}>
					<Link to={item.url} className="nav-menu__link">
						{item.name}
					</Link>
				</li>
			)
		})
		menuLayout.push(<li key={99}>
			<a className="nav-menu__link btn-login" href="/login">Quản lý</a>
		</li>)
		return menuLayout
	}

	return <ul className="nav-menu">
		{menu.length > 0 && renderMenu()}
	</ul>
}

export default NavMenu
