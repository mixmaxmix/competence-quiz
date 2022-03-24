import axios from "axios";

export const getQuiz = async() => {
    const response = await axios
        .get(`/api/v1/quiz`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }});

// .then(function (response) {
//         return response.data.result;
//     }


    return response.data.result;
}

export const getQuizById = async(id) => {
    const response = await axios
        .get(`/api/v1/quiz/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }});

    return response.data.result;
}

export const createQuiz = async(maxPassCount, name) => {
    const response = await axios
        .post(`/api/v1/quiz`, {
            maxPassCount: maxPassCount,
            username: name
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const updateQuiz = async(id, maxPassCount, name) => {
    const response = await axios
        .put(`/api/v1/quiz/${id}`, {
            maxPassCount: maxPassCount,
            username: name
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const deleteQuiz = async(id) => {
    const response = await axios
        .delete(`/api/v1/quiz/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const getPassed = async() => {
    const response = await axios
        .get(`/api/v1/quiz/passed`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}
