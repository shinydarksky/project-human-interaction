import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import Logo from '../../assets/images/logo.webp'
// COMPONENTS
import NavMenu from '../NavMenu'
import { Link } from 'react-router-dom'

TopNav.propTypes = {
	menu: PropTypes.array,
}

TopNav.defaultProps = {
	menu: [],
}

function TopNav(props) {
	const { menu } = props

	return (
		<div className="top-nav" id="top">
			<div className="container">
				<div className="row justify-content-between">
					<Link className="top-nav__logo" to="/">
						<img src={Logo} alt="Logo" />
					</Link>
					<NavMenu menu={menu} />
				</div>
			</div>
		</div>
	)
}

export default TopNav
