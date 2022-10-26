import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "90ce0dff-4587-4436-8496-2869beb2fa9d"
      }
})

export const usersAPI = {
    getUser (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    followUser (userId, follow) {
        instance.post(`follow/${userId}`, {})
        .then(response => {
            response.data.resultCode === 0 && follow(userId);
            debugger;
        })
    },
    unfollowUser (userId, unfollow) {
        instance.delete(`follow/${userId}`)
        .then(response => {
            response.data.resultCode === 0 && unfollow(userId);
          });
    }
}

export const authAPI = {
    getMe() {
        return instance.get('auth/me').then(response => response.data);
    }
}