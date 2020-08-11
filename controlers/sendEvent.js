var request = require("request");


async function getTime() {
    return new Promise(async function (resolve, reject) {
        var options = {
            method: 'GET',
            url: 'https://api.exponea.com/track/v2/projects/516a0568-cdef-11ea-afca-e21ff302e2d3/system/time',
            headers: {
                authorization: 'Basic ODVmOXR0bnJkcGRzMmFqY2psYTA2ZGxqaDB5ajljMTh5ZmJlZGpzcmRibWo3cTFjMmZpZzNieDJvMHFmdWNsNzo0aTB1bXZsYnpoZmI1bWdsZ2I4ZGhuYzV3MWpsYXh2ZXA1d3Y3NHkwY3RlZHBjMmpkaDJ2dm9hcjNrcTFnN3Jm',
                'content-type': 'application/json'
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            resolve(body);
            console.log(body);
        });


    })
}



async function executeRequest(body, email) {
    return new Promise(async function (resolve, reject) {

        var result = {}
        var validatEmail = await verifyEmail(email);
        if (validatEmail == true) {
            var options = {
                method: 'POST',
                url: 'https://api.exponea.com/track/v2/projects/516a0568-cdef-11ea-afca-e21ff302e2d3/customers/events',
                timeout: 5000,
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Basic ODVmOXR0bnJkcGRzMmFqY2psYTA2ZGxqaDB5ajljMTh5ZmJlZGpzcmRibWo3cTFjMmZpZzNieDJvMHFmdWNsNzo0aTB1bXZsYnpoZmI1bWdsZ2I4ZGhuYzV3MWpsYXh2ZXA1d3Y3NHkwY3RlZHBjMmpkaDJ2dm9hcjNrcTFnN3Jm'
                },

                body: body,
                json: true

            };

            request(options, async function (error, response, body) {
                console.log(options);
                console.log(body);
                if (error) {
                    result = {
                        message: "Error al enviar la informacion",
                        status: "500"
                    }
                    resolve(result);
                }
                result = {
                    message: "Se envió correctamente el evento",
                    status: "200"
                }
                resolve(result);
            });
        } else {

            result = {
                message: "El email no cumple con la estructura requerida",
                status: "500"
            }
            resolve(result);

        }

    });

}


async function verifyEmail(email) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}



module.exports = {
    getTime,
    executeRequest
}