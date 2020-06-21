import axios from 'axios';
import { API_URL } from '../constants';

export class LearnElectronicAPI {
    /* Возвращам облегченные темы */
    static getThemes() {
        const query = `${API_URL}/themes`;

        return axios.get(query, { withCredentials: true }).then((response) => {
            return response.data;
        });
    }

    static getLecture(lectureId) {
        const query = `${API_URL}/lecture/${lectureId}`;

        return axios
            .get(query, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static login(data) {
        const query = `${API_URL}/login`;

        return axios.post(query, data).then((response) => response.data);
    }

    static registration(data) {
        const query = `${API_URL}/registration`;

        return axios.post(query, data).then((response) => response.data);
    }

    static getAccount() {
        const query = `${API_URL}/account`;

        return axios
            .get(query, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static addComment(data) {
        const query = `${API_URL}/comment`;

        return axios
            .post(query, data, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static changeComment(data) {
        const query = `${API_URL}/comment`;

        return axios
            .put(query, data)
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static deleteComment(commentId) {
        const query = `${API_URL}/comment/${commentId}`;

        return axios
            .delete(query, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static editComment(data) {
        const query = `${API_URL}/comment`;

        return axios
            .put(query, data, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static likeComment(data) {
        const query = `${API_URL}/like`;

        return axios
            .post(query, data, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static dislikeComment(data) {
        const query = `${API_URL}/dislike`;

        return axios
            .post(query, data, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }

    static completeTest(data) {
        const query = `${API_URL}/test`;

        return axios
            .post(query, data, { withCredentials: true })
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw Error();
            });
    }
}
