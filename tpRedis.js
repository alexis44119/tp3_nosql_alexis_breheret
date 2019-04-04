const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) =>{
    console.log('Something went wrong ' + err);
});

app.get('/', (req, res)=> {
    res.send(req.toString());
});

app.listen(3000, ()=> {
    console.log("Node server is running..");
});

const makeId = ()=>{
    const length = 5;
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};


app.post('/note/:author', (req, res)=> {
    const d = new Date();
    const e = formatDate(d);
    const randomKey = makeId();
    const content = req.body.content;
    const author = req.params.author;
    const creation_date = e;

    client.exists(randomKey, (err, reply)=> {
        if (!reply) {
            client.set(randomKey, content + " | author : " + author + " | creation date : " + creation_date, redis.print);
            console.log(randomKey + " created");
            res.send(randomKey)
        } else {
            console.log("already exists")
        }
    });
});
app.get("/note/:rKey", (req, res) => {
    client.get(req.params.rKey, (err, data)=> {
        res.send(data !== null ? data : "wrong key");
    });
});

app.get("/notes", (req, res) => {
    client.multi()
        .keys('*', (err, replies)=> {
            console.log("Got " + replies.length + " notes");
            replies.forEach((reply, index)=> {
                client.get(reply, (err, data)=>{
                    console.log(index + " - " + reply.toString() + " | content : " + data + "\n");
                });
            });
            (!err) ? res.send("list logged", 200): res.status(404).send("empty list");
        })
        .exec((err, replies)=> {
        });
});

app.delete('/notes/:rKey', (req, res)=> {
    client.del(req.params.rKey, (err, response)=> {
        res.send((response === 1) ? "Deleted Successfully!": "Cannot delete");
    });
});

const formatDate = (date)=> {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
};


