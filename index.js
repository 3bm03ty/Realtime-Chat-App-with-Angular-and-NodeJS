const express = require('express');
const cors = require('cors')

const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1553538",
    key: "da667b5f6d7568499696",
    secret: "0ad15d448c53388a707c",
    cluster: "eu",
    useTLS: true
});



const app = express()
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([])
})

console.log("listening to port 8000");

app.listen(8000)