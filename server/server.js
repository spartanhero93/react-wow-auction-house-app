const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const API_KEY = require('./config')

app.get('/getData', async (req, res) => {
  try {
    const response = await axios.get(
      `https://us.api.battle.net/wow/auction/data/darkspear?locale=en_US&apikey=${API_KEY}`
    )

    console.log(response.data)
    // const realm = response.data.realms
    // const auctions = response.data.auctions
    res.send({ completed: true })
  } catch (e) {
    console.log(e)
  }
})

app.listen(9000, () => console.log('Server is running'))
