const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

//Dev logging middle ware  
// const logger = require('./middleware/logger')
const morgan = require('morgan')
const colors = require('colors')


//CONNECT DATABASE
const connectDB = require('./config/db')
connectDB();


//ROUTE FILES
const bootcamps = require('./routes/devcamp')



const app = express()

//Body Parser
app.use(express.json())



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// app.use(logger)

app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000
const server=app.listen(PORT, () => {
    console.log(`server on ${process.env.NODE_ENV} on port ${PORT}`.green.bold)

})

process.on('unhandledRejection',(err,promise)=>{
    console.log("ERROR SERVER",err.message.red.bold)
    server.close(()=>process.exit(1))
})