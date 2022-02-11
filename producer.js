const { connectQueue } = require('./config')
const jobOptions = {
    removeOnComplete: true,
    delay: 60000,
    attempts: 3
};
const nameQueue = 'request-json-file'
const init = async (data) => {
    return await connectQueue(nameQueue).add(data, jobOptions)
}
const countryCode = ['ID', 'RU', 'TR', 'IT']
for (let i = 0; i < countryCode.length; i++) {
    const data = {
        message: `country code ${countryCode[i]}`,
        param: countryCode[i]
    }
    init(data).then(res => {
        console.log(res.data.message)
    })
}