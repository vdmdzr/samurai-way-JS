import * as axios from "axios";

//отдельный экземпляр axios в котором дефолтные(повторяющиеся) данные
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f858e3c3-edee-41ba-8558-57f47ccb4139'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
    }
}

