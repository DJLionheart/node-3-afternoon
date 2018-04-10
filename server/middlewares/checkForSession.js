module.exports = (req, res, next) => {
    if(!req.session.user){
        req.session.user = {
            username: '',
            car: [],
            total: 0
        }
    }
    next()
}