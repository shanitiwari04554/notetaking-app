import axios from "axios";

const BACKEND_URL=axios.create({
    baseURL:"https://notetaking-backend-1-6wel.onrender.com/api/v1/noteapp"
})

export default BACKEND_URL