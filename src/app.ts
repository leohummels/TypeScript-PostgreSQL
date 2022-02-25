import express, { Router, urlencoded } from 'express';
import routes from './routes/router';

const app = express()
const router:any = routes

app.get('/', (req, res) => {
    res.send('Home page!')
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(3000, () => {
    console.log('Running...')
})

module.exports = app