import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormHelperText } from '@material-ui/core'
import { ErrorMessage } from 'formik'
import UploadFile from '../../UploadFile'

FileField.propTypes = {
	form: PropTypes.object.isRequired,
	field: PropTypes.object.isRequired,
	label: PropTypes.string,
}

FileField.defaultProps = {
	label: '',
}

function FileField(props) {
	const { form, field, label } = props

	function handleFileSelect(files) {
		form.setFieldValue(field.name, files, true)
	}

	return (
		<div className="file-field">
			{label && <label>{label}</label>}
			<UploadFile onFileSelect={handleFileSelect} />
			<ErrorMessage name={field.name}>
				{msg => (
					<FormControl error fullWidth variant="outlined">
						<FormHelperText>{msg}</FormHelperText>
					</FormControl>
				)}
			</ErrorMessage>
		</div>
	)
}

export default FileField
