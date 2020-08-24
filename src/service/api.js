import axios from 'axios';
import _ from "lodash";

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public",
});
/*
api.interceptors.response.use(function (response) {
}, function (error) {
    const response = error.response;
    console.log("Erro interceptado:", response);
    console.log(response.status, response.statusText);
    console.log("Mensagem:", response.data.error.message);
    console.log("Erros:", response.data.error.message.errors);

    let mainMessage = response.statusText;
    if (response.data.error.message) {
        mainMessage = response.data.error.message;
    }

    if (response.status === 422) {

        const body = [];
        _.forEach(response.data.error.errors, (fieldErrors) => {
                _.forEach(fieldErrors, (error, field) => {
                    body.push(error);
                });
            }
        );

    }
    return Promise.reject(error);
});
*/
export default api;
