import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate'

UploadFile.propTypes = {
	onFileSelect: PropTypes.func,
}

UploadFile.defaultProps = {
	onFileSelect: () => {},
}

function UploadFile({ onFileSelect }) {
	const fileRef = useRef(null)
	const [files, setFiles] = useState([])

	function handleFileChange(e) {
		const files = e.target.files

		if (files.length) {
			setFiles([...files])
			onFileSelect([...files])
		} else {
			setFiles([])
			onFileSelect([])
		}
	}

	return (
		<div className="upload-file">
			<input
				multiple
				className="file"
				type="file"
				hidden="hidden"
				ref={fileRef}
				onChange={handleFileChange}
			/>
			<button
				type="button"
				className="choose-file-btn"
				onClick={() => fileRef.current.click()}
			>
				<AddPhotoIcon />
				Chọn ảnh
			</button>
			{files.length ? (
				<h3 className="custom-text">Bạn đã chọn {files.length} tập tin</h3>
			) : (
				<h3 className="custom-text">Chưa có tập tin nào được chọn</h3>
			)}
			{!!files.length && (
				<ul className="file-list">
					{files.map((file, index) => (
						<li key={index}>{file.name}</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default UploadFile
