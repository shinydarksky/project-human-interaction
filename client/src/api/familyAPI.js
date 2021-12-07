import axios from "axios"
import { apiUrls_animalfamily } from "./apiUrls"
export const getFamily = async () =>{
    let results
    await axios
        .get(`${apiUrls_animalfamily}/getAnimalFamilyList`)
        .then(({ data }) => {
            results = data.content
        })
    return results
}

