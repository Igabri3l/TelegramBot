const app = require('./app.js')

async function main () {
  await app.listen(app.set('port'))
  console.log(`server run in port ${app.set('port')}`)
}

main()

module.exports = app
