var sendEvent = require('../controlers/sendEvent')


async function mapperCartUpdate(body, event) {
    return new Promise(async function (resolve, reject) {

        var correo = body.email;

        
        var description = {
            event_type: event,
            properties: {
                items: body.items,
                action: body.action,
                device: body.device,
                os: body.os,
                version: body.version,
                browser: body.browser,
                total_price: body.total_price,
                total_quantity: body.total_quantity,
                item_price: body.item_price,
                item_id: body.item_id,
                item_quantity: body.item_quantity

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
    mapperCartUpdate
}