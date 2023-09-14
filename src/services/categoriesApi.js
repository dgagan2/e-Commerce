import axios from 'axios'

const Categories = 'https://api.escuelajs.co/api/v1/categories'

const AddCategorie = (categorie) => axios.post(`${Categories}/`, { name: categorie.name, image: categorie.image })
const EditCategorie = (categorie) => axios.put(`${Categories}/${categorie.id}`, categorie)
const DeleteCategorie = (categorie) => axios.delete(`${Categories}/${categorie.id}`)
export { AddCategorie, EditCategorie, DeleteCategorie }
