import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { Formik, Form, FastField } from 'formik'
import InputField from '../../FormFields/InputField'
import { Button } from '@material-ui/core'
import './style.scss'
import SelectField from '../../FormFields/SelectField'

EditAnimalForm.propTypes = {
	onClose: PropTypes.func,
	onSubmit: PropTypes.func,
	animal: PropTypes.object,
	animalFamilyOptions: PropTypes.array,
}

EditAnimalForm.defaultProps = {
	onClose: () => {},
	onSubmit: () => {},
	animal: null,
	animalFamilyOptions: [],
}

function EditAnimalForm({ onSubmit, onClose, animal, animalFamilyOptions }) {
	return (
		<div>
			<Formik
				initialValues={{
					ma_dv: animal && animal.ma_dv,
					ten_dv: animal && animal.ten_dv,
					mo_ta: animal && animal.mo_ta,
					dia_diem: animal && animal.dia_diem,
					ma_ho: animal && animal.ma_ho,
				}}
				validationSchema={yup.object().shape({
					ten_dv: yup.string().required('Bạn phải nhập tên con vật!'),
					ma_ho: yup.string().required('Bạn phải chọn họ con vật!'),
				})}
				onSubmit={values => onSubmit(values)}
			>
				<Form className="edit-animal-form">
					<div className="form-control">
						<FastField
							label="Tên con vật"
							placeholder="Nhập tên con vật"
							name="ten_dv"
							component={InputField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Họ con vật"
							options={animalFamilyOptions}
							name="ma_ho"
							component={SelectField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Mô tả"
							placeholder="Nhập mô tả cho con vật!"
							multiline
							rows={4}
							name="mo_ta"
							component={InputField}
						/>
					</div>
					<div className="form-control">
						<FastField
							label="Địa điểm"
							placeholder="Nhập nơi mà con vật sinh sống!"
							name="dia_diem"
							component={InputField}
						/>
					</div>
					<div className="edit-animal-form__wrap-btns">
						<Button type="submit">Cập nhật</Button>
						<Button type="button" onClick={onClose}>
							Hủy
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default EditAnimalForm
