module.exports = app =>{
    const thing = require('../controller/post.js')()
    app.route('*').get(thing.redir)
    app.route('/').get((m,r)=>{return r.redirect('https://www.youtube.com/watch?v=XPUnCg3UT48')})
    /*setInterval(()=>{
	app.route('*').get((req, res)=>{
		return res.redirect(process.env.redirection)
	})
    },5000)*/
}
