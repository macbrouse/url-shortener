// const Router= require('express').Router()
const Router = require('express-promise-router')();

const {nanoid}=require('nanoid')
const urls= require('../models/url')

Router.post('/shorten', async (req, res) => {
    const longUrl = req.body.tbShortened
    const shortUrl = nanoid()
    const url = await urls.create({longUrl, shortUrl})
    // await url.save()
    res.send(shortUrl)
})
Router.get('/:shortUrl', async (req, res) => {
    const Url = await urls.findOne({'shortUrl': `${req.params.shortUrl}`})
    res.redirect(Url.longUrl)
})

module.exports = Router