const express = require('express')

const fetch = require('node-fetch')
const favicon = require('serve-favicon');
const path = require('path')

const base64 = require('base-64');


// Importing config file ...
const config = require('./config/config')


const app = express()

// Server 
app.listen(config.port, () => console.log(`Running on port ${config.port}`))

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


const url = 'https://api-sandbox.fintecture.com/res/v1/providers'


app.get('/request', (req, res) => {
    const code = base64.encode(req.query.code)
    const authCode = base64.encode('authorization_code')
    const client_token = base64.encode(`${config.id}:${config.key}`)
    const redirect = 'https://lfwork.herokuapp.com'
    const fetchURL = `https://api-sandbox.fintecture.com/oauth/accesstoken?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`
    const response = fetch(fetchURL,
    {
        method: 'POST',
        headers: {
          "Authorization": `Basic ${client_token}`,
          "Accept": 'application/json',
          "Content-Type": 'application/x-www-form-urlencoded'
        },
      }).then(res => console.log(res))
       res.send(code)
    // res.redirect(`/?token=${json.access_token}`);
  });




// app.get('/request', (req,res) => {
//     const token = config.id+':'+config.key
//     const client_token = base64.encode(`${config.key}:${config.key}`)
//     const code = req.query.code
//     const postURL = `https://api-sandbox.fintecture.com/oauth/accesstoken`
    
//     const request = require("request")


//     const body = {
//         'grant_type': 'authorization_code',
//         'code': code
//     }

//     const options = { method: 'POST',
//     url: postURL,
//     headers: 
//     {    
//         'Accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + client_token },
//     formData: 
//      { 'grant_type': 'authorization_code',
//      'code': code } };
    
//     request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//     });
//     res.send(client_token)
  
// })


app.get('/', (req, res) => {
    res.send('work')
})


app.get('/bank', (req,res) => {
    fetch(url, {
    headers: {
        app_id: config.id
    }
}).then(res => res.json())
  .then(json => res.json(json))
  .catch(err => console.log(err))
})

app.get('/bank/account', (req,res) => {
    res.send('account')
})


