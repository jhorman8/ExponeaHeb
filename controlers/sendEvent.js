var request = require("request");


async function getTime() {
    return new Promise(async function(resolve,reject) {
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

module.exports = {
    getTime
}