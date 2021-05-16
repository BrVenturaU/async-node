const axios = require('axios').default;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const get = async (total=10, reverse=false) => {
    try {
        const response = await axios.get('posts');
        const data = response.data;
        const slice = reverse ? data.reverse().slice(0, total) : data.slice(0, total);
        console.log(slice);
    } catch (error) {
        console.log(error.message);
    }   
}

const getById = async (id) => {
    try {
        const response = await axios.get(`posts/${id}`);
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }   
}

const post = async(data, callback) => {
    try {
        const response = await axios.post('posts', data);
        callback(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

const put = async(id, data, callback) => {
    try {
        const response = await axios.put(`posts/${id}`, data);
        callback(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

const deletePost = async (id) => {
    try {
        const response = await axios.delete(`posts/${id}`);
        console.log('Registro eliminado con exito.');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    get,
    getById,
    post,
    put,
    deletePost
}