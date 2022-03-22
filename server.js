import express from "express";
import session from "express-session";
import nunjucks from "nunjucks";

const app = express();

app.use(express.static('static'))

nunjucks.configure("templates", {
    express: app,
    autoescape: true,
    watch: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'mi-clave',
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

app.get('/', async (req, res) => {

    res.render("index.html")
})

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
