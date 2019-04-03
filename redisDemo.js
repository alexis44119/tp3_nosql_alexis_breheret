const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const app = express();

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


app.post('/note', (req, res)=> {
    const randomKey = makeId();

    const content = req.headers.content;
    console.log(randomKey);
    client.get(randomKey, (err, data)=> {
        // data is null if the key doesn't exist
        if (err || data === null) {
            client.set(randomKey, content, redis.print);
            res.send(randomKey)

        } else {
            console.log("already exists")
        }
    });
});

app.get("/note/:keyy", (req, res) => {
    client.get(req.params.keyy, (err, data)=> {
        (data !== null) ? res.send(data): res.send("bad key");
        res.send(data !== null ? data : "wrong key");
    });
});

app.get("/notes", async (req, res) => {
    await client.multi()
        .keys('*', async (err, replies)=> {
            console.log("Got " + replies.length + " notes");
            const resultsArray = [];
            let result = "";
            await replies.forEach(async (reply, index)=> {
                await client.get(reply, async (err, data)=>{
                    result = index + " - " + reply.toString() + " | content : " + data + "\n";
                    resultsArray.push(result)
                });
            });
            console.log(resultsArray)
        })
        .exec((err, replies)=> {
        });
});

