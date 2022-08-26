export const delay = (s, cb) => {
    setTimeout(() => {
        cb && cb()
    }, s)
}