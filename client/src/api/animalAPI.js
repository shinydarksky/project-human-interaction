import axios from 'axios'

const animalAPI = {
	getAnimalList: () => {
		return axios.get('http://localhost:8080/animal/getAnimalList')
	},
	insertAnimal: data => {
		return axios.post('http://localhost:8080/animal/insertAnimal', data)
	},
	updateAnimal: data => {
		return axios.put('http://localhost:8080/animal/updateAnimal', data)
	},
	deleteAnimal: ma_dv => {
		return axios.delete('http://localhost:8080/animal/deleteAnimal', {
			params: {
				ma_dv,
			},
		})
	},
}

export default animalAPI
