var sendEvent = require('../controlers/sendEvent')


async function mapperPurchase(body, event) {
    return new Promise(async function (resolve, reject) {

        var correo = body.email;

        var description = {
            event_type: event,
            properties: {
                purchase_id: body.purchase_id,
                status: body.status,
                total_price: body.total_price,
                payment_method: body.payment_method,
                items: body.items,
                device: body.device,
                os: body.os,
                browser: body.browser
            },
            customer_ids: {
                registered: body.email.toLowerCase().trim()
            }
        }
        var executeRequest = await sendEvent.executeRequest(description, correo)
        resolve(executeRequest);
    })
}



module.exports = {
    mapperPurchase
}