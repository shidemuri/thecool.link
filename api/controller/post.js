const db = require('quick.db')
const emojis = require('fs').readFileSync

module.exports = () => {
    const thing = {}
    
    thing.redir = (req,res) => {
        const formatted = () => {
            if(req.originalUrl.endsWith('/')){
                let e = req.originalUrl.split('')
                //console.log(e)
                while(e.endsWith('/')) e.pop()
                console.log(e.join(''))
                return e.join('')
            }
            return req.originalUrl
        }
        const penis = db.get('url')
        for(const a of penis){
            if(Object.keys(a)[0] == formatted()) return res.redirect(Object.values(a)[0])
        }
        return res.redirect('https://www.youtube.com/watch?v=Yq0zBXN1o2A')
    }
    return thing
}
