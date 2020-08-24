import { showMessage} from "react-native-flash-message";

export const processRequestError = (reject, dispatch) => {
    if (reject.response.status === 403) {
        handleError403(reject, dispatch);
        console.log(403)
    } else if (reject.response.status === 422) {
        handleError422(reject, dispatch);
        console.log(422)
    } else if (reject.response.status === 500) {
        handleError500(reject, dispatch);
        console.log(500)
    }

};

const handleError403 = (reject) => {
    if (reject.response.data && reject.response.data.error && reject.response.data.error.message) {
        showMessage({
            message: reject.response.data.error.message,
            type: "danger",
        });
    }
};

const handleError422 = (reject) => {
    if (reject.response.data && reject.response.data.error) {
        const body = [];
        if (reject.response.data.error.errors){
            const {errors} = reject.response.data.error;
            for (let key in errors) {
                if (errors.hasOwnProperty(key)) {
                    body.push(errors[key]);
                }
            }
            const message = body.join("\n");
            showMessage({
                message: reject.response.data.error.message,
                description: message,
                type: "danger",
            });
        } else {
            showMessage({
                message: reject.response.data.error.message,
                type: "danger",
            });
        }
    }
};

const handleError500 = (reject) => {
    let msg = "Aconteceu um erro no servidor!";
    if (reject.response.data && reject.response.data.error) {
        msg = reject.response.data.error.message
    }
    showMessage({
        message: msg,
        type: "danger",
    });
};
