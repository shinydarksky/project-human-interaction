import React from 'react'
import PropTypes from 'prop-types'
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
} from '@material-ui/core'
import { ErrorMessage } from 'formik'

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	field: PropTypes.object.isRequired,

	label: PropTypes.string,
	placeholder: PropTypes.string,
	autoFocus: PropTypes.bool,
	multiline: PropTypes.bool,
	rows: PropTypes.number,
}

InputField.defaultProps = {
	label: '',
	placeholder: '',
	autoFocus: false,
	multiline: false,
	rows: 1,
}

function InputField(props) {
	const { form, field, ...rest } = props

	return (
		<FormControl
			variant="outlined"
			error={form.errors[field.name] && form.touched[field.name]}
			fullWidth
		>
			{rest.label && <InputLabel htmlFor={field.name}>{rest.label}</InputLabel>}
			<OutlinedInput {...field} {...rest} />
			<ErrorMessage name={field.name}>
				{msg => <FormHelperText>{msg}</FormHelperText>}
			</ErrorMessage>
		</FormControl>
	)
}

export default InputField
