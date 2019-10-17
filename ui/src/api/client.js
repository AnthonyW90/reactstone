import axios from 'axios'

const localUrl = `//${window.location.host.split(":")[0]}:8000`
const client = axios.create({
    baseURL: localUrl,
})

export default client