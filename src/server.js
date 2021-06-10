import express from 'express';
import cors from 'cors';


const posts = []

const server = express();
server.use(cors());

server.get("/home", (request, response) =>{
    response.send(posts);
})

server.post("/home", (request, response) => {
    const post = request.body;
    posts.push(post);

})

server.listen(4000)