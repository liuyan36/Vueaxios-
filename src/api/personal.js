import axios from './http';

function logon() {  // 这里写入一个logon的方法，然后进入api内进行引用划分
    return axios.get('/orange/v1/app/config/home', {
        params: {
            scene: 'selectedFilms',
            page: 1,
            limit: 20
        }
    })
}

export default {
    logon
}