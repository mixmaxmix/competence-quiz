import axios from "axios";

export const getQuiz = async() => {
    return await axios
        .get(`/api/v1/quiz`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
            })
}

export const getQuizById = async(id) => {
    return await axios
        .get(`/api/v1/quiz/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
        });
}

export const createQuiz = async(maxPassCount, name) => {
    return await axios
        .post(`/api/v1/quiz`, {
            maxPassCount: maxPassCount,
            username: name
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
        })
}

export const updateQuiz = async(id, maxPassCount, name) => {
    return await axios
        .put(`/api/v1/quiz/${id}`, {
            maxPassCount: maxPassCount,
            username: name
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
        })
}

export const deleteQuiz = async(id) => {
    return await axios
        .delete(`/api/v1/quiz/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
        })
}

export const getPassed = async() => {
    return await axios
        .get(`/api/v1/quiz/passed`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }}).then(res => {
                return res.data.result;
        })
}
