const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const keys = require('./config/keys')

app.get('/getData', async (req, res) => {
  try {
    const response = await axios.get(
      `https://us.api.battle.net/wow/auction/data/darkspear?locale=en_US&apikey=${keys.API_KEY}`
    )

    const data = await response.data.files,
      ApiUrl = await data[0].url,
      lastModified = await data[0].lastModified

    console.log(lastModified)

    // const realm = response.data.realms
    // const auctions = response.data.auctions
    res.send({ completed: true })
  } catch (e) {
    res.send({ completed: false })
  }
})

app.listen(9000, () => console.log('Server is running'))
