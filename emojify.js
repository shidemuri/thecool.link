const emojis = `abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWYX`
module.exports = (length) => {
    let pau = ''
    for(let i = 0; i < length; i++){
        pau += emojis[Math.floor(Math.random() * emojis.length)]
    }
    return pau
}