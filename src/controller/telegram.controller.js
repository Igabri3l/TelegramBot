const axios = require('axios')
const Binance = require('node-binance-api')
const { urlBase, urlApi, APIKEY, APISECRET } = require('../config/config.js')
const binance = new Binance().options({ APIKEY, APISECRET })

async function precio () {
  const price = await binance.bookTickers('BTCUSDT')
  console.log(price)
  return price.bidPrice
}

const ctrlTelegram = {}

ctrlTelegram.active = async (req, res) => {
  await axios.post(`${urlBase}/setWebhook`, { url: urlApi })
  res.send({ bot: 'activado' })
}

ctrlTelegram.eco = async (req, res) => {
  const response = req.body.message
  const message = {
    chat_id: response.chat.id,
    text: `Eco: ${response.text}`
  }
  if (response.text === '/price') {
    message.text = precio()
  }
  await axios.post(`${urlBase}/sendMessage`, message)
  res.send({ status: 'complete' })
}

module.exports = ctrlTelegram
