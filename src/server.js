import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const posts = [];

let post = {};

server.get("/home", (request, response) =>{
    response.send(posts);
})

server.get("/posts/:postId", (request, response) =>{
    const id = parseInt(request.params.postId);
    const postSelecionado = posts.find((item) => item["id"] === id);

    // for(let i = 0; i < posts.length; i++){
    //     if(posts[i].id === parseInt(id)){
    //         post.id = id,
    //         post.title = posts[i].title,
    //         post.coverUrl = posts[i].coverUrl,
    //         post.contentPreview = posts[i].contentPreview,
    //         post.content = posts[i].content
    //     }
    //      response.send(post)
    // }
    console.log(postSelecionado);
    response.send(postSelecionado);
    console.log("foi aqui");
})
   
server.post("/posts", (request, response) => {
    const beingPosted = request.body;
    posts.push(beingPosted);
    response.send(beingPosted) // opcional, uma requisição de post não necessarimente responde algo

})

server.listen(4000)