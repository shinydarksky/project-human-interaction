import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

Search.propTypes = {
	onSearch: PropTypes.func,
}

Search.defaultProps = {
	onSearch: () => {},
}

function Search(props) {
	const { onSearch } = props

	const [searchValue, setSearchValue] = useState('')

	function handleInputChange(e) {
		setSearchValue(e.target.value)
	}

	function handleBtnClick(e) {
		onSearch(searchValue)
	}

	return (
		<div className="search">
			<div className="container">
				<div className="search__container">
					<h3 className="search__title">Tìm kiếm</h3>
					<div className="search__group">
						<input
							className="input"
							type="text"
							placeholder="Nhập tên con vật vào đây"
							name="keyword"
							onChange={handleInputChange}
						/>
						<button className="btn btn--success" onClick={handleBtnClick}>
							Tìm kiếm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
