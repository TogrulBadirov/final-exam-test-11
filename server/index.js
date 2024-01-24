import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
const connectionUrl = "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/"

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    info: { type: String, required: true },
    price: { type: Number, required: true },
});

const Services = mongoose.model('Coacher', ServiceSchema);

app.get('/', async (req, res) => {
    try {
        const allServices = await Services.find({})
        res.status(200).send(allServices)
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const service = await Services.findById(id)
        res.status(200).send(service)
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.post('/', async (req, res) => {
    try {
        const newServices = new Services(req.body)
        await newServices.save()
        res.status(200).send("Service Created!")
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const service = await Services.findByIdAndDelete(id)
        res.status(200).send("Service Deleted!")
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

mongoose.connect(connectionUrl)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
