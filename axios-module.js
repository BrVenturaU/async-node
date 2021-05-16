const axios = require('axios').default;
// Define la URL base para las solicitudes HTTP.
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

/** 
 * Permite obtener un listado de Posts.
 * @param {Number} total - El total de Posts que quiero de la lista.
 * @param {Boolean} reverse - Si quiero ordenar los Posts de forma descendente. 
 * @returns {Promise<void>} Retorna una promesa vacia.
 */
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

/** 
 * Permite obtener un Post por su identificador.
 * @param {Number} id - Identificador único del Post. 
 * @returns {Promise<void>} Retorna una promesa vacia.
 */
const getById = async (id) => {
    try {
        const response = await axios.get(`posts/${id}`);
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }   
}

/** 
 * Permite agregar un Post.
 * @param {Object} data - Objeto que contiene los datos del Post.
 * @param {Function} callback - Función de retorno que se ejecutará despues de obtener la respuesta. 
 * @returns {Promise<void>} Retorna una promesa vacia.
 */
const post = async(data, callback) => {
    try {
        const response = await axios.post('posts', data);
        callback(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

/** 
 * Permite editar un Post por su identificador.
 * @param {Number} id - Identificador único del Post. 
 * @param {Object} data - Objeto que contiene los datos del Post.
 * @param {Function} callback - Función de retorno que se ejecutará despues de obtener la respuesta. 
 * @returns {Promise<void>} Retorna una promesa vacia.
 */
const put = async(id, data, callback) => {
    try {
        const response = await axios.put(`posts/${id}`, data);
        callback(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

/** 
 * Permite eliminar un Post por su identificador.
 * @param {Number} id - Identificador único del Post. 
 * @returns {Promise<void>} Retorna una promesa vacia.
 */
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