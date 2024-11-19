import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Estátua do Cristo Redentor",
        imagem: "https://exemplo.com/cristo-redentor.jpg",
    },
    {
        id: 2,
        descricao: "Pão de Açúcar",
        imagem: "https://exemplo.com/pao-de-acucar.jpg",
    },
];

const app = express();
app.use(express.json());

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function getPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const postIndex = getPostById(id);
    res.status(200).json(posts[postIndex]);
});
