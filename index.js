import express from "express"
import path from "path"

const app = express()
const port = 3000
const __dirname = import.meta.dirname

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const movies = [
    { id: 1, title: "The Matrix", genre: "Sci-Fi" },
    { id: 2, title: "Inception", genre: "Sci-Fi" },
    { id: 3, title: "Interstellar", genre: "Sci-Fi" },

    { id: 4, title: "Macbeth", genre: "Tragedy" },
    { id: 5, title: "Hamlet", genre: "Tragedy" },
    { id: 6, title: "Requiem for a Dream", genre: "Tragedy" },

    { id: 7, title: "The Godfather", genre: "Crime" },
    { id: 8, title: "Goodfellas", genre: "Crime" },
    { id: 9, title: "Pulp Fiction", genre: "Crime" },

    { id: 10, title: "Titanic", genre: "Romance" },
    { id: 11, title: "The Notebook", genre: "Romance" },
    { id: 12, title: "Pride and Prejudice", genre: "Romance" },
]
//add code here
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "about.html"))
})

app.get("/about/:id", (req, res) => {
    const id = req.params.id
    res.send(`<p>The id is ${id}</p>`)
})

app.get("/newMovie", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "newMovie.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "contact.html"))
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})