import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

Search.propTypes = {
	onSearch: PropTypes.func,
}

Search.defaultProps = {
	onSearch: () => { },
}

function Search(props) {
	const { onSearch,title } = props

	const [searchValue, setSearchValue] = useState('')

	function handleInputChange(e) {
		setSearchValue(e.target.value)
	}

	function handleBtnClick(e) {
		onSearch(searchValue)
	}

	function onEnter(e){
		if(e.key==='Enter')
			onSearch(searchValue)
	}

	return (
		<div className="search">
			<div className="container">
				<div className="search__container">
					{title && <a href="http://localhost:3000/animalfamily"><button className="button-back">Trở lại</button></a>}
					<h3 className="search__title">{title ? <div>
						Danh sách động vật thuộc họ {title.ten_ho}
						<p style={{fontSize:'16px',padding:'15px',wordSpacing:'3px',lineHeight:'25px'}}>{title.mo_ta}</p>
					</div>   : 'Tìm kiếm' }</h3>
					
					<div className="search__group">
						<input
							className="input"
							type="text"
							placeholder="Nhập tên con vật vào đây"
							name="keyword"
							onChange={handleInputChange}
							onKeyDown={onEnter}
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
