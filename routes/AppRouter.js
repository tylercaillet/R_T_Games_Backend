const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ReviewRouter = require('./ReviewRouter')
const ListingRouter = require('./ListingRouter')
Router.use('/', AuthRouter)
Router.use('/listing', ListingRouter)
Router.use('/review', ReviewRouter)
module.exports = Router