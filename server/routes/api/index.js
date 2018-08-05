const express = require('express')
const router = express.Router()
const axios = require('axios')
const keys = require('../../config/keys')

router.get('/getData', async (req, res) => {
  try {
    const response = await axios.get(
      `https://us.api.battle.net/wow/auction/data/darkspear?locale=en_US&apikey=${keys.API_KEY}`
    )

    const data = response.data.files,
      ApiUrl = data[0].url,
      lastModified = data[0].lastModified

    const auctionData = await axios.get(ApiUrl)
    res.send({ data: auctionData.data })
  } catch (e) {
    res.send({ completed: false })
  }
})

module.exports = router
