const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const userRouter = require('./routes/user.routes')
const buildingRouter = require('./routes/building.routes')


const app = express()

app.use(express.json())
/* istanbul ignore next */
if(process.env.ENV !== "test") app.use(morgan("tiny"))
app.use(cors())

app.use('/building', buildingRouter)
app.use('/user', userRouter)

/* istanbul ignore next */
const connectDatabase = async (dbName = 'reactstone', hostname = 'localhost') => {
    try {
        const database = await mongoose.connect(`mongodb://${hostname}/${dbName}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        if(process.env.ENV !== "test")
            console.log(`🗑️ Database connected at mongodb://${hostname}/${dbName}...`)
        return database
    } catch(err) {
        console.error(err)
    }
}

/* istanbul ignore next */
const startServer = async (hostname = "0.0.0.0", port = "8000") => {
    await connectDatabase()
    app.listen(port, hostname, async () => {
        await connectDatabase()
        if(process.env.ENV !== "test")
            console.log(`🚀 Server started at ${hostname}:${port}...`)
    })
}

module.exports = {
    connectDatabase,
    startServer,
    app
}