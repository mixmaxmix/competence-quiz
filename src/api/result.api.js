import axios from "axios";

export const passQuiz = async(quizId, answers) => {
    const response = await axios
        .post(`/api/v1/quiz/${quizId}/principal`, JSON.stringify(answers), {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result
}

//result >> true / false
export const canPassQuiz = async(quizId) => {
    const response = await axios
        .get(`/api/v1/quiz/${quizId}/pass/can`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }});

    return response.data.result;
}

export const getQuizResultsAdmin = async(quizId) => {
    const response = await axios
        .get(`/api/v1/quiz/${quizId}/result`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const getQuizResultsUser = async(quizId) => {
    const response = await axios
        .get(`/api/v1/quiz/${quizId}/result/principal`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}
