import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID qyOGblxusk6AEzAB_DyO8db2O9Rbe4e2PLnZ-3nRKfk'
    }
})