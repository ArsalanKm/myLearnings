import  axios from 'axios';

const KEY = 'AIzaSyA128YfwyhpcbeEmUNb2botg70NmF44ZkQ'
export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        type: 'video',
        key:KEY
    }
})