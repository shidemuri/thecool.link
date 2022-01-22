const express = require('express')
const cors = require('cors')

/*const ipblackli = require('quick.db').get('words.ip_blacklist')
if(ipblackli == null) require('quick.db').set('words.ip_blacklist', [])
const wrods = require('quick.db').get('words.blacklisted')
if(wrods == null) require('quick.db').set('words.blacklisted', [])*/


module.exports = () =>{
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.listen(process.env.PORT || 3000, () => console.log('[api] ready'))

    app.use((err, req, res, next) => {
        if (err) {
            console.log('\nsome mf did shit while trying to parse data\nrequest: ' + JSON.stringify(req.body) + '\nError: ' + err + "\nIP: " + req.connection.remoteAddress)
          res.status(500).send('Internal server error while parsing data (probably an invalid JSON format)')
        } else {
          next()
        }
    })

    require('../api/route/post.js')(app)

    return app
}