import axios from "axios";

export const getQuizQuestionsUser = async(quizId) => {
    const response = await axios
        .get(`/api/v1/quiz/${quizId}/principal`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result
}

export const getQuizQuestionsAdmin = async(quizId) => {
    const response = await axios
        .get(`/api/v1/quiz/${quizId}/questions`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }});

    return response.data.result;
}

export const createQuizQuestion = async(quizId, name, answers) => {
    const response = await axios
        .post(`/api/v1/quiz/question`, {
            quizId: quizId,
            name: name,
            answers: JSON.stringify(answers)
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const updateQuizQuestion = async(questionId, quizId, name, answers) => {
    const response = await axios
        .put(`/api/v1/quiz/question/${questionId}`, {
            questionId: questionId,
            quizId: quizId,
            name: name,
            answers: JSON.stringify(answers)
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}

export const deleteQuizQuestion = async(id) => {
    const response = await axios
        .delete(`/api/v1/quiz/question/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }})

    return response.data.result;
}
