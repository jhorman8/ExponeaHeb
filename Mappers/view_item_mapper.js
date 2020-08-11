var sendEvent = require('../controlers/sendEvent')


async function mapperViewItem(body, event) {
    return new Promise(async function (resolve, reject) {

        var correo = body.email;

        var description = {
            event_type: event,
            properties: {
                tittle: body.device,
                message: body.item_id,
                url_image: body.item_price,
                action_type: body.browser,
                device: body.device,
                item_id: body.item_id,
                item_price: body.item_price,
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
    mapperViewItem
}