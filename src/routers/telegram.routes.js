const { Router } = require('express')
const axios = require('axios')
const router = Router()

const config = {
  botToken: '1330792104:AAEsLs8ahf2FhJQ7k0XZ9g946o4SRxi7mCQ',
  chatId: '1020429252'
}
const urlBase = `https://api.telegram.org/bot${config.botToken}`
// const urlApi = 'https://telegram-prueba-bot.herokuapp.com/telegram/webhook'

router.route('/setwebhook').get(
  async (req, res) => {
    // await axios.post(`${urlBase}/setWebhook`, { url: urlApi })
    res.send({ bot: 'activado' })
  }
)

router.route('/webhook').post(
  async (req, res) => {
    const respose = req.body.message
    const message = {
      chat_id: respose.chat.id,
      text: `${respose.text}`
    }
    await axios.post(`${urlBase}/sendMessage`, message)
    res.send({ status: 'complete' })
  }
)

module.exports = router
