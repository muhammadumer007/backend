// obj = [
//     {
//         id: 1,
//         name: 'umer',
//         address:'asc road'
//     },
//     {
//         id: 2,
//         name: 'umersad',
//         address: 'asc sadroad'
//     },
//     {
//         id: 3,
//         name: 'sadsa',
//         address: 'sds road',
//     },
// ]
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == '/obj') {
//         if (req.method == 'GET') {
            
//             console.log('GET')
//             res.write(JSON.stringify(obj))
            
//         }
//     }
//     res.end();
// });
// server.listen(3000);

// const express = require('express')

// const { url } = require('inspector')
// const data = express()
// data.get('/obj', (req, res) => {
//     res.send(obj)
// })
// data.listen(3000)





// npm i express

const express = require("express")
const courseRoute = require('./router/courseroute')
const UserRoute = require('./router/userroute')

// npm i dotenv
require("dotenv").config();


const App = express();

App.use(express.json)



App.listen(process.env.PORT, () => {
    console.log(`server is listening http://localhost:${process.env.PORT}`)
});
