import axios from 'axios'
import { apiUrls_animal } from './apiUrls'

const animalAPI = {
	getAnimalList: () => {
		return axios.get(`${apiUrls_animal}/getAnimalList`)
	},
	insertAnimal: data => {
		return axios.post(`${apiUrls_animal}/insertAnimal`, data)
	},
	updateAnimal: data => {
		return axios.put(`${apiUrls_animal}/updateAnimal`, data)
	},
	deleteAnimal: ma_dv => {
		return axios.delete(`${apiUrls_animal}/deleteAnimal`, {
			params: {
				ma_dv,
			},
		})
	},
}

export default animalAPI
