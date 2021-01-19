const axios = require('axios')
const Binance = require('node-binance-api')
const { urlBase, urlApi, APIKEY, APISECRET } = require('../config/config.js')
const binance = new Binance().options({ APIKEY, APISECRET })
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
  if (response.text === '/price btc') {
    const price = await binance.bookTickers('BTCUSDT')
    message.text = price.bidPrice
  }
  if (response.text === '/price usd') {
    const precio = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    message.text = `compra: ${precio.data[1].casa.compra} venta: ${precio.data[1].casa.venta}`
  }
  await axios.post(`${urlBase}/sendMessage`, message)
  res.send({ status: 'complete' })
}

module.exports = ctrlTelegram
