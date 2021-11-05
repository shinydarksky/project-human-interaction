import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { Formik, Form, FastField } from 'formik'
import InputField from '../../FormFields/InputField'
import { Button } from '@material-ui/core'
import './style.scss'
import SelectField from '../../FormFields/SelectField'
import FileField from '../../FormFields/FileField'

AddAnimalForm.propTypes = {
	onClose: PropTypes.func,
	onSubmit: PropTypes.func,
	animalFamilyOptions: PropTypes.array,
}

AddAnimalForm.defaultProps = {
	onClose: () => {},
	onSubmit: () => {},
	animalFamilyOptions: [],
}

function AddAnimalForm({ onSubmit, onClose, animalFamilyOptions }) {
	return (
		<div>
			<Formik
				initialValues={{
					ten_dv: '',
					ma_ho: '',
					mo_ta: '',
					dia_diem: '',
					images: [],
				}}
				validationSchema={yup.object().shape({
					ten_dv: yup.string().required('Bạn phải nhập tên động vật!'),
					ma_ho: yup.string().required('Bạn phải chọn họ động vật!'),
					images: yup
						.array()
						.min(1, 'Bạn phải chọn ít nhất 1 hình ảnh cho động vật!'),
				})}
				onSubmit={values => onSubmit(values)}
			>
				<Form className="add-animal-form">
					<div className="form-control">
						<FastField
							label="Tên động vật"
							placeholder="Nhập tên động vật"
							name="ten_dv"
							component={InputField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Họ động vật"
							options={animalFamilyOptions}
							name="ma_ho"
							component={SelectField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Mô tả"
							placeholder="Nhập mô tả cho động vật!"
							multiline
							rows={4}
							name="mo_ta"
							component={InputField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Địa điểm"
							placeholder="Nhập nơi mà động vật sinh sống!"
							name="dia_diem"
							component={InputField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Chọn ảnh cho động vật"
							name="images"
							component={FileField}
						/>
					</div>
					<div className="add-animal-form__wrap-btns">
						<Button type="submit">Thêm</Button>
						<Button type="button" onClick={onClose}>
							Hủy
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default AddAnimalForm
