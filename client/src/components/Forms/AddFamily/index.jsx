import React from 'react'
import PropTypes from 'prop-types'
import { Form, FastField, Formik } from 'formik'
import * as yup from 'yup'
import InputField from '../../FormFields/InputField'
import { Button } from '@material-ui/core'
import './style.scss'

AddFamily.propTypes = {
	onSubmit: PropTypes.func,
	onClose: PropTypes.func,
}

AddFamily.defaultProps = {
	onSubmit: null,
	onClose: null,
}

function AddFamily({ onSubmit, onClose }) {
	async function handleFormSubmit(values) {
		if (onSubmit) {
			await onSubmit(values)
			onClose()
		}
	}

	return (
		<Formik
			initialValues={{
				ten_ho: '',
				mo_ta: '',
			}}
			validationSchema={yup.object().shape({
				ten_ho: yup.string().required('Bạn phải nhập tên họ cho động vật!'),
			})}
			onSubmit={handleFormSubmit}
		>
			<Form className="add-family-form">
				<div className="form-control">
					<FastField
						label="Tên họ"
						placeholder="Nhập tên họ cho động vật"
						name="ten_ho"
						component={InputField}
					/>
				</div>
				<div className="form-control">
					<FastField
						label="Mô tả"
						placeholder="Nhập mô tả cho họ động vật!"
						multiline
						rows={4}
						name="mo_ta"
						component={InputField}
					/>
				</div>
				<div className="add-family-form__wrap-btns">
					<Button type="submit">Thêm</Button>
					<Button
						type="button"
						onClick={() => {
							if (onClose) {
								onClose()
							}
						}}
					>
						Hủy
					</Button>
				</div>
			</Form>
		</Formik>
	)
}

export default AddFamily
