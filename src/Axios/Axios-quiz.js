import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-aef72-default-rtdb.europe-west1.firebasedatabase.app/'
})