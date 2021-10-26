import React from 'react'
import PropTypes from 'prop-types'
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core'
import { ErrorMessage } from 'formik'

SelectField.propTypes = {
	form: PropTypes.object.isRequired,
	field: PropTypes.object.isRequired,

	label: PropTypes.string,
	autoFocus: PropTypes.bool,
	options: PropTypes.array,
}

SelectField.defaultProps = {
	label: '',
	autoFocus: false,
	options: [],
}

function SelectField(props) {
	const { form, field, options, ...rest } = props

	return (
		<FormControl
			variant="outlined"
			error={form.errors[field.name] && form.touched[field.name]}
			fullWidth
		>
			{rest.label && <InputLabel htmlFor={field.name}>{rest.label}</InputLabel>}
			<Select displayEmpty {...field} {...rest}>
				{options.map(option => {
					return (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					)
				})}
			</Select>
			<ErrorMessage name={field.name}>
				{msg => <FormHelperText>{msg}</FormHelperText>}
			</ErrorMessage>
		</FormControl>
	)
}

export default SelectField
